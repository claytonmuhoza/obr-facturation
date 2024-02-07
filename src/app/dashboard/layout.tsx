import DashboardNavBar from "@/component/layout/dashboard/navbar";

export default function dashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <DashboardNavBar />
      <div>{children}</div>
    </>
  );
}
