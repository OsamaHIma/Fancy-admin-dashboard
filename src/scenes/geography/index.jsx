import { Box , useTheme} from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="Geography Chart" subTitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.gray[100]}`}
        borderRadius="3px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};
export default Geography;
