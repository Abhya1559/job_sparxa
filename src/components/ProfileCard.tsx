import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const projects = [
  {
    id: 1,
    title: "Modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop",
    members: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Scandinavian",
    description:
      "Music is something that every person has his or her own specific opinion about.",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&h=300&fit=crop",
    members: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Minimalist",
    description:
      "Different people have different taste, especially various types of music.",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500&h=300&fit=crop",
    members: [
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=64&h=64&fit=crop",
    ],
  },
];

export default function ProfileCard() {
  return (
    <Card className="mx-3 sm:mx-4 mb-10 rounded-3xl border-none shadow-md bg-white">
      <CardHeader className="pb-4 px-4 sm:px-6">
        <CardTitle className="text-base sm:text-lg font-bold text-[#2D3748]">
          Projects
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-[#A0AEC0] font-medium">
          Architects design houses
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-4 group h-full">
              <div className="relative overflow-hidden rounded-2xl aspect-4/3 shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              <div className="flex flex-col gap-1 grow">
                <span className="text-[10px] font-bold text-[#A0AEC0]">
                  Project #{project.id}
                </span>
                <h4 className="text-sm font-bold text-[#2D3748]">
                  {project.title}
                </h4>
                <p className="text-xs text-[#A0AEC0] font-medium leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <Button
                  variant="outline"
                  className="
                    h-8 px-4 sm:px-5
                    text-[10px] font-bold
                    border-[#4FD1C5] text-[#4FD1C5]
                    hover:bg-[#4FD1C5] hover:text-white
                    rounded-xl transition-all
                  "
                >
                  VIEW PROJECT
                </Button>

                <div className="flex -space-x-2">
                  {project.members.map((url, i) => (
                    <Avatar key={i} className="w-5 h-5 border-2 border-white">
                      <AvatarImage src={url} className="object-cover" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div
            role="button"
            className="
              flex flex-col items-center justify-center
              gap-2 p-6
              border-2 border-dashed border-gray-300
              rounded-3xl
              cursor-pointer
              transition-all
              hover:border-[#4FD1C5]
            "
          >
            <div className="p-3 rounded-full transition-colors bg-gray-100 hover:bg-[#4FD1C5]/10">
              <Plus className="w-6 h-6 text-[#A0AEC0] hover:text-[#4FD1C5]" />
            </div>

            <span className="text-sm sm:text-base font-bold text-[#A0AEC0] hover:text-[#4FD1C5] text-center">
              Create a New Project
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
