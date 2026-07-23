import { Download, LoaderCircle, Mail } from "lucide-react";
import TransactionCard from "./TransactionCard.jsx";
import moment from "moment";
import { useState } from "react";

const ExpenseList = ({
                         transactions,
                         onDelete,
                         onEmail,
                         onDownload,
                     }) => {

    const [loading, setLoading] = useState(false);
    const [emailLoading, setEmailLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);
        try {
            await onDownload();
        } finally {
            setLoading(false);
        }
    };

    const handleEmail = async () => {
        setEmailLoading(true);
        try {
            await onEmail();
        } finally {
            setEmailLoading(false);
        }
    };

    return (
        <div className="mx-4 mt-4 rounded-xl bg-white p-5 shadow-md">

            {/* Header */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    Expense Records
                </h2>

                <div className="flex flex-wrap items-center gap-3">

                    <button
                        onClick={handleEmail}
                        disabled={emailLoading}
                        className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {emailLoading ? (
                            <>
                                <LoaderCircle className="h-4 w-4 animate-spin" />
                                <span>Emailing...</span>
                            </>
                        ) : (
                            <>
                                <Mail size={16} />
                                <span>Email</span>
                            </>
                        )}
                    </button>

                    <button
                        onClick={handleDownload}
                        disabled={loading}
                        className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {loading ? (
                            <>
                                <LoaderCircle className="h-4 w-4 animate-spin" />
                                <span>Downloading...</span>
                            </>
                        ) : (
                            <>
                                <Download size={16} />
                                <span>Download</span>
                            </>
                        )}
                    </button>

                </div>
            </div>

            {/* Expense List */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {transactions?.length > 0 ? (
                    transactions.map((expense) => (
                        <TransactionCard
                            key={expense.id}
                            title={expense.name}
                            icon={expense.icon}
                            date={moment(expense.date).format("DD MMM YYYY")}
                            amount={expense.amount}
                            type="expense"
                            onDelete={() => onDelete(expense.id)}
                        />
                    ))
                ) : (
                    <div className="col-span-full rounded-lg border border-dashed border-gray-300 py-12 text-center">
                        <p className="text-gray-500">
                            No expense records available.
                        </p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default ExpenseList;