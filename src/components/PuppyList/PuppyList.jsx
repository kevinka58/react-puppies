import PuppyListItem from '../PuppyListItem/PuppyListItem'

export default function PuppyList({ menuPuppies }) {
    const puppies = menuPuppies.map(puppy =>
        <PuppyListItem 
        key={puppy._id}
        menuItem={puppy}
        />
        )
        return (
            <main className="MenuList">
                {puppies}
            </main>
        )
}