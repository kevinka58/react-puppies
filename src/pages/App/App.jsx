import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewPuppy from "../AddPuppyPage/AddPuppyPage";
import Puppies from "../Puppies/Puppies";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
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
        <AuthPage setUser={setUser}/>
      )}
    </main>
  );
}
