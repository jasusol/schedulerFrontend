import { Routes, Route, Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./home";
import AppRouter from "./router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <AppRouter></AppRouter>
      </div>
    // </LocalizationProvider>
  );
}
