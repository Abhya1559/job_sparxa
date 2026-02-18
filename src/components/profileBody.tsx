import { Facebook, Instagram, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const conversations = [
  {
    name: "Sophie B.",
    message: "Hi! I need more information...",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop",
  },
  {
    name: "Sophie B.",
    message: "Awesome work, can you change...",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop",
  },
  {
    name: "Sophie B.",
    message: "Have a great afternoon...",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop",
  },
  {
    name: "Sophie B.",
    message: "About files I can...",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
  },
  {
    name: "Sophie B.",
    message: "About files I can...",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop",
  },
];

export default function ProfileBody() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-6 px-2 pb-8">
      <Card className="rounded-3xl border-none shadow-md bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-[#2D3748]">
            Platform Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-[#A0AEC0] uppercase tracking-wider">
              Account
            </h4>
            {[
              "Email me when someone follows me",
              "Email me when someone answers on my post",
              "Email me when someone mentions me",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <Switch
                  defaultChecked={i === 0}
                  className="data-[state=checked]:bg-[#4FD1C5]"
                />
                <span className="text-lg text-[#A0AEC0] font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-2">
            <h4 className="text-lg font-bold text-[#A0AEC0] uppercase tracking-wider">
              Application
            </h4>
            {[
              "New launches and projects",
              "Monthly product changes",
              "Subscribe to newsletter",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <Switch className="data-[state=checked]:bg-[#4FD1C5]" />
                <span className="text-lg text-[#A0AEC0] font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-3xl border-none shadow-md bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-[#2D3748]">
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-[#A0AEC0] leading-relaxed font-medium">
            Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer
            is no. If two equally difficult paths, choose the one more painful
            in the short term (pain avoidance is creating an illusion of
            equality).
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2 text-lg">
              <span className="font-bold text-[#2D3748]">Full Name:</span>
              <span className="text-[#A0AEC0] font-medium">
                Esthera Jackson
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-[#2D3748]">Mobile:</span>
              <span className="text-[#A0AEC0] font-medium">
                (44) 123 1234 123
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-[#2D3748]">Email:</span>
              <span className="text-[#A0AEC0] font-medium">
                esthera@simmmple.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-[#2D3748]">Location:</span>
              <span className="text-[#A0AEC0] font-medium">United States</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-[#2D3748]">Social Media:</span>
              <div className="flex items-center gap-3 ml-1">
                <Facebook className="w-3.5 h-3.5 text-[#4FD1C5] cursor-pointer" />
                <Instagram className="w-3.5 h-3.5 text-[#4FD1C5] cursor-pointer" />
                <Twitter className="w-3.5 h-3.5 text-[#4FD1C5] cursor-pointer" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-3xl border-none shadow-md bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-[#2D3748]">
            Conversations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {conversations.map((chat, i) => (
            <div key={i} className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <Avatar className="w-9 h-9 rounded-xl shadow-sm">
                  <AvatarImage src={chat.image} className="object-cover" />
                  <AvatarFallback>SB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-[#2D3748]">
                    {chat.name}
                  </span>
                  <span className="text-[11px] text-[#A0AEC0] font-medium">
                    {chat.message}
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                className="text-[10px] font-bold text-[#4FD1C5] hover:text-[#4FD1C5] hover:bg-transparent px-0 h-auto"
              >
                REPLY
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
