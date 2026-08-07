import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { images } from "./constants";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home imagesUrl={images} />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
