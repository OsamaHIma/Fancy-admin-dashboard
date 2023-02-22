import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";

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
    <MenuItem
      style={{ color: colors.gray[100] }}
      icon={icon}
      component={<NavLink to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarMenu = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
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
        }}
        className="sidebar"
        defaultCollapsed={true}
      >
        <Menu iconShape="square">
          {/* Logo and menu icon */}
          {isMobile ? undefined : (
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
          )}
          {/* User */}
          {!collapsed && (
            <Box mb="25px" mt="10px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src="/assets/meme.jpg"
                  alt="Profile-user"
                  width="75%"
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
              icon={<TimelineOutlinedIcon />}
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
export default SidebarMenu;
