import { Home } from "./Pages/Home";
import { UserContext } from "./Context/user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <UserContext>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </UserContext>
  );
}
