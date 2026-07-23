import {Download, LoaderCircle, Mail} from "lucide-react";
import TransactionCard from "./TransactionCard.jsx";
import moment from "moment";
import {useState} from "react";

const IncomeList = ({
                        transactions,
                        onDelete,
                        onEmail,
                        onDownload,
                    }) => {

    const [loading, setLoading] = useState(false);
    const [emailLoading, setEmailLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);
        try{
            await onDownload();
        }finally {
            setLoading(false);
        }
    }

    const handleEmail = async () => {
        setEmailLoading(true);
        try{
           await onEmail();
        }finally {
            setEmailLoading(false);
        }
    }

    return (
        <div className="mx-4 mt-4 rounded-xl bg-white p-5 shadow-md">
            {/* Header */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    Income Sources
                </h2>

                <div className="flex flex-wrap items-center gap-3">
                    <button
                        onClick={handleEmail}
                        disabled={emailLoading}
                        className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-600 text-white cursor-pointer"
                    >
                        {emailLoading ?(
                            <>
                                <LoaderCircle className="w-4 h-4 animate-spin"/>
                                <span> Emailing...</span>
                            </>
                        ):(
                            <>
                                <Mail size={16} className="text-white" />
                                <span>Email</span>
                            </>
                        )}
                    </button>

                    <button
                        onClick={handleDownload}
                        disabled={loading}
                        className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-600 cursor-pointer"
                    >
                        {loading ?(
                            <>
                                <LoaderCircle className="w-4 h-4 animate-spin"/>
                                <span> Downloading...</span>
                            </>
                        ):(
                            <>
                                <Download size={16} className="text-white" />
                                <span>Download</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Transaction List */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {transactions?.length > 0 ? (
                    transactions.map((income) => (
                        <TransactionCard
                            key={income.id}
                            title={income.name}
                            icon={income.icon}
                            date={moment(income.date).format("DD MMM YYYY")}
                            amount={income.amount}
                            type="income"
                            onDelete={() => onDelete(income.id)}
                        />
                    ))
                ) : (
                    <div className="col-span-full rounded-lg border border-dashed border-gray-300 py-12 text-center">
                        <p className="text-gray-500">
                            No income records available.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IncomeList;