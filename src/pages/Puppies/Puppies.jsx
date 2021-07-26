import * as usersService from '../../utilities/users-service';

function Puppies(){

    async function handleCheckToken(){
        const expDate = await usersService.checkToken()
        console.log(expDate);
    }
    return (
    <>
    <h1>Puppies</h1>  
    <button onClick={handleCheckToken}>
        Check When My Login Expires
    </button>
    </>
    )

}

export default Puppies;