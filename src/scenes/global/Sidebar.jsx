// import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const SidebarItem = ({ title, to, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      className="d-flex"
      sx={{
        color: colors.gray[100],
        padding: "1.3rem 1rem",
        "&:hover": {
          backgroundColor: `${colors.green[400]}10 !important`,
          borderRadius: "7px",
        },
        "&:has(a.active)": {
          color: "#6870fa",
        },
        "a:hover": {
          color: "currentColor !important",
        },
      }}
    >
      <li>
        {icon}
        <NavLink
          to={to}
          style={{
            marginLeft: "1.3rem",
            fontWeight: "600",
            transition: ".2s all ease-in-out",
            width: "100%",
          }}
        >
          {title}
        </NavLink>
      </li>
    </Box>
  );
};

const SidebarMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <nav className="navbar fixed-top pt-3">
      <div className="container-fluid p-0 ms-3">
        <IconButton
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <MenuOutlinedIcon />
        </IconButton>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ maxWidth: "80%", width: "300px" }}
        >
          <div
            className="offcanvas-header"
            style={{ backgroundColor: colors.primary[400] }}
          >
            <Typography variant="h3" color={colors.gray[100]}>
              ADMINS
            </Typography>
            <IconButton data-bs-dismiss="offcanvas" aria-label="Close">
              <CloseOutlinedIcon />
            </IconButton>
          </div>
          <div
            className="offcanvas-body pe-0"
            style={{ backgroundColor: colors.primary[400] }}
          >
            <Box mb="25px" mt="10px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src="/assets/meme.jpg"
                  alt="Profile-user"
                  className="w-75 shadow rounded-circle"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.gray[100]}
                  sx={{ mt: "10px" }}
                >
                  Osama Ibrahim
                </Typography>
                <Typography variant="h5" color={colors.green[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <Box>
                <SidebarItem
                  title="Dashboard"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                />
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Data
                </Typography>
                <SidebarItem
                  title="Manage Team"
                  to="/team"
                  icon={<PeopleOutlinedIcon />}
                />
                <SidebarItem
                  title="Contacts Information"
                  to="/contacts"
                  icon={<ContactsOutlinedIcon />}
                />
                <SidebarItem
                  title="Invoices Balances"
                  to="/invoices"
                  icon={<ReceiptOutlinedIcon />}
                />
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Pages
                </Typography>
                <SidebarItem
                  title="Profile Form"
                  to="/form"
                  icon={<PersonOutlinedIcon />}
                />
                <SidebarItem
                  title="Calendar"
                  to="/calendar"
                  icon={<CalendarTodayOutlinedIcon />}
                />
                <SidebarItem
                  title="FAQ Page"
                  to="/faq"
                  icon={<HelpOutlinedIcon />}
                />
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Charts
                </Typography>
                <SidebarItem
                  title="bar Chart"
                  to="/bar"
                  icon={<BarChartOutlinedIcon />}
                />
                <SidebarItem
                  title="Pie Chart"
                  to="/pie"
                  icon={<PieChartOutlineOutlinedIcon />}
                />
                <SidebarItem
                  title="Line Chart"
                  to="/line"
                  icon={<TimelineOutlinedIcon />}
                />
                <SidebarItem
                  title="Geography Chart"
                  to="/geography"
                  icon={<MapOutlinedIcon />}
                />
              </Box>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default SidebarMenu;
