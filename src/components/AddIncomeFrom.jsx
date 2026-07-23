import {useEffect, useState} from "react";
import EmojiPickerPopUp from "./EmojiPickerPopUp.jsx";
import Input from "./Input.jsx";
import {LoaderCircle} from "lucide-react";

const AddIncomeFrom = ({onAddIncome,categories}) =>{

    const  [income, setIncome ] = useState({
        name:"",
        amount:"",
        date:"",
        icon:"",
        categoryId:""
    })

    const [loading ,setLoading ] = useState(false);

    const categoryOptions = categories.map(category => ({
        value: category.id,
        label: category.name
    }))

    const handleChange = (key,value) =>{
        setIncome({...income, [key]: value});
    }

    const handleAddIncome = async () => {
        setLoading(true);

        try{
            await onAddIncome(income);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(categories.length > 0 && !income.categoryId){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIncome((prev) =>({...prev,categoryId: categories[0].id}))
        }
    }, [categories, income.categoryId]);

    return(
        <div>
            <EmojiPickerPopUp
                icon={income.icon}
                onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
            />

            <Input
                value={income.name}
                onChange={({target}) => handleChange('name', target.value)}
                label="Income Source"
                placeholder="e.g., Salay,Freelance,Bonus"
                type="text"
            />

            <Input
                label="Category"
                value={income.categoryId}
                onChange={({target}) => handleChange('categoryId', target.value)}
                isSelect={true}
                options={categoryOptions}
            />
            <Input
                value={income.amount}
                onChange={({target}) => handleChange('amount', target.value)}
                label="Amount"
                placeholder="e.g., 100..."
                type="number"
            />
            <Input
                 value={income.date}
                 onChange={({target}) => handleChange('date', target.value)}
                 label="Date"
                 placeholder=""
                 type="date"
            />

            <div className="flex justify-end mt-6">
                <button
                    onClick ={handleAddIncome}
                    disabled={loading}
                    className="add-btn add-btn-fill cursor-pointer bg-purple-600 py-1 px-3 rounded-lg text-black">
                    {loading ? (
                        <>
                            <LoaderCircle className="w-4 h-4 animate-spin"/>
                            Adding...
                        </>
                    ):(
                        <>
                            Add Income
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}
export default AddIncomeFrom;