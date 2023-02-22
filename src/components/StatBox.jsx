import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ subtitle, icon, progress }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const randomTitleNum = Math.floor(Math.random() * 100001);
  const randomProgressNum = Math.random().toFixed(2);
  return (
    <div className="row d-flex">
      <div className="col-md-6 text-center">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.gray[100] }}
          >
            {randomTitleNum.toLocaleString("en-US")}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: colors.green[100], mt: 1.7 }}>
            {subtitle}
          </Typography>
        </Box>
      </div>

      <div className="col-md-6 text-center">
        <ProgressCircle progress={randomProgressNum} size="60"/>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.green[600], mt:1 }}
        >
          +{(randomProgressNum * 100).toFixed()}%
        </Typography>
      </div>
    </div>
  );
};
export default StatBox;
