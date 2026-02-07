import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./routes/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
