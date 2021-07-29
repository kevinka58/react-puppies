import { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import PuppyList from "../PuppyList/PuppyList"
import * as puppyAPI from '../../utilities/puppies-api';
import "./App.css";
import AddPuppyPage from "../AddPuppyPage/AddPuppyPage";
import PuppyDetailPage from "../PuppyDetailPage/PuppyDetailPage";
import EditPuppyPage from "../EditPuppyPage/EditPuppyPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [puppies, setPuppies] = useState([])
  const history = useHistory();


  useEffect(() => {
		async function getPuppies() {
			const puppies = await puppyAPI.getAll();
			setPuppies(puppies);
		}
		getPuppies();
	}, []);

  useEffect(() => {
		history.push('/');
	}, [puppies, history]);

	async function handleAddPuppy(newPuppyData) {
		const newPuppy = await puppyAPI.create(newPuppyData);
		setPuppies([...puppies, newPuppy]);
	}
  
  async function handleAddPuppy (newPupData){
    const newPup = await puppyAPI.create(newPupData);
    setPuppies([...puppies, newPup])
  }

  async function handleUpdatePuppy (updatedPuppyData){
    const updatedPuppy = await puppyAPI.update(updatedPuppyData)
    const newPuppiesArray = puppies.map(p =>
       p._id === updatedPuppy._id ? updatedPuppy : p
       )
       setPuppies(newPuppiesArray);
  }

  async function handleDeletePuppy(id) {
		await puppyAPI.deleteOne(id);
		setPuppies(puppies.filter(puppy => puppy._id !== id));
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
              <PuppyList puppies={puppies}
              handleDeletePuppy={handleDeletePuppy} />
            </Route>
            <Route exact path="/details">
              <PuppyDetailPage />
            </Route>
            <Route exact path='/edit'>
              <EditPuppyPage handleUpdatePuppy={handleUpdatePuppy} />
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
