// import Menubar from "./Menubar.jsx";
// import Sidebar from "./Sidebar.jsx";
// import {useContext} from "react";
// import {AppContext} from "../context/AppContext.jsx";
//
// const Dashboard = ({children,activeMenu}) =>{
//     const {user} = useContext(AppContext);
//     return (
//         <div>
//             <Menubar activeMenu={activeMenu}/>
//             {user && (
//                 <div className="flex">
//                     <div className="max-[1080px]:hidden">
//                         <Sidebar activeMenu={activeMenu}/>
//                     </div>
//                     <div className="grow mx-5">{children}</div>
//                 </div>
//             )}
//         </div>
//     )
// }
//
// export default Dashboard;
//
// import Menubar from "./Menubar.jsx";
// import Sidebar from "./Sidebar.jsx";
// import { useContext } from "react";
// import { AppContext } from "../context/AppContext.jsx";
//
// const Dashboard = ({ children, activeMenu }) => {
//     const { user } = useContext(AppContext);
//
//     return (
//         <div className=" bg-gray-200">
//             <Menubar activeMenu={activeMenu} />
//
//             {user && (
//                 <div className="flex pt-[72px]">
//                     <div className="max-[1080px]:hidden">
//                         <Sidebar activeMenu={activeMenu} />
//                     </div>
//
//                     <main className="grow mx-5 ">
//                         {children}
//                     </main>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Dashboard;

import Menubar from "./Menubar.jsx";
import Sidebar from "./Sidebar.jsx";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

const Dashboard = ({ children, activeMenu }) => {
    const { user } = useContext(AppContext);

    return (
        <div className="min-h-screen bg-slate-100">
            <Menubar activeMenu={activeMenu} />

            {user && (
                <div className="flex pt-[72px]">
                    <div className="hidden xl:block">
                        <Sidebar activeMenu={activeMenu} />
                    </div>

                    <main className="flex-1 overflow-y-auto p-6">
                        {children}
                    </main>
                </div>
            )}
        </div>
    );
};

export default Dashboard;