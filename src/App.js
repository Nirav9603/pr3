import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Container/Home/Home";
import About from "./Container/About/About";
import Departments from "./Container/Departments/Departments";
import Doctors from "./Container/Doctors/Doctors";
import Contact from "./Container/Contact/Contact";
import Appointment from "./Container/Appointment/Appointment";
import Login from "./Container/Login/Login";
import AppoinmentList from "./Container/AppoinmentList/AppoinmentList";

function App() {
  return(
    <div className="App">
      <Header />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/departments"} exact component={Departments} />
          <Route path={"/doctors"} exact component={Doctors} />
          <Route path={"/about"} exact component={About} />
          <Route path={"/contact"} exact component={Contact} />
          <Route path={"/appointment"} exact component={Appointment} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/appointment-list"} exact component={AppoinmentList} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
