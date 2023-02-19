import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Dashboard = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="DASHBOARD" subTitle="Welcome to your dashboard!" />
    </Box>
  );
};
export default Dashboard;
