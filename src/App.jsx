import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './Layout/Footer/Footer';
import NavBar from './Layout/NavBar/NavBar';
import Layout from './Layout/Layout';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portoflio/Portofolio';
import Home from './Pages/Home/Home';

function App() {

  const routers = createBrowserRouter([
    {
      path: "", element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {path: "about",element: <About />},
        { path: "contact", element: <Contact /> },
        { path: "portoflio", element: <Portfolio /> },

      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
