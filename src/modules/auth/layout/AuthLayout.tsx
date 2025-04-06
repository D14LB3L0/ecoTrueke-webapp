import { Outlet, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"

const AuthLayout = () => {
  return (
    <>
      <Outlet />
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </>
    </>
  )
}

export default AuthLayout; 