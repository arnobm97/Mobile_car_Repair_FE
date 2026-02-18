"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email"),
  phone: z.string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^[0-9+\s()-]+$/, "Invalid phone number"),
  message: z.string().trim().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormValues) => void;
  submitButtonText?: string;
}

export const ContactForm = ({
  onSubmit
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleSubmitForm = async (data: ContactFormValues) => {
    if (!executeRecaptcha) {
      alert("reCAPTCHA not ready. Please try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA v3 invisibly and get token
      const captchaToken = await executeRecaptcha("contact_form");

      if (onSubmit) {
        await onSubmit(data);
      } else {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, captchaToken }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        alert("Message sent successfully!");
      }
      reset();
    } catch (error) {
      console.log(error);
      alert("Failed to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="mx-auto bg-brand shadow-md p-4 sm:p-8 space-y-4 sm:space-y-6"
    >
      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-none outline-hidden bg-primary focus:outline-none"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-none outline-hidden bg-primary focus:outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <input
          type="tel"
          placeholder="Phone"
          {...register("phone")}
          className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-none outline-hidden bg-primary focus:outline-none"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      {/* Message */}
      <div>
        <textarea
          placeholder="Message"
          rows={4}
          {...register("message")}
          className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-none outline-hidden bg-primary focus:outline-none"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-secondary text-brand py-2 sm:py-3 text-sm sm:text-base font-semibold transition disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
