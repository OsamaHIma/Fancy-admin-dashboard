import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import "./preloader.scss";

const Preloader = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box className="preloader" backgroundColor={colors.green[400]}>
      <div className="preloader-wrapper">
        <div className="loading">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </Box>
  );
};
export default Preloader;
