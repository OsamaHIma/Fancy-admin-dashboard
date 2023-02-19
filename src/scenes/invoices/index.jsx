import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
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
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: ({ row }) => (
        <Typography color={colors.green[500]}>${row.cost}</Typography>
      ),
    },
  ];
  return (
    <Box>
      <Header title="INVOICES" subTitle="List of invoice balance" />
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
          "& .MuiButtonBase-root": {
            color: `${colors.green[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          sx={{ m: "10px" }}
        />
      </Box>
    </Box>
  );
};
export default Invoices;
