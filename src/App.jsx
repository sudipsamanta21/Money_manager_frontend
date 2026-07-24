import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Category from "./pages/Category.jsx";
import Expense from "./pages/Expense.jsx";
import Income from "./pages/Income.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Filter from "./pages/Filter.jsx";
import {Toaster} from "react-hot-toast";
import About from "./pages/About.jsx";
import Developer from "./pages/Developer.jsx";
import HomeLanding from "./pages/HomeLanding.jsx";
import LearnMore from "./pages/LearnMore.jsx";



const App =() =>{
  return(
      <>
          <Toaster />
          <BrowserRouter>
              <Routes>
                  <Route path="/"  element={<Root />} />
                  <Route path="/home" element={<HomeLanding />}/>
                  <Route path="/learn" element={<LearnMore />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/signup" element={<Signup />}/>
                  <Route path="/dashboard" element={<Home />}/>
                  <Route path="/category" element={<Category />}/>
                  <Route path="/expense" element={<Expense />}/>
                  <Route path="/filter" element={<Filter />}/>
                  <Route path="/income" element={<Income />}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/developer" element={<Developer />}/>


              </Routes>
          </BrowserRouter>
      </>
  )
}

const Root = () =>{
    const isAuthenticated  = !! localStorage.getItem("token");
    return isAuthenticated ? (
        < Navigate to="/home"/>
    ) : (
        <Navigate to="/home"/>
    );
}

export default App;