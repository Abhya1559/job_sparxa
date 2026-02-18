import {
  CheckCircle2,
  MoreVertical,
  Bell,
  ShoppingCart,
  CreditCard,
  Package,
  Tv,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const projects = [
  {
    logo: "XD",
    name: "Purity UI Version",
    budget: "$14,000",
    progress: 60,
    members: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop",
    ],
  },
  {
    logo: "AT",
    name: "Add Progress Track",
    budget: "$3,000",
    progress: 10,
    members: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop",
    ],
  },
  {
    logo: "SL",
    name: "Fix Platform Errors",
    budget: "Not set",
    progress: 100,
    members: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop",
    ],
  },
  {
    logo: "SP",
    name: "Launch our Mobile App",
    budget: "$32,000",
    progress: 100,
    members: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop",
    ],
  },
];

const timelineItems = [
  {
    icon: Bell,
    color: "text-teal-400",
    title: "$2400, Design changes",
    time: "22 DEC 7:20 PM",
  },
  {
    icon: Package,
    color: "text-orange-400",
    title: "New order #4219423",
    time: "21 DEC 11:21 PM",
  },
  {
    icon: ShoppingCart,
    color: "text-blue-400",
    title: "Server Payments for April",
    time: "21 DEC 9:28 PM",
  },
  {
    icon: CreditCard,
    color: "text-orange-300",
    title: "New card added for order #3210145",
    time: "20 DEC 3:52 PM",
  },
  {
    icon: Package,
    color: "text-purple-500",
    title: "Unlock packages for Development",
    time: "19 DEC 11:35 PM",
  },
  {
    icon: Tv,
    color: "text-pink-500",
    title: "New order #9851258",
    time: "18 DEC 4:41 PM",
  },
];

export default function ProjectOrdersGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full px-2 sm:px-0">
      <Card className="lg:col-span-8 rounded-3xl border-none shadow-md bg-white overflow-hidden">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2">
          <div>
            <CardTitle className="text-lg font-bold text-[#2D3748]">
              Projects
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-teal-400 fill-teal-400/20" />
              <span className="font-bold text-xs text-[#2D3748]/80">
                30 done
              </span>
              <span className="text-xs text-[#A0AEC0]">this month.</span>
            </CardDescription>
          </div>
          <MoreVertical className="text-[#A0AEC0] cursor-pointer" size={20} />
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full min-w-160 text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-wider text-[#A0AEC0] border-b">
                  <th className="pb-4 font-bold">Companies</th>
                  <th className="pb-4 font-bold">Members</th>
                  <th className="pb-4 font-bold">Budget</th>
                  <th className="pb-4 font-bold">Completion</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {projects.map((p, i) => (
                  <tr key={i}>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-400 border">
                          {p.logo}
                        </div>
                        <span className="text-sm font-bold text-[#2D3748]">
                          {p.name}
                        </span>
                      </div>
                    </td>

                    <td className="py-4">
                      <div className="flex -space-x-3">
                        {p.members.map((img, idx) => (
                          <Avatar
                            key={idx}
                            className="w-7 h-7 border-2 border-white shadow-sm"
                          >
                            <AvatarImage src={img} />
                            <AvatarFallback className="text-[10px]">
                              U
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </td>

                    <td className="py-4 text-xs font-bold text-[#2D3748]">
                      {p.budget}
                    </td>

                    <td className="py-4">
                      <div className="w-32 space-y-1">
                        <span className="text-xs font-bold text-[#4FD1C5]">
                          {p.progress}%
                        </span>
                        <Progress
                          value={p.progress}
                          className="h-1.5 bg-gray-100 [&>div]:bg-[#4FD1C5]"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* ORDERS TIMELINE */}
      <Card className="lg:col-span-4 rounded-3xl border-none shadow-md bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold text-[#2D3748]">
            Orders Overview
          </CardTitle>
          <CardDescription>
            <span className="text-[#4FD1C5] font-bold">30%</span>{" "}
            <span className="text-[#A0AEC0]">this month.</span>
          </CardDescription>
        </CardHeader>

        <CardContent
          className="
          relative space-y-6 pt-4
          before:absolute before:left-5.5 sm:before:left-8.75
          before:top-10 before:h-[75%]
          before:w-0.5 before:bg-gray-100
        "
        >
          {timelineItems.map((item, i) => (
            <div key={i} className="flex gap-3 sm:gap-4 relative z-10">
              <div className="bg-white p-1">
                <item.icon className={`${item.color} w-5 h-5`} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#2D3748]">{item.title}</p>
                <p className="text-[11px] font-bold text-[#A0AEC0]">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
