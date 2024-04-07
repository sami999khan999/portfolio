import { Input } from "./ui/input";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" />
      </div>
      cleaar
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Type your Message Here..." />
        <MessageSquare className="absolute top-4 right-6" />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Send
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
