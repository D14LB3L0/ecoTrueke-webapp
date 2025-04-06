import { AuthLayout } from "../components/AuthLayout"
import { LoginForm } from "../components/LoginForm"

export const LoginPage = () => {
  return (
    <AuthLayout formComponent={<LoginForm />}></AuthLayout>
  )
}
