import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"
import { Spinner } from "./ui/spinner"

interface PopupDelete {
    title: string
    description: string
    actionButton: string
    handleSubmit: () => Promise<void>
    open: boolean
    setOpen: (open: boolean) => void
    isLoading: boolean
}

export const PopupDelete = ({ title, description, actionButton, handleSubmit, open, setOpen, isLoading }: PopupDelete) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription className="text-black">{description}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button disabled={isLoading} variant="outline" onClick={() => setOpen(false)}>
                        Cancelar
                    </Button>
                    <Button disabled={isLoading} variant="destructive" onClick={handleSubmit}>
                        {isLoading && <Spinner size="sm" />} {actionButton}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
