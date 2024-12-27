// import { useState } from 'react';
import NavBar from "./NavBar/NavBar";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import GeneralSearch from "./SearchComponents/GeneralSearch";

/**
 * TODO:
 *  Need a FormSelector component to determine the API link
 *  Need to create a container for cards so I can click on all the options
 *  Need a space for clicking Submit or Cancel the query
 *  Need a way to pop up a modal that will display more information or conditionally render the additional data
 */

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<GeneralSearch />} />
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
