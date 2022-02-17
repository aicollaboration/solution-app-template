import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

/**
 * @author
 * @function Loading
 * */

const Loading = ({ text = "Loading" }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress /> {text}
    </Box>
  );
};

export default Loading;
