import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { userRoute } from "./routes/userRoute";

function App() {
  return (
    <Router>
      <Routes>
        {userRoute.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={route.element}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
