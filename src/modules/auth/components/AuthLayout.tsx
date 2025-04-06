
interface ILayoutImage {
    src: string,
    alt: string
}

interface IAuthLayout {
    formComponent: React.ReactNode
    image: ILayoutImage
}

export const AuthLayout = ({ formComponent, image }: IAuthLayout) => {
    return (
        <div className="grid md:grid-cols-2 items-center p-10 lg:p-8 2xl:p-16 gap-40 w-full min-h-screen overflow-hidden bg-background transition-all duration-300 ease-in-out">
            <div className="lg:max-w-[650px] md:flex md:justify-end md:ml-auto">{formComponent}</div>
            <div className="hidden md:block max-w-[650px] overflow-hidden max-h-[600px] rounded-xl">
                <img src={image.src} alt={image.alt} />
            </div>
        </div>
    )
}
