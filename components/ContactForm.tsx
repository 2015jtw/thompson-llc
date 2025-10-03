"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { sendEmail } from "@/app/actions/sendEmail";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be 500 characters or less"),
  organization: z.string().optional(),
  country: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const gradientOptions = [
  "from-blue-500 via-emerald-500 to-teal-500",
  "from-purple-500 via-pink-500 to-orange-400",
  "from-sky-500 via-indigo-500 to-blue-600",
  "from-emerald-500 via-teal-500 to-cyan-500",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      organization: "",
      country: "",
    },
  });

  const [gradientClass, setGradientClass] = useState(gradientOptions[0]);

  useEffect(() => {
    const randomGradient = gradientOptions[Math.floor(Math.random() * gradientOptions.length)];
    setGradientClass(randomGradient);
  }, []);

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    setIsSuccess(null);

    try {
      const result = await sendEmail(values);

      if (result.success) {
        setIsSuccess(true);
        setSubmitMessage("Your message has been sent successfully! We'll be in touch soon.");
        form.reset();
      } else {
        setIsSuccess(false);
        setSubmitMessage(result.message ?? "Failed to send message. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      if (error instanceof Error) {
        setSubmitMessage(`An error occurred: ${error.message}`);
      } else {
        setSubmitMessage("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl" aria-hidden="true" />

      {isSuccess && <Confetti numberOfPieces={200} recycle={false} />} 

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-10 items-start">
            {/* Intro Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 font-medium text-sm">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Let&apos;s partner up
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Start a conversation about your next ambitious project
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Share the opportunity you&apos;re exploring, and we&apos;ll shape a plan that combines strategic insight with practical execution—tailored to the communities and partners you serve.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-[0.2em]">Response Time</p>
                  <p className="mt-2 text-slate-900 text-lg">48 hours for new inquiries</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-[0.2em]">Availability</p>
                  <p className="mt-2 text-slate-900 text-lg">Consultations Mon–Fri</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                  <span className="text-blue-600 font-semibold">24/7</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">For time-sensitive missions</p>
                  <p className="text-sm text-slate-500">We keep dedicated bandwidth open for rapid-response engagements.</p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3">
              <div className="relative rounded-[32px] border border-slate-200 bg-white/90 shadow-xl backdrop-blur-lg overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-10`} aria-hidden="true" />
                <div className="absolute -top-24 -right-32 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-24 -left-32 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden="true" />

                <div className="relative p-8 sm:p-10 lg:p-12">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Organization</FormLabel>
                              <FormControl>
                                <Input placeholder="Your organization" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <Input placeholder="Where you're based" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How can we help?</FormLabel>
                            <FormControl>
                              <Textarea rows={6} placeholder="Tell us about your initiative, partners, and goals..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-sm text-slate-500">
                          We only use your details to follow up on this inquiry. For urgent matters, mention the timeline above.
                        </p>
                        <Button type="submit" disabled={isSubmitting} className="px-8 py-3">
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </form>
                  </Form>

                  {submitMessage && (
                    <div
                      className={`mt-6 rounded-2xl border p-4 text-sm font-medium ${
                        isSuccess ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-red-200 bg-red-50 text-red-700"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
