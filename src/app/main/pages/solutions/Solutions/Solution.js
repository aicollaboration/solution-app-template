import { useState, useEffect } from "react";
import Loading from "../../../../atoms/Loading/Loading";
import { supabase } from "../../../../supabaseClient";

export default function Solution() {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getSolution();
  }, []);

  async function getSolution() {
    
console.log(process.env.REACT_APP_MAP_KEY,"SOLUTION_ID",process.env)

    const solutionId = 91;
    try {
      setLoading(true);
      const { data, error, status } = await supabase
        .from("solution")
        .select(`*`)
        .eq("id", solutionId)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setDatas(data);
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget">
      {loading && <Loading />}
      {!loading && (
        <>
          <br />
          Solution Name: {datas.name}
          <br />
          {datas.description ? `Desc :${datas.description}` : ""}
          <br />
          <br />
        </>
      )}
    </div>
  );
}
