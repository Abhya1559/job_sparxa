import Sidebar from "@/components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardData from "@/components/DashboardData";

export default function Dashboard() {
  return (
    <div className="flex items-start bg-gray-100 h-screen">
      <Sidebar />
      <div className="w-full space-y-8">
        <DashboardHeader />
        <DashboardData />
      </div>
    </div>
  );
}
