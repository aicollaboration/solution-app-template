import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OpenApi from "../OpenApi/OpenApi";

export default function SolutionDetail(props) {
  console.log(props);
  const value = useSelector((state) => state.solution.currentSolutionSlice);
  const navigate = useNavigate();

  console.log(value, "value");
  console.log(value.data);
  // const { location } = props;

  if (value && value.data && Object.keys(value.data).length === 0) {
    const path = `/pages/solutions/Solutions/`;
    navigate(path);
    return "";
  }

  return <OpenApi selectedData={value} />;
}
