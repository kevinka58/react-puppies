import React from 'react';
import { Link } from 'react-router-dom';
export default function PuppyListItem({ puppy }) {
    return (
        <div className="PuppyListItem">
            <div>{puppy.name}</div> 
            <div>{puppy.breed}</div>
            <div>{puppy.age}</div>
                <Link className='btn btn-xs btn-info'
                to={
                    {
                        pathname: '/details',
                        state: {puppy}
                    }
                }
                >
                    DETAILS
                </Link>
            </div>
    )
}