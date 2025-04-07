
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
        <div className="flex items-center justify-center p-10 lg:p-8 2xl:p-16 w-full min-h-screen bg-background transition-all duration-300 ease-in-out">
            <div className="flex max-w-[1300px] w-full gap-20 items-center justify-between">
                <div className="w-full max-w-[650px] md:pl-10">{formComponent}</div>
                <div className="hidden md:block w-full max-w-[650px] max-h-[600px] overflow-hidden rounded-xl">
                    <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    )
}
