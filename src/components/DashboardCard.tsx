export default function DashboardCard() {
  return (
    <div className="flex flex-col xl:flex-row gap-6 w-full">
      <div className="flex-1 bg-white rounded-2xl p-6 flex flex-col lg:flex-row justify-between gap-6 shadow-sm">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-400 font-medium">
              Built by Developers
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-1">
              Purity UI Dashboard
            </h2>

            <p className="text-sm text-gray-400 mt-3 max-w-md">
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </p>
          </div>

          <button className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all w-fit">
            Read more <span>→</span>
          </button>
        </div>

        <div className="flex items-center justify-center rounded-2xl bg-teal-400 w-full lg:w-80 min-h-[160px]">
          <div className="flex items-center gap-3 text-white text-3xl font-semibold">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-400 font-bold">
              ⚡
            </div>
            Chakra
          </div>
        </div>
      </div>

      <div className="relative flex-1 rounded-2xl overflow-hidden min-h-55 shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team work"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
          <div>
            <h3 className="text-lg font-semibold">Work with the rockets</h3>

            <p className="text-sm text-white/80 mt-2">
              Wealth creation is a revolutionary recent positive-sum game. It is
              all about who takes the opportunity first.
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all w-fit">
            Read more <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
