"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const careersSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
});

type CareersFormData = z.infer<typeof careersSchema>;

const darkFieldClasses =
  "h-12 rounded-none border-white/20 bg-white/5 text-white placeholder:text-white/60 focus-visible:border-brand-green focus-visible:ring-brand-green/40";

export function CareersForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  function onSubmit() {
    toast.success("Application received!", {
      description:
        "Online applications will be enabled soon. Please email your resume to info@spherearth.ca in the meantime.",
    });
    reset();
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-br-[3rem] border-t-4 border-brand-green bg-[#1e1e1e] text-white shadow-xl">
      <div className="p-7 sm:p-8">
        <h2 className="text-2xl font-bold">Application Form</h2>
        <p className="mt-1 text-sm text-white/70">
          Fill the form to submit your resume.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 space-y-4"
          noValidate
        >
          <div>
            <label htmlFor="career-name" className="sr-only">
              Full Name
            </label>
            <Input
              id="career-name"
              {...register("name")}
              placeholder="Full Name"
              className={darkFieldClasses}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="career-email" className="sr-only">
              Email Address
            </label>
            <Input
              id="career-email"
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className={darkFieldClasses}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="career-phone" className="sr-only">
              Phone Number
            </label>
            <Input
              id="career-phone"
              type="tel"
              {...register("phone")}
              placeholder="Phone Number"
              className={darkFieldClasses}
            />
          </div>

          <div>
            <label htmlFor="career-resume" className="sr-only">
              Resume
            </label>
            <Input
              id="career-resume"
              type="file"
              accept=".pdf,.doc,.docx"
              className="h-12 cursor-pointer rounded-none border-white/20 bg-white/5 py-2.5 pl-3 text-sm text-white/70 file:mr-3 file:h-7 file:cursor-pointer file:rounded-none file:border-0 file:bg-brand-green file:px-3 file:text-sm file:font-medium file:text-white"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-auto min-h-[52px] w-fit gap-2 rounded-none bg-brand-green px-8 py-3.5 text-base font-semibold hover:bg-brand-green/90"
          >
            {isSubmitting ? "Submitting..." : "Send Resume"}
            <ArrowRight className="size-4 stroke-[2.5]" />
          </Button>
        </form>
      </div>
    </div>
  );
}
