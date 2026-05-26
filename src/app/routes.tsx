import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Support } from "./pages/Support";
import { Legal } from "./pages/Legal";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "productos", Component: Products },
      { path: "servicios", Component: Services },
      { path: "nosotros", Component: About },
      { path: "contacto", Component: Contact },
      { path: "soporte", Component: Support },
      { path: "privacidad", Component: Legal },
      { path: "terminos", Component: Legal },
    ],
  },
]);
