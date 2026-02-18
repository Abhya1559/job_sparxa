import Sidebar from "@/components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardData from "@/components/DashboardData";
import DashboardCard from "@/components/DashboardCard";
import Analytical from "@/components/Analytical";
import DataTable from "@/components/DataTable";
import Footer from "@/components/Footer";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-full overflow-y-auto p-5 space-y-5">
        <DashboardHeader />
        <DashboardData />
        <DashboardCard />
        <Analytical />
        <DataTable />
        <Footer />
      </div>
    </div>
  );
}
