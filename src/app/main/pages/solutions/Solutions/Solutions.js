import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate, Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import SolutionBox from "./SolutionBox/SolutionBox";
import { supabase } from "../../../../supabaseClient";
import { setCurrentSolution } from "./store/currentSolutionSlice";

export default function Solutions({ session }) {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getSolutionServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  async function getSolutionServices() {
    const solutionId = 84;
    try {
      setLoading(true);

      const query = `id,config,solution(*),service(*)`;

      const { data, error, status } = await supabase
        .from("solution_services")
        .select(query)
        .eq("solutionId", solutionId);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setApiData(data);
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const routeChange = (item) => {
    const Solution = item.service ? JSON.parse(item.service.api) : {};
    dispatch(setCurrentSolution(Solution));

    console.log(item, "item");
    const path = `/pages/solutions/Solutions/SolutionDetail/${item.id}`;
    navigate(path);
  };

  return (
    <>
      <br />
      <br />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {apiData &&
          apiData.map((item, index) => (
            <Grid item xs={6} key={index}>
              {console.log(item, "item")}

              <Button
                className="min-h-40 min-w-40 px-0 md:px-16 py-0 md:py-6"
                onClick={(e) => routeChange(item)}
                color="inherit"
              >
                <SolutionBox item={item} />
              </Button>
            </Grid>
          ))}
      </Grid>
    </>
  );
}
