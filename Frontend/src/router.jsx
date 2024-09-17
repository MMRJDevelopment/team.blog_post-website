import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ShowBlog from "./pages/ShowBlog";
import CreateBlog from "./pages/CreateBlog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/details/:id" element={<ShowBlog />} />
        <Route path="/postblog" element={<CreateBlog/>} />
      </Route>
    </Route>
  )
);

export default router;
