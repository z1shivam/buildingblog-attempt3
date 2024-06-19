"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const emailFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name can not be empty",
  }),
  email: z.string().email({ message: "Please enter a valid email." }),
});

export function EmailForm(){
  const form = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      name: "",
      email: ""
    },
  })

  function onSubmit(values: z.infer<typeof emailFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 pt-3 grid grid-cols-1 sm:grid-cols-3 sm:space-y-0 sm:items-end sm:space-x-6 ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="text-base text-orange-100">Enter your name:</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} className="bg-white h-12 dark:bg-slate-800 dark:border-2 dark:border-slate-600 placeholder:text-base"/>
              </FormControl>

              <FormMessage className="text-red-100"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base text-orange-100">Enter your email:</FormLabel>
              <FormControl>
                <Input placeholder="yourname@email.com" {...field} className="bg-white h-12 dark:bg-slate-800 dark:border-2 dark:border-slate-600 placeholder:text-base"/>
              </FormControl>
              <FormMessage className="text-red-100"/>
            </FormItem>
          )}
        />
        <Button type="submit" size={"lg"} className="bg-gray-900 h-12 w-full dark:text-white sm:w-fit">Submit</Button>
      </form>
    </Form>
  )

}