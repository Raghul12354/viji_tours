import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Modal() {
  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button type="submit" variant="outline">
            Submit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md md:w-screen h-[40vh] flex items-center gap-5">
          <DialogHeader>
            <DialogTitle className="text-3xl">
              Your form has been submitted successfully.
            </DialogTitle>
            <DialogDescription className="pt-2">
              Our agents are on standby to assist you promptly. Expect to hear
              from us very soon!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  );
}
