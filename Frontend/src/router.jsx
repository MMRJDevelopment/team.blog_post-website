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
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ProtectedRoutes from "./providers/ProtectedRoutes";

const isUser = false; // fatch the user info

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/details/:id" element={<ShowBlog />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/postblog" element={<CreateBlog />} />
        </Route>
      </Route>
    </Route>
  )
);

export default router;
