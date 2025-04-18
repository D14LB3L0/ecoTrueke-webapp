import { AuthLayout } from "../components/AuthLayout"
import { ResetPasswordForm } from "../components/ResetPasswordForm"

export const ResetPasswordPage = () => {
    return (
        <AuthLayout
            formComponent={<ResetPasswordForm />}
            image={{ src: '/auth/recuperar-contrasena.webp', alt: 'EcoTrueke contraseña' }}
        >
        </AuthLayout>
    )
}
