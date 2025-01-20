"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PredicationForm } from "@/components/predication-form"

// Ceci est un exemple de données. Dans une vraie application, vous les récupéreriez depuis une API ou une base de données.
const initialPredications = [
  { id: 1, titre: "Kacou 1 : C'est ici la voix de Matthieu 25:6", date: "2002-07-08", details: "Préché le 08 Juillet 2002", numero: 1 },
  { id: 2, titre: "Kacou 2 : Prononce le jugement", date: "2023-05-22", details: "Préché à Locodjro", numero: 2 },
]

export default function PredicationsPage() {
  const [predications, setPredications] = useState(initialPredications)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (values: any) => {
    setPredications([...predications, { id: predications.length + 1, ...values }])
    setIsOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Prédications</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>Ajouter une prédication</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Ajouter une prédication</DialogTitle>
              <DialogDescription>
                Remplissez le formulaire pour ajouter une nouvelle prédication.
              </DialogDescription>
            </DialogHeader>
            <PredicationForm onSubmit={handleSubmit} />
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Détails</TableHead>
            <TableHead>Numéro</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {predications.map((predication) => (
            <TableRow key={predication.id}>
              <TableCell>{predication.titre}</TableCell>
              <TableCell>{predication.date}</TableCell>
              <TableCell>{predication.details}</TableCell>
              <TableCell>{predication.numero}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

