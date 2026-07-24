
export const BASE_URL = "https://money-manager-16jo.onrender.com/api/v1.0";

// export const BASE_URL = "http://localhost:8081/api/v1.0";
const CLOUDINARY_CLOUD_NAME = "mijacury";




export const API_ENDPOINTS = {
    REGISTER: "/register",
    LOGIN: "/login",
    GET_USER_INFO: "/profile",
    GET_ALL_CATEGORIES: "/categories",
    ADD_CATEGORY: "/categories",
    UPDATE_CATEGORY: (categoryId) => `/categories/${categoryId}`,



    GET_INCOMES: "/incomes",
    CATEGORY_BY_TYPE: (type ) => `/categories/${type}`,
    ADD_INCOME: "/incomes",
    DELETE_INCOME: (incomeId) => `/incomes/${incomeId}`,
    DOWNLOAD_INCOME: "/excel/download/income",
    EMAIL_INCOME: "/excel/email/download/income",


    GET_EXPENSES: "/expenses",
    ADD_EXPENSE: "/expenses",
    DELETE_EXPENSE: (expenseId) => `/expenses/${expenseId}`,
    DOWNLOAD_EXPENSE: "/excel/download/expense",
    EMAIL_EXPENSE: "/excel/email/download/expense",

    APPLY_FILTERS:"/filter",
    DASHBOARDS_DATA:"/dashboard",
    UPLOAD_IMAGE:`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
};
