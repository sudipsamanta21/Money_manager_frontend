import Dashboard from "../components/Dashboard.jsx";
import { UserHooks } from "../hooks/UserHooks.jsx";
import { useEffect, useState } from "react";
import axiosConfig from "../util/axiosConfig.jsx";
import { API_ENDPOINTS } from "../util/apiEndpoints.js";
import toast from "react-hot-toast";
import ExpenseList from "../components/ExpenseList.jsx";
import Modal from "../components/Modal.jsx";
import AddExpenseForm from "../components/AddExpenseFrom.jsx";
import DeleteAlert from "../components/DeleteAlert.jsx";
import ExpenseOverview from "../components/ExpenseOverview.jsx";

const Expense = () => {
    UserHooks();

    const [expenseData, setExpenseData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);

    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        data: null,
    });

    const fetchExpenseDetails = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const response = await axiosConfig.get(API_ENDPOINTS.GET_EXPENSES);

            if (response.status === 200) {
                setExpenseData(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch expense details...", error);
            toast.error(error.response?.data?.message || "Failed to fetch expense details.");
        } finally {
            setLoading(false);
        }
    };

    const fetchExpenseCategories = async () => {
        try {
            const response = await axiosConfig.get(
                API_ENDPOINTS.CATEGORY_BY_TYPE("expense")
            );

            if (response.status === 200) {
                setCategories(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch expense categories...", error);
            toast.error(error.response?.data?.message || "Failed to fetch expense categories.");
        }
    };

    const handleAddExpense = async (expense) => {
        const { name, amount, date, icon, categoryId } = expense;

        if (!name.trim()) {
            toast.error("Please enter a valid name");
            return;
        }

        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            toast.error("Amount must be greater than 0");
            return;
        }

        if (!date) {
            toast.error("Please select a date");
            return;
        }

        const today = new Date().toISOString().split("T")[0];

        if (date > today) {
            toast.error("Date can't be in the future");
            return;
        }

        if (!categoryId) {
            toast.error("Please select a category");
            return;
        }

        try {
            const response = await axiosConfig.post(
                API_ENDPOINTS.ADD_EXPENSE,
                {
                    name,
                    amount: Number(amount),
                    date,
                    icon,
                    categoryId,
                }
            );

            if (response.status === 201) {
                setOpenAddExpenseModal(false);
                toast.success("Expense added successfully.");
                fetchExpenseDetails();
                fetchExpenseCategories();
            }
        } catch (error) {
            console.error("Failed to add expense...", error);
            toast.error(error.response?.data?.message || "Failed to add expense.");
        }
    };

    const deleteExpense = async (id) => {
        try {
            await axiosConfig.delete(API_ENDPOINTS.DELETE_EXPENSE(id));

            setOpenDeleteAlert({
                show: false,
                data: null,
            });
            toast.success("Expense deleted successfully.");
            fetchExpenseDetails();
        } catch (error) {
            console.error("Error deleting expense...", error);
            toast.error(error.response?.data?.message || "Failed to delete expense.");
        }
    };

    const handleDownloadExpenseDetails = async () => {
        try {
            const response = await axiosConfig.get(
                API_ENDPOINTS.DOWNLOAD_EXPENSE,
                {
                    responseType: "blob",
                }
            );
            const url = window.URL.createObjectURL(
                new Blob([response.data])
            );
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "expense_details.xlsx");
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
            toast.success("Expense report downloaded successfully.");
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Download failed.");
        }
    };

    const handleEmailExpenseDetails = async () => {
        try {
            const response = await axiosConfig.post(
                API_ENDPOINTS.EMAIL_EXPENSE
            );
            if (response.status === 200) {
                toast.success("Expense report emailed successfully.");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Email failed.");
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchExpenseDetails();
        fetchExpenseCategories();
    }, []);

    return (
        <Dashboard activeMenu="Expense">
            <div className="mx-auto my-5 bg-gray-100">
                <div className="grid grid-cols-1 gap-6">

                    <ExpenseOverview
                        transactions={expenseData}
                        onAddExpense={() =>
                            setOpenAddExpenseModal(true)
                        }
                    />

                    <ExpenseList
                        transactions={expenseData}
                        onDelete={(id) =>
                            setOpenDeleteAlert({
                                show: true,
                                data: id,
                            })
                        }
                        onDownload={handleDownloadExpenseDetails}
                        onEmail={handleEmailExpenseDetails}
                    />

                    <Modal
                        isOpen={openAddExpenseModal}
                        onClose={() =>
                            setOpenAddExpenseModal(false)
                        }
                        title="Add Expense"
                    >
                        <AddExpenseForm
                            onAddExpense={handleAddExpense}
                            categories={categories}
                        />
                    </Modal>

                    <Modal
                        isOpen={openDeleteAlert.show}
                        onClose={() =>
                            setOpenDeleteAlert({
                                show: false,
                                data: null,
                            })
                        }
                        title="Delete Expense"
                    >
                        <DeleteAlert
                            content="Are you sure you want to delete this expense?"
                            onDelete={() =>
                                deleteExpense(openDeleteAlert.data)
                            }
                        />
                    </Modal>

                </div>
            </div>
        </Dashboard>
    );
};

export default Expense;