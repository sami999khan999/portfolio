"use client";

import { Input } from "./ui/input";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChande = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateId = "template_wfvg3ze";
    const serviceId = "service_mi02xbb";
    const publicKey = "B7ZbiG-5itYXTy4df";

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: "Sami Khan",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setForm({
          name: "",
          email: "",
          message: "",
        });

        toast.success("Email sent");
      })
      .catch((error) => {
        toast.error("Failed to send");
      });
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={handleChande}
        />
        <User className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChande}
        />
        <MailIcon className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Textarea
          placeholder="Type your Message Here..."
          name="message"
          onChange={handleChande}
          value={form.message}
        />
        <MessageSquare className="absolute top-4 right-6" />
      </div>

      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Send
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
