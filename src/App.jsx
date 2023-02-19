import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebarl from "./scenes/global/Sidebar";
import { useEffect, useState } from "react";
import Preloader from "./scenes/Loading";

import Invoices from "./scenes/invoices";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Calendar from "./scenes/calendar";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import PieChart from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {loading ? (
            <Preloader />
          ) : (
            <>
              <Sidebarl />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<PieChart />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/geography" element={<Geography />} />
                </Routes>
              </main>
            </>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
