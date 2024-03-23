import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { UserContext } from "./Context/user";
import { Detailview } from "./Details/Detailview";
import { Cart } from "./Components/Cart";

export function App() {
  return (
    <UserContext>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<Detailview />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </UserContext>
  );
}
