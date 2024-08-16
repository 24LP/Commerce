import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

// Layouts
import { RootLayout } from "./pages/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);
