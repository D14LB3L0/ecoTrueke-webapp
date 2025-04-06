
interface IAuthLayout {
    formComponent: React.ReactNode
}

export const AuthLayout = ({ formComponent }: IAuthLayout) => {
    return (
        <div className="grid md:grid-cols-2 items-center p-10 lg:p-20 gap-20 w-full min-h-screen overflow-hidden bg-background transition-all duration-300 ease-in-out">
            <div className="lg:max-w-[650px] pl-0 md:pl-20 lg:pl-40">{formComponent}</div>
            <div className="hidden md:block max-w-[650px]">
                <img src="/auth/logo-vertical.webp" alt="EcoTrueke logo vertical" className="rounded-xl" />
            </div>
        </div>
    )
}
