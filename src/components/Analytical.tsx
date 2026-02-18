import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { IoIosHome, IoIosStats } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2D3748",
  },
  mobile: {
    label: "Mobile",
    color: "#4FD1C5",
  },
} satisfies ChartConfig;

const StatItem = ({ icon: Icon, label, value, progress }: any) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-7 h-7 text-white rounded-lg bg-[#4FD1C5]">
        <Icon size={14} />
      </div>
      <span className="text-[12px] font-bold text-[#A0AEC0] uppercase tracking-wider">
        {label}
      </span>
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-lg font-bold text-[#2D3748]">{value}</span>
      <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#4FD1C5]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  </div>
);
export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 px-4 sm:px-6">
      <Card className="lg:col-span-5 rounded-3xl border-none shadow-md overflow-hidden bg-white">
        <CardContent className="p-4 sm:p-6">
          <div className="w-full h-36 sm:h-44 bg-[#2D3748] rounded-2xl mb-6 flex items-end justify-between px-4 sm:px-6">
            {[60, 45, 30, 55, 90, 70, 50, 25, 85].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-white rounded-full opacity-80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#2D3748]">Active Users</h3>
            <p className="text-sm">
              <span className="text-[#48BB78] font-bold">+23%</span>
              <span className="text-[#A0AEC0] ml-1">than last week</span>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <StatItem
              icon={IoIosHome}
              label="Users"
              value="32,984"
              progress={70}
            />
            <StatItem
              icon={IoIosHome}
              label="Clicks"
              value="2.42m"
              progress={85}
            />
            <StatItem
              icon={IoIosHome}
              label="Sales"
              value="2,400$"
              progress={45}
            />
            <StatItem
              icon={IoIosStats}
              label="Items"
              value="320"
              progress={55}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-7 rounded-3xl border-none shadow-md bg-white">
        <CardHeader className="pb-2 px-4 sm:px-6">
          <CardTitle className="text-lg font-bold text-[#2D3748]">
            Sales Overview
          </CardTitle>
          <CardDescription className="flex items-center gap-1">
            <span className="text-[#48BB78] font-bold text-sm">+5% more</span>
            <span className="text-[#A0AEC0] text-sm">in 2021</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="px-2 sm:px-6">
          <ChartContainer config={chartConfig} className="w-full h-65 sm:h-80">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 16, left: 16, bottom: 0 }}
            >
              <defs>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2D3748" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke="#E2E8F0"
              />

              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => v.slice(0, 3)}
                tick={{ fill: "#A0AEC0", fontSize: 12 }}
              />

              <YAxis
                width={32}
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#A0AEC0", fontSize: 12 }}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />

              <Area
                dataKey="mobile"
                type="monotone"
                fill="url(#fillMobile)"
                stroke="#4FD1C5"
                strokeWidth={2.5}
              />

              <Area
                dataKey="desktop"
                type="monotone"
                fill="url(#fillDesktop)"
                stroke="#2D3748"
                strokeWidth={2.5}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="pt-0 px-4 sm:px-6">
          <div className="flex gap-2 font-medium text-sm text-[#2D3748]">
            Trending up by 5.2% this month
            <TrendingUp className="h-4 w-4 text-[#48BB78]" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
