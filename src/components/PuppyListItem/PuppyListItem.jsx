
export default function PuppyListItem({ puppy }) {
    return (
        <div className="PuppyListItem">
            <div className="name">{puppy.name}</div> 
            <div className="buy">
                <button className="btn-sm">ADD</button>
            </div>
        </div>
    )
}