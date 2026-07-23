import {Trash2, TrendingDown, TrendingUp, UtensilsCrossed} from "lucide-react";
import {addThousandsSeparator} from "../util/util.js";

const TransactionCard = ({icon,title,date,amount,type, hideDeleteBtn, onDelete}) => {

    const getAmountStyles = () => type === 'income'? 'bg-green-50  text-green-800':'bg-red-50 text-red-800';

    return (
        <div className="group relative mt-2 flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 transition-all duration-200 hover:bg-slate-200 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-800">
                {icon ? (
                    <img src={icon} alt={title} className="h-6 w-6" />
                ):(
                    <UtensilsCrossed className="text-purple-800 cursor-pointer" />
                )}
            </div>
            <div className="flex-1 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-800 font-medium">{title}</p>
                    <p className="text-xs text-gray-500 mt-1">{date}</p>
                </div>
                <div className="flex items-center gap-2">
                    {!hideDeleteBtn && (
                        <button
                            onClick={onDelete}
                            className="opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-gray-500 hover:text-red-600 cursor-pointer">
                            <Trash2 size={18} />
                        </button>
                    )}
                    <div
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 font-medium ${getAmountStyles()}`}
                    >
                        <h6 className="text-xs font-medium">
                            {type === 'income' ? '+' :'-'} ${addThousandsSeparator(amount)}
                        </h6>
                        {type === 'income' ? (
                            <TrendingUp size={15} />
                        ):(
                            <TrendingDown size={15} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TransactionCard;