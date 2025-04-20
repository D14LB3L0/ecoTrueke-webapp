import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Spinner } from "@/components/ui/spinner";
import { RequiredLabel } from "@/utils/requiredLabel";
import { useResetPasswordForm } from "../hooks/useResetPasswordForm";
import { InputWithErrorTooltip } from "@/utils/security/inputWithErrorTooltip";

export const ResetPasswordForm = () => {
    const { form, handleSubmit, isLoading } = useResetPasswordForm();

    return (
        <div className="space-y-2 flex flex-col justify-between gap-5">
            <div>
                <h1 className="text-2xl font-bold block">Recuperar Contraseña</h1>
                <p className="text-xs block">
                    Ingresa tu correo y te enviaremos una nueva contraseña para acceder.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className="flex flex-col gap-6 md:min-w-[570px]">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-semibold">
                                        <RequiredLabel>Correo Electrónico</RequiredLabel>
                                    </FormLabel>
                                    <InputWithErrorTooltip
                                        field={{ ...field, formState: form.formState }}
                                        name="email"
                                        placeholder="Correo Electrónico"
                                    />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">
                            {isLoading && <Spinner size="sm" />} Enviar
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
