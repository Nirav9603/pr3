import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import About from './Container/About/About';
import Departments from './Container/Departments/Departments';
import Doctors from './Container/Doctors/Doctors';
import Contact from './Container/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/departments"} exact component={Departments} />
          <Route path={"/doctors"} exact component={Doctors} />
          <Route path={"/about"} exact component={About} />
          <Route path={"/contact"} exact component={Contact} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
