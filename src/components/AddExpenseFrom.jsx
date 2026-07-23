import { useEffect, useState } from "react";
import EmojiPickerPopUp from "./EmojiPickerPopUp.jsx";
import Input from "./Input.jsx";
import { LoaderCircle } from "lucide-react";

const AddExpenseForm = ({ onAddExpense, categories }) => {

    const [expense, setExpense] = useState({
        name: "",
        amount: "",
        date: "",
        icon: "",
        categoryId: ""
    });

    const [loading, setLoading] = useState(false);

    const categoryOptions = categories.map(category => ({
        value: category.id,
        label: category.name
    }));

    const handleChange = (key, value) => {
        setExpense(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleAddExpense = async () => {
        setLoading(true);

        try {
            await onAddExpense(expense);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (categories.length > 0 && !expense.categoryId) {
            setExpense(prev => ({
                ...prev,
                categoryId: categories[0].id
            }));
        }
    }, [categories, expense.categoryId]);

    return (
        <div>
            <EmojiPickerPopUp
                icon={expense.icon}
                onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
            />

            <Input
                value={expense.name}
                onChange={({ target }) => handleChange("name", target.value)}
                label="Expense Name"
                placeholder="e.g., Grocery, Rent, Electricity"
                type="text"
            />

            <Input
                label="Category"
                value={expense.categoryId}
                onChange={({ target }) => handleChange("categoryId", target.value)}
                isSelect={true}
                options={categoryOptions}
            />

            <Input
                value={expense.amount}
                onChange={({ target }) => handleChange("amount", target.value)}
                label="Amount"
                placeholder="e.g., 500"
                type="number"
            />

            <Input
                value={expense.date}
                onChange={({ target }) => handleChange("date", target.value)}
                label="Date"
                type="date"
            />

            <div className="mt-6 flex justify-end">
                <button
                    onClick={handleAddExpense}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {loading ? (
                        <>
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                            Adding...
                        </>
                    ) : (
                        "Add Expense"
                    )}
                </button>
            </div>
        </div>
    );
};

export default AddExpenseForm;