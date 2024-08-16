import { RouterProvider } from "react-router-dom";

//pages
import Header from "./components/Header";
import Section from "./components/Section";
import { router } from "./routerConfig";

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Header />
        <Section />
      </div>
    </RouterProvider>
  );
}

export default App;
