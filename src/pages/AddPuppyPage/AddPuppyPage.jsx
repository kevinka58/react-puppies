import React, {Component, useState, useEffect, useRef } from 'react';

function AddPuppyPage(props){
    const[invalidForm, setValidForm] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        breed: 'Mixed',
        age: '0'
    });

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddPuppy(formData);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return(
        <>
        <h1>NewPuppy</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Puppie's Name:</label>
                <input 
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Puppie's Breed</label>
                <input className="form-control"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Puppie's Age</label>
                <input 
                className="form-control"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit"
            className="btn"
            disabled={invalidForm}
            >
            ADD PUPPY
            </button>
        </form> 
        </>
        )  

}

export default AddPuppyPage;