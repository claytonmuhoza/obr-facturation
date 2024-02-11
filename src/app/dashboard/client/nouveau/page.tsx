import { Button, Label, TextInput } from "flowbite-react";
import { ClientTable } from "@/component/dashboard/client/clientTable";
import { prisma } from "@/prismaclient";
async function getClients() {
  const clients = await prisma.client.findMany();
  return clients;
}
export default async function newClientPage() {
  const listeClients = await getClients();
  return (
    <>
      <div className="container flex justify-center flex-col">
        <form className="flex w-full max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nomClient" value="Nom du client" />
            </div>
            <TextInput
              id="nomClient"
              type="text"
              placeholder="nom du client"
              required
            />
          </div>{" "}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nifClient" value="NIF du client" />
            </div>
            <TextInput id="nifClient" type="text" placeholder="NIF du client" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="rcClient" value="RC du client" />
            </div>
            <TextInput
              id="rcClient"
              type="text"
              placeholder="Registre de commerce du client"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="adresseClient" value="adresse du client" />
            </div>
            <TextInput
              id="adresseClient"
              type="text"
              placeholder="adresse du client"
            />
          </div>
          <Button type="submit">Enregistrer</Button>
        </form>
      </div>
      {listeClients.length >= 1 ? (
        <>
          <h2>Liste des clients</h2>

          <ClientTable clients={listeClients} />
        </>
      ) : (
        <h2>Aucun client enregistrer</h2>
      )}
    </>
  );
}
