import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
    Label,
} from "recharts";

const COLORS = ["#7C3AED", "#DC2626", "#16A34A"];

const CustomPieChart = ({
                            totalBalance,
                            totalIncome,
                            totalExpense,
                        }) => {
    const data = [
        { name: "Balance", value: totalBalance },
        { name: "Expense", value: totalExpense },
        { name: "Income", value: totalIncome },
    ];

    return (
        <div className="w-full h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="45%"
                        innerRadius={95}
                        outerRadius={145}
                        paddingAngle={4}
                        cornerRadius={8}
                        style={{ cursor: "pointer" }}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />
                        ))}

                        <Label
                            position="center"
                            content={({ viewBox }) => {
                                const { cx, cy } = viewBox;

                                return (
                                    <g>
                                        {/* Center Text */}
                                        <text
                                            x="50%"
                                            y="40%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fill="#6B7280"
                                            fontSize="16"
                                            fontWeight="500"
                                        >
                                            Total Balance
                                        </text>


                                        <text
                                            x="50%"
                                            y="47%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fill="#111827"
                                            fontSize="34"
                                            fontWeight="700"
                                        >
                                            ₹{Number(totalBalance).toLocaleString("en-IN")}
                                        </text>

                                        <text
                                            x={cx}
                                            y={cy + 55}
                                            textAnchor="middle"
                                            fill="#7C3AED"
                                            fontSize="18"
                                            fontWeight="600"
                                        >
                                            Balance
                                        </text>
                                    </g>
                               );
                            }}
                        />
                    </Pie>

                    <Tooltip />

                    <Legend
                        verticalAlign="bottom"
                        iconType="square"
                       iconSize={14}
                    />

                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomPieChart;