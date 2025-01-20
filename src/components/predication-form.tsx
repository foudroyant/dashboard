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
import { Textarea } from "@/components/ui/textarea"
//import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  titre: z.string().min(2, {
    message: "Le titre doit contenir au moins 2 caractères.",
  }),
  date: z.string().min(10, {
    message: "La date doit être au format YYYY-MM-DD.",
  }),
  details: z.string().min(10, {
    message: "Les détails doivent contenir au moins 10 caractères.",
  }),
  numero: z.string().min(1, {
    message: "Le numéro est requis.",
  }),
})

export function PredicationForm({ onSubmit }: { onSubmit: (values: z.infer<typeof formSchema>) => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titre: "",
      date: "",
      details: "",
      numero: "",
    },
  })

  function handleSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values)
    form.reset()
    /*toast({
      title: "Prédication ajoutée",
      description: "La prédication a été ajoutée avec succès.",
    })*/
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="titre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input placeholder="Kacou 1 : C'est ici la voix de Matthieu 25:6" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Détails</FormLabel>
              <FormControl>
                <Textarea placeholder="Préché le 08 Juillet 2002" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numero"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Ajouter la prédication</Button>
      </form>
    </Form>
  )
}

