import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const randomNum = Math.floor(Math.random() * 1000001);

  return (
    <Box m="10px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard!" />
        <Box>
          <Button
            sx={{
              color: colors.gray[100],
              backgroundColor: colors.blue[700],
              fontSize: "14px",
              padding: "10px 20px",
              fontWeight: "bold",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Grid and Charts */}

      {/* Row one */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="5px"
        >
          <StatBox
            subtitle="Email Sent"
            icon={<EmailIcon sx={{ color: colors.green[600] }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          borderRadius="5px"
          alignItems="center"
        >
          <StatBox
            subtitle="Sales optioned"
            icon={<PointOfSaleIcon sx={{ color: colors.green[600] }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          borderRadius="5px"
          alignItems="center"
        >
          <StatBox
            subtitle="New Clients"
            icon={<PersonAddIcon sx={{ color: colors.green[600] }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          borderRadius="5px"
          alignItems="center"
        >
          <StatBox
            subtitle="Traffic Received"
            icon={<TrafficIcon sx={{ color: colors.green[600] }} />}
          />
        </Box>

        {/* Row two */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="5px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.gray[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.green[500]}
              >
                ${randomNum.toLocaleString("en-US")}
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: colors.green[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          {/* Line chart */}
          <Box height="250px" mt="-17px">
            <LineChart isDashBoard={true} />
          </Box>
        </Box>

        {/* Transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          borderRadius="5px"
        >
          <Box
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.gray[100]}
            p="15px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((trans, i) => (
            <Box
              key={`${trans.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.green[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {trans.txId}
                </Typography>
                <Typography color={colors.gray[100]}>{trans.user}</Typography>
              </Box>
              <Box color={colors.gray[100]}>{trans.date}</Box>
              <Box
                backgroundColor={colors.green[500]}
                p="5px 10px"
                borderRadius="5px"
              >
                {trans.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Row 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius="5px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              color={colors.green[500]}
              variant="h5"
              sx={{ mt: "15px" }}
            >
              ${randomNum} Revenue Generated
            </Typography>
            <Typography>Include taxes</Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px 0"
          borderRadius="5px"
        >
          <Typography variant="h5" fontWeight="600" mx="30px">
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashBoard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px 0"
          borderRadius="5px"
        >
          <Typography variant="h5" fontWeight="600" mx="30px" mb="20px">
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashBoard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;
