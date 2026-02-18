import Footer from "@/components/Footer";
import ProfileBody from "@/components/profileBody";
import ProfileCard from "@/components/ProfileCard";
import ProfileHeader from "@/components/ProfileHeader";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-full overflow-y-auto p-5 space-y-5">
        <ProfileHeader />
        <ProfileBody />
        <ProfileCard />
        <Footer />
      </div>
    </div>
  );
}
