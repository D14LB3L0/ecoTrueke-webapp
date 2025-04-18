import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage";
import { ResetPasswordPage } from "../pages/ResetPasswordPage";

const AuthLayout = () => {
  return (
    <>
      <Outlet />
      <>
        <Routes>
          <Route path="/*" element={<Navigate to="/auth/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </>
    </>
  )
}

export default AuthLayout; 