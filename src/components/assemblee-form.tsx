"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
//import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  pays: z.string().min(2, {
    message: "Le pays doit contenir au moins 2 caractères.",
  }),
  localite: z.string().min(2, {
    message: "La localité doit contenir au moins 2 caractères.",
  }),
  pasteur: z.string().min(2, {
    message: "Le nom du pasteur doit contenir au moins 2 caractères.",
  }),
  localisation: z.string().min(5, {
    message: "La localisation doit contenir au moins 5 caractères.",
  }),
  telephone: z.string().min(10, {
    message: "Le numéro de téléphone doit contenir au moins 10 caractères.",
  }),
})

export function AssembleeForm({ onSubmit }: { onSubmit: (values: z.infer<typeof formSchema>) => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pays: "",
      localite: "",
      pasteur: "",
      localisation: "",
      telephone: "",
    },
  })

  function handleSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values)
    form.reset()
    /*toast({
      title: "Assemblée ajoutée",
      description: "L'assemblée a été ajoutée avec succès.",
    })*/
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="pays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pays</FormLabel>
              <FormControl>
                <Input placeholder="Congo Brazzaville" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="localite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Localité</FormLabel>
              <FormControl>
                <Input placeholder="Brazzaville" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pasteur"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pasteur</FormLabel>
              <FormControl>
                <Input placeholder="Stéphane Bamby" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="localisation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Localisation</FormLabel>
              <FormControl>
                <Input placeholder="Quartier chateau d'eau, ruen Massembo Loubaki N62" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone</FormLabel>
              <FormControl>
                <Input placeholder="+242 06 783 76 37" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Ajouter l'assemblée</Button>
      </form>
    </Form>
  )
}

