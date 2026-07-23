import {useEffect, useState} from "react";
import Input from "./Input.jsx";
import EmojiPickerPopUp from "./EmojiPickerPopUp.jsx";
import {LoaderCircle} from "lucide-react";

const AddCategoryFrom = ({onAddCategory,initialCategoryData ,isEditting}) => {
    const [category, setCategory] = useState({
        name:"",
        type:"income",
        icon:""
    })

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(isEditting && initialCategoryData){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCategory(initialCategoryData);
        }else {
            setCategory({name: "", type: "income",icon:""});
        }
    },[isEditting,initialCategoryData])



    const categoryTypeOptions = [
        {value:"income",label:"Income"},
        {value:"expense",label:"Expense"},
    ]

    const handleChange = (key,value) => {
        setCategory({...category,[key]:value})
    }


    const handleSubmit = async () => {
        setLoading(true);
        try{
            await onAddCategory(category);
        }finally {
            setLoading(false);
        }
    }


    return (
        <div className="p-4">

            <EmojiPickerPopUp
                icon={category.icon}
                onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
            />

            <Input
                value={category.name}
                onChange={({target}) => handleChange("name", target.value)}
                label="Category Name"
                placeholder="e.g., Freelance,Salary,Groceries"
                type="text"

            />

            <Input
                label="Category Type"
                value={category.type}
                onChange={({target}) => handleChange("type", target.value)}
                isSelect={true}
                options={categoryTypeOptions}
            />

            <div className="flex justify-end mt-6">
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="add-btn add-btn-fill cursor-pointer bg-purple-700 rounded-lg py-2 px-3 text-black">
                    {loading ? (
                        <>
                            <LoaderCircle className="w-4 h-4 animate-spin"/>
                            {isEditting ? "Updating..." : "Adding..."}
                        </>
                    ):(
                        <>
                            {isEditting ? "Update Category" : "Add Category"}
                        </>
                    )}
                </button>
            </div>

        </div>
    )
}

export default AddCategoryFrom;