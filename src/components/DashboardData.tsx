import { FaWallet } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaFile, FaCartShopping } from "react-icons/fa6";

export default function DashboardData() {
  const statsData = [
    {
      title: "Today's Moneys",
      value: "$53,000",
      change: "+55%",
      positive: true,
      icon: FaWallet,
    },
    {
      title: "Today's Users",
      value: "2,300",
      change: "+5%",
      positive: true,
      icon: TbWorld,
    },
    {
      title: "New Clients",
      value: "+3,020",
      change: "-14%",
      positive: false,
      icon: FaFile,
    },
    {
      title: "Total Sales",
      value: "$173,000",
      change: "+8%",
      positive: true,
      icon: FaCartShopping,
    },
  ];

  return (
    <div className="w-full px-0 sm:px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                px-5 py-4
                flex items-center justify-between
                shadow-sm
                transition
                hover:shadow-md
                hover:-translate-y-0.5
              "
            >
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-400 font-medium truncate">
                  {item.title}
                </p>

                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {item.value}
                  </h3>

                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      item.positive ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              </div>

              <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-teal-400 flex items-center justify-center">
                <Icon className="text-white text-lg sm:text-xl" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
