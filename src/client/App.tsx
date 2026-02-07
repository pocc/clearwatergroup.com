import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Services from "./routes/Services";
import Team from "./routes/Team";
import Books from "./routes/Books";
import FAQ from "./routes/FAQ";
import Contact from "./routes/Contact";
import SeaLevelRise from "./routes/SeaLevelRise";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<Team />} />
        <Route path="books" element={<Books />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sea-level-rise" element={<SeaLevelRise />} />
      </Route>
    </Routes>
  );
}
