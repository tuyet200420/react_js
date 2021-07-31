import { Route } from "react-router-dom";
import Header from "./Header";
function DefaultLayout({ exact, path, component: Component,page }){
    console.log("🚀 ~ file: DefaultLayout.jsx ~ line 4 ~ DefaultLayout ~ page", page)
    return(
        <Route
        exact={exact}
        path={path}
        render={(routeProps) => {
        console.log("🚀 ~ file: DefaultLayout.jsx ~ line 10 ~ DefaultLayout ~ routeProps", routeProps)
          return (
            <>
              <Header page ={page} /> 
              <div className="main-container">
                <Component {...routeProps} />
              </div>
            </>
          )
        }}  
      />
    )
}
export default DefaultLayout