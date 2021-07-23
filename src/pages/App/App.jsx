import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewPuppy from "../NewPuppy/NewPuppy";
import Puppies from "../Puppies/Puppies";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Switch>
            <Route path="/puppies/new">
              <NewPuppy />
            </Route>
            <Route path="/puppies">
              <Puppies />
            </Route>
            <Redirect to="/puppies" />
          </Switch>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}
