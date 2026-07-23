import CustomPieChart from "./CustomPieChart";

const FinanceOverview = ({
                             totalBalance,
                             totalIncome,
                             totalExpense,
                         }) => {
    return (
        <div className="card bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-lg font-semibold">
                    Financial Overview
                </h5>
            </div>

            <CustomPieChart
                totalBalance={totalBalance}
                totalIncome={totalIncome}
                totalExpense={totalExpense}
            />
        </div>
    );
};

export default FinanceOverview;