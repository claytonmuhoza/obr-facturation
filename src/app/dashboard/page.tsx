import Link from "next/link";

export default function indexDashboard() {
  return (
    <main>
      home page <Link href="/dashboard/client/nouveau">Nouveau Client</Link>
    </main>
  );
}
