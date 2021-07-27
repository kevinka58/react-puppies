
export default function PuppyListItem({ menuPuppy }) {
    return (
        <div className="PuppyListItem">
            <div className="name">{menuPuppy.name}</div> 
            <div className="breed">{menuPuppy.breed}</div>
            <div className="age">{menuPuppy.age}</div>
            <div className="buy">
                <button className="btn-sm">ADD</button>
            </div>
        </div>
    )
}