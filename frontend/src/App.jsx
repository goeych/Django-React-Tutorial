import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const noNavbar = location.pathname === "/register" || location.pathname === "/login";

  return (
    <>
      {noNavbar ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterAndLogout />} />
        </Routes>
      ) : (
        <Navbar
          content={
            <Routes>
              <Route path="/logout" element={<Logout />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
            </Routes>
          }
        />
      )}
    </>
  );
}

export default App;
