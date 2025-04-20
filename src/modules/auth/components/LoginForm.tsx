import { Form, FormField, FormItem } from "@/components/ui/form";
import { useLoginForm } from "../hooks/useLoginForm";
import { Spinner } from "@/components/ui/spinner";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InputWithErrorTooltip } from "@/utils/security/inputWithErrorTooltip";

export const LoginForm = () => {
    const { form, handleSubmit, isLoading } = useLoginForm();

    return (
        <div className="space-y-2">
            <div>
                <h1 className="text-2xl font-bold block">Iniciar Sesión</h1>
                <p className="text-xs block">
                    ¿No tienes una cuenta?
                    <span> </span>
                    <Link to={"/auth/register"}>
                        <Button className="p-0 text-xs" variant={"link"}>
                            Regístrate aquí
                        </Button>
                    </Link>
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className="flex flex-col gap-2 md:min-w-[570px]">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <InputWithErrorTooltip
                                        field={{ ...field, formState: form.formState }}
                                        name="email"
                                        placeholder="Correo Electrónico"
                                        iconPrefix={<User size={16} />}
                                    />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <InputWithErrorTooltip
                                        field={{ ...field, formState: form.formState }}
                                        name="password"
                                        placeholder="Contraseña"
                                        password
                                    />
                                </FormItem>
                            )}
                        />

                        <Link to={"/auth/reset-password"}>
                            <Button type="button" className="flex justify-start p-0 text-xs" variant={"link"}>
                                Olvidé mi contraseña
                            </Button>
                        </Link>

                        <Button type="submit">
                            {isLoading && <Spinner size="sm" />} Ingresar
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
