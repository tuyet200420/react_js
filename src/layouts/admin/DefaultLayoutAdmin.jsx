import { Route } from "react-router-dom";
import {useState} from "react"
import HeaderAdmin from "./HeaderAdmin";
import Sidebar from "./Sidebar";
function DefaultLayoutAdmin({ exact, path, component: Component,page }){
    console.log("🚀 ~ file: DefaultLayoutAdmin.jsx ~ line 4 ~ DefaultLayoutAdmin ~ page", page)
    const [isShowSidebar,setIsShowSidebar]=useState(true);
    return(
        
        <Route
        exact={exact}
        path={path}
        render={(routeProps) => {
        console.log("🚀 ~ file: DefaultLayoutAdmin.jsx ~ line 10 ~ DefaultLayoutAdmin ~ routeProps", routeProps)
          return (
            <>
              <HeaderAdmin
                isShowSidebar={isShowSidebar}
                setIsShowSidebar={setIsShowSidebar}
              /> 
                <div className="admin_container ">
                    <div className={`sidebar_admin ${isShowSidebar && 'show'}`}>
                        <Sidebar {...routeProps}
                         isShowSidebar={isShowSidebar}
                        />
                    </div>
                    
                    <div className={`main-container main-container-admin ${isShowSidebar ?'':'full-width'}`}>
                        <Component {...routeProps} />
                    </div>
                </div>
              
            </>
          )
        }}  
      />
    )
}
export default DefaultLayoutAdmin