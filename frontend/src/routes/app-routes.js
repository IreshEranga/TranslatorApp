// import Home from '../components/customer/home';
// //import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const routes = [
//     {
//       path: '/',
//       component: Home,
//       exact: true,
//     },
//     // Add more route objects here as needed
//   ];
  
//   export default routes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../components/customer/home';

const AppRoutes = () => {
  return (
    <>
    <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>

      </Routes>  
    </Router></>
  )
}

export default AppRoutes;