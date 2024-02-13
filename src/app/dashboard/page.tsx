import { oneXbet } from "@/model/onexbet";
import Link from "next/link";

export default function indexDashboard() {
  return (
    <main>
      montant de depart 1.500.000 on reste pour 20 jeu echoue{" "}
      {oneXbet(20, 55000000, 20000)}{" "}
      <Link href="/dashboard/client/nouveau">Nouveau Client</Link>
    </main>
  );
}
