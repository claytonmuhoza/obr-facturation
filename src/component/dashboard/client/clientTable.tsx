"use client";

import { Table } from "flowbite-react";
import { clientInterface } from "@/model/client";
import Link from "next/link";
export function ClientTable({ clients }: { clients: clientInterface[] }) {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Nom</Table.HeadCell>
          <Table.HeadCell>NIF</Table.HeadCell>
          <Table.HeadCell>RC</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {clients.map((client) => (
            <Table.Row
              key={client.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {client.nom}
              </Table.Cell>
              <Table.Cell>{client?.nif}</Table.Cell>
              <Table.Cell>{client?.rc}</Table.Cell>
              <Table.Cell>
                <Link
                  href={`/dashboard/client /${client.id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  voir
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
