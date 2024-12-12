"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle, ArrowRight } from "lucide-react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <Form {...form}>
      <div className="py-20 px-4 bg-white" id="contact">
        {!isSubmitted ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto w-full flex flex-col gap-4 my-12"
          >
            <h2 className="text-4xl text-primary font-semibold text-center">
              Contact Us
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                name="firstName"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem className="flex-1">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                name="lastName"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Doe" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      {...field}
                      placeholder="Your message..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        ) : (
          <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <h2 className="text-3xl font-bold">Thank You!</h2>
            <p className="text-xl">Your message has been sent successfully.</p>
            <div className="bg-gray-100 p-6 rounded-lg w-full max-w-md">
              <h3 className="text-lg text-primary font-semibold mb-2">
                What&apos;s Next?
              </h3>
              <ul className="text-left list-disc list-inside space-y-2">
                <li>We&apos;ll review your message</li>
                <li>Our team will get back to you within 24-48 hours</li>
                <li>We may reach out for additional information if needed</li>
              </ul>
            </div>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                form.reset();
              }}
              className="mt-4"
            >
              Send Another Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </Form>
  );
}
