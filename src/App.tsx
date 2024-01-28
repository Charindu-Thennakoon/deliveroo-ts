import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// Import Suspense and lazy from React
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy load the Menu component
const Menu = React.lazy(() => import("./pages/Menu"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/menu"
            element={
              // Use Suspense to wrap the lazy-loaded component
              <Suspense fallback={<div>Menu Loading...</div>}>
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
