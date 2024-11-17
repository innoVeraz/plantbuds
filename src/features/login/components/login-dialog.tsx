import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/dialog";

export default function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger>LOG IN</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Log in</DialogTitle>
          <DialogDescription>Log in with google or email</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
