import { AuthLayout } from "../components/AuthLayout"
import { LoginForm } from "../components/LoginForm"

export const LoginPage = () => {
  return (
    <AuthLayout
      formComponent={<LoginForm />}
      image={{ src: "/auth/logo-vertical.webp", alt: "EcoTrueke logo vertical" }}>
    </AuthLayout>
  )
}
