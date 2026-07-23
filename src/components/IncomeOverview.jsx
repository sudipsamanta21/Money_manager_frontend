import {useEffect, useState} from "react";
import {prepareIncomeLineChartData} from "../util/util.js";
import CustomLineChart from "./CustomLineChart.jsx";
import {Plus} from "lucide-react";


const IncomeOverview = ({transactions,onAddIncome}) =>{

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result= prepareIncomeLineChartData(transactions);
        console.log("the result is",result);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setChartData(result);

        return () =>{};
    },[transactions]);

    return(
        <div className="card p-5 mx-4  rounded-lg shadow-md bg-white">
            <div className="flex items-center justify-between">
                <div>
                    <h5 className="text-lg">
                        Income Overview
                    </h5>
                    <p className="text-xs text-gray-400 mt-0.5">
                        Track your earnings over time and analyze your income trends.
                    </p>
                </div>
                {/* overview for income with line char*/}
                <button className="add-btn add-btn flex bg-emerald-500 text-white hover:bg-emerald-600  cursor-pointer rounded-lg px-3 py-1 mt-0 items-center" onClick={onAddIncome}>
                    <Plus from={15} className="text-lg text-white " />
                    Add Income
                </button>
            </div>
            <div className="mt-7 mr-6">
                {/*create line chart*/}
                <CustomLineChart data={chartData}  type="income" />
            </div>
        </div>
    )
}
export default IncomeOverview;