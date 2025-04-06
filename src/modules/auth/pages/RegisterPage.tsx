import { AuthLayout } from "../components/AuthLayout"
import { RegisterForm } from "../components/RegisterForm"

export const RegisterPage = () => {
    return (
        <AuthLayout
            formComponent={<RegisterForm />}
            image={{ src: "register.webp", alt: "EcoTrueke logo horizontal" }}>
        </AuthLayout>
    )
}
