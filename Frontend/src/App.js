import { Switch, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Addproduct from "./component/Addproduct";
// import Productchart from "./component/Productchart";
import Editproduct from "./component/EditProduct";
import Navbar from "./component/Navbar";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Home from "./pages/Home";
import Productinfo from "./pages/Productinfo";
// import profile from "./pages/profile";
import React, { Suspense } from "react";
import { ClipLoader } from "react-spinners";
const Profile = React.lazy(() => import("./pages/profile"));
const Productchart = React.lazy(() => import("./component/Productchart"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile">
          <Suspense
            fallback={
              <div className=" d-flex justify-content-center mt-50">
                <ClipLoader color={"red"} loading={true} size={50} />
              </div>
            }
          >
            <Profile />
          </Suspense>
        </Route>

        <Route exact path="/chart">
          <Suspense
            fallback={
              <div className=" d-flex justify-content-center mt-50">
                <ClipLoader color={"red"} loading={true} size={50} />
              </div>
            }
          >
            <Productchart />
          </Suspense>
        </Route>
        <Route
          exact
          path="/productinfo/:pName/:desc/:price/:manuf/:quantity/"
          component={Productinfo}
        />
        <Route exact path="/addproduct" component={Addproduct} />
        <Route
          exact
          path="/editproduct/:id/:pName/:desc/:price/:manuf/:quantity/"
          component={Editproduct}
        />
      </Switch>
    </div>
  );
}

export default App;
