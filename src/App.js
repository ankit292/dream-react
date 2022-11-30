import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Modules/Home';
import AboutDream from './Modules/AboutDream';
import AboutDrug from './Modules/AboutDrug';
import AboutDisease from './Modules/AboutDisease';
import EligibilityForm from './Modules/EligibilityForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
                  <Route exact path="/:id" element={<Home />}></Route>
                  <Route exact path="/AboutDream" element={<AboutDream />}></Route>
                  <Route exact path="/AboutDrug" element={<AboutDrug />}></Route>
                  <Route exact path="/AboutDisease" element={<AboutDisease />}></Route>
                  <Route exact path="/EligibilityForm" element={<EligibilityForm />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
