import { useEffect, useState } from "react";
import { prepareExpenseLineChartData } from "../util/util.js";
import CustomLineChart from "./CustomLineChart.jsx";
import { Plus } from "lucide-react";

const ExpenseOverview = ({ transactions, onAddExpense }) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseLineChartData(transactions);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setChartData(result);
    }, [transactions]);

    return (
        <div className="card mx-4 rounded-lg bg-white p-5 shadow-md">
            <div className="flex items-center justify-between">
                <div>
                    <h5 className="text-lg font-medium">
                        Expense Overview
                    </h5>

                    <p className="mt-0.5 text-xs text-gray-400">
                        Track your spending over time and analyze your expense trends.
                    </p>
                </div>

                <button
                    onClick={onAddExpense}
                    className="flex items-center gap-2 rounded-lg bg-red-500 px-3 py-2 text-white transition-all duration-200 hover:bg-red-600 cursor-pointer"
                >
                    <Plus size={16} />
                    <span>Add Expense</span>
                </button>
            </div>

            <div className="mt-7 mr-6">
                <CustomLineChart data={chartData} type="expense"/>
            </div>
        </div>
    );
};

export default ExpenseOverview;