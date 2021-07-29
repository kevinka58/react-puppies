import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import Puppies from "../Puppies/Puppies";
import * as puppyAPI from '../../utilities/puppies-api';
import "./App.css";
import AddPuppyPage from "../AddPuppyPage/AddPuppyPage";
import PuppyDetailPage from "../PuppyDetailPage/PuppyDetailPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [puppies, setPuppies] = useState([])

  useEffect(() => {
		async function getPuppies() {
			// retrieve the puppies data
			const puppies = await puppyAPI.getAll();
			// set it to state
			setPuppies(puppies);
		}
		getPuppies();
	}, []);
  
  async function handleAddPuppy (newPupData){
    const newPup = await puppyAPI.create(newPupData);
    setPuppies([...puppies, newPup])
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Switch>
            <Route exact path="/puppies/new" >
              <AddPuppyPage handleAddPuppy={handleAddPuppy}/>
            </Route>
            <Route exact path="/puppies">
              <Puppies puppies={puppies} />
            </Route>
            <Route exact path="/details">
              <PuppyDetailPage />
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
