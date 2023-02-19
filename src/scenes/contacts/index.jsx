import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex:0.5
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    
  ];
  return (
    <Box>
      <Header title="CONTACTS" subTitle="List of Contacts for Future Reference" />
      <Box
        m="40px 0 0 0 "
        height="75vh"
        sx={{
          "& .name-column-cell": {
            color: colors.green[300],
          },
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blue[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blue[700],
            borderTop: "none",
          },
          "& .MuiDataGrid-virtualScrollbar": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: colors.gray[100],
          },
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} sx={{ m: "10px" }} components={{Toolbar: GridToolbar}} />
      </Box>
    </Box>
  );
};
export default Contacts;
