"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { inquiryTypes } from "@/lib/content/pages";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: inquiryTypes[0],
      message: "",
    },
  });

  function onSubmit() {
    toast.success("Thank you for your message!", {
      description:
        "Form submissions will be enabled soon. Please email us at info@spherearth.ca in the meantime.",
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-1">
          <Label htmlFor="name" className="sr-only">
            Full Name
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Full Name"
            className="h-12 rounded-none bg-background focus-visible:border-input focus-visible:ring-0"
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="email" className="sr-only">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Email Address"
            className="h-12 rounded-none bg-background focus-visible:border-input focus-visible:ring-0"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="phone" className="sr-only">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="Phone Number"
            className="h-12 rounded-none bg-background focus-visible:border-input focus-visible:ring-0"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="inquiryType" className="sr-only">
            Inquiry Type
          </Label>
          <Select
            defaultValue={inquiryTypes[0]}
            onValueChange={(value) => setValue("inquiryType", value as string)}
          >
            <SelectTrigger
              id="inquiryType"
              className="h-12 w-full rounded-none bg-background data-[size=default]:h-12 focus-visible:border-input focus-visible:ring-0"
            >
              <SelectValue placeholder="General Inquiry" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              {inquiryTypes.map((type) => (
                <SelectItem key={type} value={type} className="rounded-none">
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.inquiryType && (
            <p className="text-xs text-destructive">
              {errors.inquiryType.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Write Here..."
          rows={7}
          className="rounded-none bg-background focus-visible:border-input focus-visible:ring-0"
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex justify-center pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-auto min-h-[52px] w-fit gap-2 rounded-none bg-brand-green px-8 py-3.5 text-base font-semibold hover:bg-brand-green/90"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <ArrowRight className="size-4 stroke-[2.5]" aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
}
