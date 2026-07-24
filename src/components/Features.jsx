import React from "react";
import { LayoutDashboard, Tag, TrendingUp, ShieldCheck, PieChart, Bell } from "lucide-react";

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    desc: "See your balance, income, and expenses at a glance, updated in real time.",
  },
  {
    icon: Tag,
    title: "Smart Categories",
    desc: "Sort every transaction automatically so you know exactly where money goes.",
  },
  {
    icon: TrendingUp,
    title: "Goal Tracking",
    desc: "Set savings targets and watch your progress build week over week.",
  },
  {
    icon: PieChart,
    title: "Visual Reports",
    desc: "Clean charts break down your spending so patterns are easy to spot.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    desc: "Get notified before you overspend in a category or miss a bill.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    desc: "Your data is encrypted end-to-end, so your finances stay private.",
  },
];

const Features = () => {
  return (
    <section id="features" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Everything you need to manage money
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A complete toolkit for tracking, budgeting, and understanding your finances.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-100 grid place-items-center mb-4">
                <Icon size={20} className="text-violet-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;
