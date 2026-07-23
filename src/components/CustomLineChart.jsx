import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const CustomTooltip = ({ active, payload, label, color }) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-xl">
                <p className="mb-1 text-xs text-gray-500">
                    {label}
                </p>

                <p
                    className="text-sm font-semibold"
                    style={{ color }}
                >
                    ₹{Number(payload[0].value).toLocaleString("en-IN")}
                </p>
            </div>
        );
    }

    return null;
};

const CustomLineChart = ({ data, type = "income" }) => {
    const color =
        type === "expense" ? "#EF4444" : "#10B981";

    const gradientId =
        type === "expense"
            ? "expenseGradient"
            : "incomeGradient";

    return (
        <div className="w-full h-[350px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 25,
                        left: 10,
                        bottom: 10,
                    }}
                >
                    <defs>
                        <linearGradient
                            id={gradientId}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor={color}
                                stopOpacity={0.35}
                            />
                            <stop
                                offset="95%"
                                stopColor={color}
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#E5E7EB"
                    />

                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                        tick={{
                            fontSize: 12,
                            fill: "#6B7280",
                        }}
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                        tick={{
                            fontSize: 12,
                            fill: "#6B7280",
                        }}
                    />

                    <Tooltip
                        content={
                            <CustomTooltip
                                color={color}
                            />
                        }
                        cursor={{
                            stroke: color,
                            strokeDasharray: "4 4",
                        }}
                    />

                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="none"
                        fill={`url(#${gradientId})`}
                        animationDuration={1200}
                    />

                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke={color}
                        strokeWidth={3}
                        animationDuration={1200}
                        animationEasing="ease-out"
                        dot={{
                            r: 3,
                            fill: color,
                            stroke: "#fff",
                            strokeWidth: 2,
                        }}
                        activeDot={{
                            r: 6,
                            fill: color,
                            stroke: "#fff",
                            strokeWidth: 3,
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomLineChart;