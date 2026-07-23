import Dashboard from "../components/Dashboard.jsx";
import {UserHooks} from "../hooks/UserHooks.jsx";
import {Plus} from "lucide-react";
import CategoryList from "../components/CategoryList.jsx";
import {useEffect, useState} from "react";
import axiosConfig from "../util/axiosConfig.jsx";
import {API_ENDPOINTS} from "../util/apiEndpoints.js";
import toast from "react-hot-toast";
import Modal from "../components/Modal.jsx";
import AddCategoryFrom from "../components/AddCategoryFrom.jsx";

const Category= ()=>{
    UserHooks();
    const [loading,setLoading] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [openAddCategoryModal, setOpenAddCategoryModal] = useState(false);
    const [openEditCategoryModal , setOpenEditCategoryModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);


    const CategoryDetails = async () =>{
        if(loading) return;

        setLoading(true);

        try{
           const response = await axiosConfig.get(API_ENDPOINTS.GET_ALL_CATEGORIES);
           if(response.status === 200){
               console.log('categories',response.data);
               setCategoryData(response.data);
           }
        }catch (error) {
            console.error("Something went wrong. Please try again", error);
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        CategoryDetails();
    },[])




    const handleAddCategory = async (category)=>{
        const {name,type,icon} = category;

        if(!name.trim()){
            toast.error("Category name is required");
            return;
        }
        const isDuplicate = categoryData.some((category) =>{
            return category.name.toLowerCase() === name.trim().toLowerCase();
        })
        if(isDuplicate){
            toast.error("Category name is already exists");
            return;
        }
        try{
           const response= await axiosConfig.post(API_ENDPOINTS.ADD_CATEGORY,{name,type,icon});

           if(response.status === 201){
               toast.success("Category added successfully");
               setOpenAddCategoryModal(false);
               CategoryDetails();
           }
        }catch (error) {
            console.error("Error adding category", error);
            toast.error(error.response?.data?.message || " Failed to adding category");
        }
    }

    const handleEditCategory = (categoryToEdit) =>{
        setSelectedCategory(categoryToEdit);
        setOpenEditCategoryModal(true);
    }

    const handleUpdateCategory = async (categoryToUpdate) =>{
        const {id,name,type,icon} = categoryToUpdate;
        if(!name.trim()){
            toast.error("Category name is required");
            return;
        }
        if(!id){
            toast.error("Category ID name is required");
            return;
        }

        try{
            await axiosConfig.put(API_ENDPOINTS.UPDATE_CATEGORY(id),{name,type,icon});
            setOpenEditCategoryModal(false);
            setSelectedCategory(null);
            toast.success("Category updated successfully");
            CategoryDetails();
        }catch (error) {
            console.error("Error updating category", error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || " Failed to update category");
        }
    }



    return(
        <div >
            <Dashboard activeMenu="Category" >
                <div className="my-5 mx-auto ">
                    {/*{Add button to add categories}*/}
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-2xl font-semibold"> All Categories</h2>
                        <button
                            onClick={() =>setOpenAddCategoryModal(true)}
                            className="add-btn flex bg-blue-400  hover:bg-blue-500  cursor-pointer rounded-lg px-3 py-1 items-center gap-1">
                            <Plus size={20} />
                            Add Category
                        </button>
                    </div>


                    {/*{Category list}*/}
                    <CategoryList categories={categoryData} onEditCategory={handleEditCategory}/>

                    {/*{Adding category model}*/}
                    <Modal
                        isOpen={openAddCategoryModal}
                        onClose={() => setOpenAddCategoryModal(false)}
                        title="Add Category"
                    >
                        <AddCategoryFrom  onAddCategory={handleAddCategory}/>
                    </Modal>

                    {/* Updating to category modal*/}
                    <Modal
                        onClose={() =>{
                            setOpenEditCategoryModal(false);
                            setSelectedCategory(null);
                        }}
                        isOpen={openEditCategoryModal}
                        title="Update Category"
                    >
                        <AddCategoryFrom
                            initialCategoryData={selectedCategory}
                            onAddCategory={handleUpdateCategory}
                            isEditting = {true}
                        />
                    </Modal>

                </div>
            </Dashboard>
        </div>
    )
}

export default Category;