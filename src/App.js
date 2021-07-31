import {
  Router,
  Switch,
} from "react-router-dom";
import history from "./utils/history";
import DefaultLayout from "./layouts/DefaultLayout"
import FullLayout from "./layouts/FullLayout";
import DefaultLayoutAdmin from "./layouts/admin/DefaultLayoutAdmin";
import Login from "./pages/Login";
import Register from "./pages/user/Register"
import NotFound from "./pages/NotFound";
import Home from "./pages/user/Home";
import DashboardPage from "./pages/admin/DashboardPage";
import ProductListHoc from "./pages/admin/ProductListHoc";
import ProductHook from "./pages/admin/ProductHook";
import ProductToolkit from "./pages/admin/ProductToolkit";
import 'antd/dist/antd.css';
import './css/base.css'
import './css/style.css'

function App(props) {
  console.log("🚀 ~ file: App.js ~ line 15 ~ App ~ history", history)
  return (
    <Router history = {history}>
      <Switch>
        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout page="register" exact path="/register" component={Register} />

        <DefaultLayoutAdmin  exact path="/admin" component={DashboardPage} />
        <DefaultLayoutAdmin  exact path="/admin/products-with-hoc" component={ProductListHoc} />
        <DefaultLayoutAdmin  exact path="/admin/products-with-hook" component={ProductHook} />
        <DefaultLayoutAdmin  exact path="/admin/products-with-toolkit" component={ProductToolkit} />
        <FullLayout exact path="/login" component={Login} />
        <FullLayout  exact component = {NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
