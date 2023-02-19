import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimeLineOutlinedIcon from "@mui/icons-material/TimeLineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const SidebarItem = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <NavLink to={to}>
      <MenuItem style={{ color: colors.gray[100] }} icon={icon}>
        <Typography>{title}</Typography>
      </MenuItem>
    </NavLink>
  );
};

const Sidebarl = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      height="100%"
      sx={{
        ".active *": {
          color: "#6870fa",
          fontWeight: "600",
        },
      }}
    >
      <Sidebar
        style={{
          border: "none",
          height: "100%",
        }}
        rootStyles={{
          ".ps-sidebar-container": {
            background: `${colors.primary[400]}`,
          },
          ".ps-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          ".ps-menu-button": {
            transition: ".2s all ease-in-out",
          },
          ".css-16jkw2k >.ps-menu-button:hover": {
            backgroundColor: `${colors.green[400]}10`,
            borderRadius: "7px",
          },
          ".css-16jkw2k >.ps-menu-button": {
            paddingLeft: "15px",
          },
          // ".ps-menuitem-root": {
          //   color: "#333",
          //   backgroundColor: "transparent",
          // },
          // ".css-16jkw2k >.ps-menu-button:hover": {
          //   color: "#6870fa",
          // },
        }}
        className="sidebar"
      >
        <Menu iconShape="square">
          {/* Logo and menu icon */}
          <MenuItem
            onClick={() => collapseSidebar()}
            style={{
              paddingTop: "13px",
              color: colors.gray[100],
              backgroundColor: "transparent",
            }}
            icon={
              collapsed ? (
                <IconButton>
                  <MenuOutlinedIcon />
                </IconButton>
              ) : (
                <IconButton>
                  <CloseOutlinedIcon />
                </IconButton>
              )
            }
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.gray[100]}>
                  ADMINS
                </Typography>
              </Box>
            )}
          </MenuItem>
          {/* User */}
          {!collapsed && (
            <Box mb="25px" mt="10px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src="/assets/myphoto.jfif"
                  alt="Profile-user"
                  width="100px"
                  height="100px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
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
          )}
          {/* Menu items */}
          <Box>
            <SidebarItem title="Dashboard" to="/" icon={<HomeOutlinedIcon />} />
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
              icon={<TimeLineOutlinedIcon />}
            />
            <SidebarItem
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};
export default Sidebarl;
