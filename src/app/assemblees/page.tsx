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
import { AssembleeForm } from "@/components/assemblee-form"

// Ceci est un exemple de données. Dans une vraie application, vous les récupéreriez depuis une API ou une base de données.
const initialAssemblees = [
  { id: 1, pays: "France", localite: "Paris", pasteur: "Locoh Théodore", localisation: "123 Rue de la Paix", telephone: "+33 1 23 45 67 89" },
  { id: 2, pays: "Congo", localite: "Ouesso", pasteur: "Prince Bopiko", localisation: "Quartier QG", telephone: "+242 06 483 76 37" },
]

export default function AssembleesPage() {
  const [assemblees, setAssemblees] = useState(initialAssemblees)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (values: any) => {
    setAssemblees([...assemblees, { id: assemblees.length + 1, ...values }])
    setIsOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Assemblées</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>Ajouter une assemblée</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Ajouter une assemblée</DialogTitle>
              <DialogDescription>
                Remplissez le formulaire pour ajouter une nouvelle assemblée.
              </DialogDescription>
            </DialogHeader>
            <AssembleeForm onSubmit={handleSubmit} />
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pays</TableHead>
            <TableHead>Localité</TableHead>
            <TableHead>Pasteur</TableHead>
            <TableHead>Localisation</TableHead>
            <TableHead>Téléphone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assemblees.map((assemblee) => (
            <TableRow key={assemblee.id}>
              <TableCell>{assemblee.pays}</TableCell>
              <TableCell>{assemblee.localite}</TableCell>
              <TableCell>{assemblee.pasteur}</TableCell>
              <TableCell>{assemblee.localisation}</TableCell>
              <TableCell>{assemblee.telephone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

