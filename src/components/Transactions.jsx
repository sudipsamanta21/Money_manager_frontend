import {Ellipsis} from "lucide-react";
import TransactionCard from "./TransactionCard.jsx";
import moment from "moment";

const Transactions = ({transactions,onMore,type,title}) =>{
    return(
        <div className="card bg-white rounded-lg py-6 ">
            <div className="flex items-center justify-between pl-4 pr-4">
                <h5 className="text-lg">{title}</h5>
                <button
                    onClick={onMore}
                    className="flex items-center gap-2 bg-purple-400 hover:bg-purple-600 cursor-pointer text-white text-base font-medium px-4 py-2 rounded-xl shadow-md">
                    More
                    <Ellipsis size={18} />
                </button>
            </div>
            <div className="m-6">
                {transactions?.slice(0,5)?.map(item =>(
                    <TransactionCard
                        key={item.id}
                        title={title.name}
                        icon={item.icon}
                        date={moment(item.date).format('DD-MM-YYYY')}
                        amount={item.amount}
                        type={type}
                        hideDeleteBtn
                    />
                ))}
            </div>
        </div>
    )
}
export default Transactions;