import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    
    const data = useSelector(state => state.diets)
    
    const [form, setForm] = useState({
        name:'',
        summary:'',
        healthScore:'',
        steps:'',
        image:'',
        diets: []
    })
    
    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])



    // const [errors, setErrors] = useState({
    //     name:'',
    //     summary:'',
    //     healthScore:'',
    //     steps:'',
    //     image:'',
    //     diets:''
    // })

    const changeHandler = (event) => {
        const property =  event.target.name;
        const value = event.target.value;
        
         setForm( {
            ...form,
            [property]: value
        })
        
    }
    
    const checkHandler = (event) => {
        if (event.target.checked) {
            setForm({
                ...form,
                diets: [...form.diets, event.target.value]
            })
        } 
        else {
            const filteredDiets = form.diets.filter(elem => elem !== event.target.value )
            setForm({
                ...form,
                diets: filteredDiets
            })
        }
    }
    // const validate = (form) => {
        // }
        console.log(form)

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(postRecipe(form));
        alert(`Your recipe ${form.name} has been created!`);
        setForm({
        name:'',
        summary:'',
        healthScore:'',
        steps:'',
        image:'',
        diets: []
        });
        navigate('/home');
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type='text' name='name' value={form.name} onChange={changeHandler}/>
            </div>
            <div>
                <label htmlFor="summary">Summary: </label>
                <input type='text' name='summary'value={form.summary} onChange={changeHandler}/>
            </div>
            <div>
                <label htmlFor="healthScore">Health Score: </label>
                <input type='number' name='healthScore'value={form.healthScore} onChange={changeHandler}/>
            </div>
            <div>
                <label htmlFor="steps">Steps: </label>
                <textarea name='steps' value={form.steps} onChange={changeHandler}> </textarea>
            </div>
            <div>
                <label htmlFor="image">Image: </label>
                <input type='text' name='image'value={form.image} onChange={changeHandler}/>
            </div>
            <div>
                {data.map((diet) => {
                    return (
                        <label key={diet.id}>
                            <input type='checkbox' name='diets' value={diet.name} onChange={checkHandler}/>
                            {diet.name}
                        </label>
                    )
                })
                
                }
            </div>
            
            <button>Create Recipe</button>
        </form>
    )
};

export default Form;


