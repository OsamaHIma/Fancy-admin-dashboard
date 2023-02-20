import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ subtitle, icon, progress }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const randomTitleNum = Math.floor(Math.random() * 100001);
  const randomProgressNum = Math.random().toFixed(2);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
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
          <ProgressCircle progress={randomProgressNum} />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" sx={{ color: colors.green[100] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.green[600] }}
        >
          +{(randomProgressNum * 100).toFixed()}%
        </Typography>
      </Box>
    </Box>
  );
};
export default StatBox;
