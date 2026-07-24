
import {
  User,
  LayoutDashboard,
  Coins,
  Wallet,
  TrendingUp,
  TrendingDown,
  Briefcase,
  Car,
  Ellipsis,
  List,
} from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import {assets} from "../assets/assets.js";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Category", icon: List},
  { label: "Income", icon: Wallet },
  { label: "Expense", icon: Coins},
];

const STATS = [
  { label: "Total Balance", value: "200", icon: Wallet, bg: "bg-violet-600" },
  { label: "Total Income", value: "₹1,000", icon: TrendingUp, bg: "bg-emerald-800" },
  { label: "Total Expense", value: "₹800", icon: TrendingDown, bg: "bg-red-800" },
];

const TRANSACTIONS = [
  { name: "Freelance", date: "15th Jul 2026", amount: "+ $8,000", positive: true, icon: Briefcase },
  { name: "Uber", date: "12th Jul 2026", amount: "- $300", positive: false, icon: Car },
];

const OVERVIEW_DATA = [
  { name: "Income", value: 185000, color: "#16A34A" },
  { name: "Balance", value: 84200, color: "#7C3AED" },
  { name: "Expense", value: 100800, color: "#DC2626" },
];

const StatCard = ({ label, value, icon: Icon, bg }) => {
  return (
    <div className="flex-1 min-w-[160px] bg-white border border-gray-100 rounded-xl px-4 py-4 flex items-center gap-3">
      <div className={`w-10 h-10 rounded-lg ${bg} grid place-items-center shrink-0`}>
        <Icon size={19} color="#fff" strokeWidth={2} />
      </div>
      <div>
        <div className="text-xs text-gray-400 mb-0.5">{label}</div>
        <div className="text-lg font-bold text-gray-900">{value}</div>
      </div>
    </div>
  );
}

const Sidebar =() => {
  return (
    <div className="w-44 shrink-0 border-r border-gray-100 px-3.5 py-5 flex flex-col items-center hidden sm:flex">
      <div className="w-16 h-16 rounded-full bg-amber-200 grid place-items-center text-2xl mb-2">
        🧑‍💼
      </div>
      <div className="font-semibold text-sm text-gray-900 mb-5">Sudip</div>
      <nav className="w-full flex flex-col gap-1">
        {SIDEBAR_ITEMS.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer ${
              active ? "bg-violet-600 text-white" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Icon size={16} />
            {label}
          </div>
        ))}
      </nav>
    </div>
  );
}

const TransactionRow = ({ name, date, amount, positive, icon: Icon }) => {
  return (
    <div className="flex items-center justify-between py-2.5">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-gray-100 grid place-items-center">
          <Icon size={16} className="text-gray-600" />
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{name}</div>
          <div className="text-xs text-gray-400">{date}</div>
        </div>
      </div>
      <div
        className={`text-sm font-bold flex items-center gap-1 ${
          positive ? "text-emerald-800" : "text-red-700"
        }`}
      >
        {amount}
        {positive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
      </div>
    </div>
  );
}

const DashboardPreview = () =>{
  return (
    <section className="px-6 pb-20 bg-white">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <img src={assets.logo} alt="logo" className="h-10 w-10 rounded-full" />
            {/*<PiggyBank size={18} color="#F5B324" fill="#FDE68A" strokeWidth={1.8} />*/}
            <span className="font-bold text-gray-900 text-sm">Money Manager</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-100 grid place-items-center">
            <User size={15} className="text-violet-600" />
          </div>
        </div>

        <div className="flex">
          <Sidebar />

          <div className="flex-1 px-4 sm:px-6 py-5 min-w-0">
            <div className="flex flex-wrap gap-3.5 mb-4">
              {STATS.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5">
              <div className="flex-[1.3] min-w-[240px] bg-white border border-gray-100 rounded-xl px-4 py-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-900">Recent Transactions</span>
                  <span className="text-xs font-semibold text-violet-600 bg-purple-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                    More <Ellipsis size={12} />
                  </span>
                </div>
                {TRANSACTIONS.map((t) => (
                  <TransactionRow key={t.name} {...t} />
                ))}
              </div>

              <div className="flex-1 min-w-[200px] bg-white border border-gray-100 rounded-xl px-4 py-4 flex flex-col items-center">
                <div className="w-full text-sm font-bold text-gray-900 mb-1">
                  Financial Overview
                </div>

                <div className="relative w-[180px] h-[180px]">
                  <PieChart width={180} height={180}>
                    <Pie
                        data={OVERVIEW_DATA}
                        dataKey="value"
                        innerRadius={58}
                        outerRadius={82}
                        paddingAngle={4}
                        cornerRadius={8}
                        startAngle={90}
                        endAngle={-270}
                        stroke="none"
                    >
                      {OVERVIEW_DATA.map((d) => (
                          <Cell key={d.name} fill={d.color} />
                      ))}
                    </Pie>
                  </PieChart>

                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className="text-xs text-gray-500 font-medium">
                        Total Balance
                     </span>
                     <span className="text-xl font-bold text-gray-900 mt-1">
                        ₹200
                     </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;
