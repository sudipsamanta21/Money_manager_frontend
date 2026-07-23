import Dashboard from "../components/Dashboard.jsx";
import {UserHooks} from "../hooks/UserHooks.jsx";
import {useEffect, useState} from "react";
import axiosConfig from "../util/axiosConfig.jsx";
import {API_ENDPOINTS} from "../util/apiEndpoints.js";
import toast from "react-hot-toast";
import IncomeList from "../components/IncomeList.jsx";
import Modal from "../components/Modal.jsx";
import {Plus} from "lucide-react";
import AddIncomeFrom from "../components/AddIncomeFrom.jsx";
import DeleteAlert from "../components/DeleteAlert.jsx";
import IncomeOverview from "../components/IncomeOverview.jsx";

const Income =()=>{
    UserHooks();

    const [incomeData, setIncomeData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openAddIncomeModal,setOpenAddIncomeModal] = useState(false);
    const [openDeleteAlert,setOpenDeleteAlert] = useState({
        show: false,
        data:null,
    });

    const fetchIncomeDetails = async () => {
        if(loading){
            return;
        }
        setLoading(true);

        try{
            const response = await axiosConfig.get(API_ENDPOINTS.GET_INCOMES);
            if(response.status === 200){
                setIncomeData(response.data);
            }
        }catch (error){
            console.error("Failed to fetch income details...", error);
            toast.error(error.response?.data?.message || "Failed to fetch income details.");
        }finally{
            setLoading(false);
        }
    }


    const fetchIncomeCategories = async () => {
        try{
            const response= await axiosConfig.get(API_ENDPOINTS.CATEGORY_BY_TYPE("income"));
            if(response.status === 200){
                console.log('Income Categories',response.data);
                setCategories(response.data);
            }
        }catch (error){
            console.log("Failed to fetch income categories...", error);
            toast.error(error.data?.message || "Failed to fetch income categories.");
        }
    }


    const handleAddIncome = async (income) => {
        const {name,amount, date , icon, categoryId} = income;

        if(!name.trim()){
            toast.error("Please enter a valid name");
            return;
        }
        if(!amount || isNaN(amount) || Number(amount)  <= 0){
            toast.error("Amount must be a valid number greater than 0");
            return;
        }
        if(!date){
            toast.error("Please enter a valid date");
            return;
        }
        const today = new Date().toISOString().split("T")[0];
        if(date > today){
            toast.error("Date can't be in the future");
            return;
        }
        if (!categoryId){
            toast.error("Please enter a valid category");
            return;
        }

        try {
            const response = await axiosConfig.post(API_ENDPOINTS.ADD_INCOME,{
                name,
                amount:Number(amount),
                date,
                icon,
                categoryId
            })


            if(response.status === 201){
                setOpenAddIncomeModal(false);
                toast.success("Income added successfully.");
                fetchIncomeDetails();
                fetchIncomeCategories();
            }
        }catch (error){
            console.error("Failed to fetch income...", error);
            toast.error(error.response?.data?.message || "Failed to fetch income.");
        }
    }

    const deleteIncome = async (id) => {
        try{
            await axiosConfig.delete(API_ENDPOINTS.DELETE_INCOME(id));
            setOpenDeleteAlert({show: false, data:null});
            toast.success("Income delete successfully.");
            fetchIncomeDetails();
        }catch (error) {
            console.log("Error deleting income details...", error);
            toast.error(error.response?.data?.message || "Failed to fetch income details.");
        }
    }

    const handleDownloadIncomeDetails = async () =>{

        try{
            const response= await axiosConfig.get(API_ENDPOINTS.DOWNLOAD_INCOME,{responseType:"blob"});
            let filename = "income_details.xlsx";
            const url =window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
            toast.success("Download income download successfully.");
        }catch (error){
            console.error("Failed to download income details...", error);
            toast.error(error.response?.data?.message || "Failed to download income details.");
        }
    }

    const handleEmailIncomeDetails = async () =>{

        try{
           const response = await axiosConfig.post(API_ENDPOINTS.EMAIL_INCOME);
           if(response.status === 200){
               toast.success("Income details emailed successfully.");
           }
        }catch (error){
            console.error("Failed to Emailing  income details...", error);
            toast.error(error.response?.data?.message || "Failed to emailing  income details.");
        }
    }

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchIncomeDetails();
        fetchIncomeCategories();
    },[]);

    return(
        <div>
            <Dashboard activeMenu="Income">
                <div className="my-5 mx-auto bg-gray-100">
                    <div className="grid grid-cols-1 gap-6 bg-gray-100">
                        <IncomeOverview transactions={incomeData} onAddIncome={() =>setOpenAddIncomeModal(true)}/>
                        <IncomeList
                            transactions ={incomeData}
                            onDelete={(id) => setOpenDeleteAlert({show:true, data:id})}
                            onDownload={handleDownloadIncomeDetails}
                            onEmail={handleEmailIncomeDetails}
                        />

                        {/*Add Income Modal*/}
                        <Modal
                            isOpen={openAddIncomeModal}
                            onClose={() => setOpenAddIncomeModal(false)}
                            title="Add Income"
                        >
                            <AddIncomeFrom
                                onAddIncome = {(income) => handleAddIncome(income)}
                                categories = {categories}
                            />
                        </Modal>

                        {/* Delete Income Modal*/}
                        <Modal
                            isOpen={openDeleteAlert.show}
                            onClose={() => setOpenDeleteAlert({show: false, data: null})}
                            title="Delete Income"
                        >
                            <DeleteAlert
                                content="Are you sure you want to delete this Income?"
                                onDelete={() => deleteIncome(openDeleteAlert.data)}
                            />
                        </Modal>
                    </div>
                </div>
            </Dashboard>
        </div>
    )
}

export default Income;