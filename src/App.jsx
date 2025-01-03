import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./NavBar/NavBar";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import GeneralSearch from "./SearchComponents/GeneralSearch";
import ClassSearch from "./SearchComponents/ClassSearch";

/**
 * TODO:
 *  Need a FormSelector component to determine the API link
 *  Need to create a container for cards so I can click on all the options
 *  Need a space for clicking Submit or Cancel the query
 *  Need a way to pop up a modal that will display more information or conditionally render the additional data
 */

const App = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const getAllClasses = async () => {
      const { data } = await axios.get('https://www.dnd5eapi.co/api/classes');
      setClasses(data.results);
    };

    getAllClasses();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<GeneralSearch />} />
        <Route path="/class" element={<ClassSearch classes={classes} />} />
        {/* <Route path="designs" element={<Designs designs={designs} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
};

export default App
