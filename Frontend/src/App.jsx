import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "sonner";
export default function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </>
  );
}
