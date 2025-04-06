import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useLoginForm } from "../hooks/useLoginForm"
import { Input } from "@/components/ui/input";

import { User } from "lucide-react"
import { Button } from "@/components/ui/button";

export const LoginForm = () => {

    const { form, handleSubmit } = useLoginForm();

    return (
        <div className="space-y-2">
            <div className="">
                <h1 className="text-2xl font-bold block">Iniciar Sesión</h1>
                <p className="text-xs block">¿No tienes una cuenta? <Button className="p-0 text-xs" variant={"link"}>Regístrate aquí</Button></p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className="flex flex-col gap-2 md:max-w-[450px]">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormControl>
                                        <Input iconPrefix={<User size={16} />} placeholder="Correo Electrónico" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="password" placeholder="Contraseña" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="flex justify-start p-0 text-xs" variant={"link"}>Olvidé mi contraseña</Button>

                        <Button className="">Ingresar</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
