import {
  Search,
  Settings,
  Bell,
  User,
  Box,
  FileText,
  PenTool,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProfileHeader() {
  return (
    <div className="w-full px-4 pt-4">
      {/* Upper Banner Section with Exact Background Styling */}
      <div
        className="relative w-full h-48 rounded-3xl overflow-hidden p-6"
        style={{
          background: `linear-gradient(150deg, #4FD1C5 0%, #319795 100%)`,
        }}
      >
        {/* The "Swoosh" / Mesh Effect overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,1000 C300,800 400,200 1000,0 L1000,1000 Z' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            transform: "scale(1.5) rotate(-5deg)",
          }}
        />

        {/* Top Navigation Bar */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-white">
            <p className="text-xs font-medium opacity-80">Pages / Profile</p>
            <h2 className="text-sm font-bold">Profile</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Type here..."
                className="pl-10 pr-4 py-2 h-9 w-48 md:w-64 bg-white border-none rounded-xl text-xs focus-visible:ring-1 focus-visible:ring-white/50 shadow-sm"
              />
            </div>

            <div className="flex items-center gap-3 text-white">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-bold gap-1 hover:bg-white/10"
              >
                <User className="h-4 w-4 fill-current" />
                Sign In
              </Button>
              <Settings className="h-4 w-4 cursor-pointer hover:rotate-90 transition-transform" />
              <Bell className="h-4 w-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Profile Card */}
      <div className="relative z-20 -mt-16 mx-4">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
                alt="Profile"
                className="w-20 h-20 rounded-2xl object-cover shadow-lg border border-white/20"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D3748]">
                Esthera Jackson
              </h3>
              <p className="text-sm text-[#A0AEC0] font-semibold">
                esthera@simmmple.com
              </p>
            </div>
          </div>

          <div className="flex bg-gray-50/60 p-1.5 rounded-2xl border border-gray-100/50">
            <Button
              variant="ghost"
              className="bg-white shadow-md text-[#2D3748] rounded-xl px-6 py-2 h-9 text-[10px] font-bold gap-2 hover:bg-white"
            >
              <Box className="h-4 w-4 text-[#4FD1C5]" />
              OVERVIEW
            </Button>
            <Button
              variant="ghost"
              className="text-[#A0AEC0] hover:text-[#2D3748] px-6 py-2 h-9 text-[10px] font-bold gap-2"
            >
              <FileText className="h-4 w-4" />
              TEAMS
            </Button>
            <Button
              variant="ghost"
              className="text-[#A0AEC0] hover:text-[#2D3748] px-6 py-2 h-9 text-[10px] font-bold gap-2"
            >
              <PenTool className="h-4 w-4" />
              PROJECTS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
