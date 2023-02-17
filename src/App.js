import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import default style RSUITE
// import 'rsuite/dist/rsuite.min.css';

import Layout from "./conponents/layout/layout";
import About from "./containers/About";
import Home from './containers/Home';
import Rooms from "./containers/Rooms";
import Room from "./conponents/room/room";
import { HomeNavbar } from "./conponents/navbar/Navbar";

function App() {
  return (
    <div>
        <Router>
      <Layout>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/room' element={<Room/>}/>

      </Routes>
      </Layout>
        </Router>
        

    </div>
  );
}

export default App;
