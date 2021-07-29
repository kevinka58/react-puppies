import PuppyListItem from '../PuppyListItem/PuppyListItem'
import React from 'react'

export default function PuppyList(props) {
    return (
        <>
        <h1>Puppy List</h1>  
        <div>
            {props.puppies.map(puppy => (
                <PuppyListItem puppy={puppy} key={puppy._id} />
            ))}
            </div>   
            </>   
    )
}