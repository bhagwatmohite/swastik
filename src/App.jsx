/* eslint-disable react/no-unescaped-entities */

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboardlayout from './Components/Admin/Dashboardlayout';
import Tables from './Components/Admin/Tables';
import Home from "./Components/Home";
import HomeLayoute from './Layoutes/HomeLayoute';
import AboutUs from './Pages/AboutUs';
import BlogPage from './Pages/BlogPage';
import ClientsPage from './Pages/ClientsPage';
import ContactUsPage from './Pages/ContactUsPage';
import OurTeamPage from './Pages/OurTeamPage';
import ServicesPage from './Pages/ServicesPage';


function App() {

  return (
    <>
      <Router>
        <div className="scrollable-element" style={{ height: '500px' }}>
          <Routes>

            <Route element={<HomeLayoute />} >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/team" element={<OurTeamPage />} />
              <Route path="/clients" element={<ClientsPage />} />
            </Route>

            <Route element={<Dashboardlayout />}>
              {/* Default route for /dashboard */}
              <Route path='/admin' />
              <Route path='table' element={<Tables></Tables>}></Route>
            </Route>

          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
