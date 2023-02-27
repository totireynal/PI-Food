import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';
import  validate  from './validate.js';
import style from './Form.module.css'

const Form = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch]);

    const data = useSelector(state => state.diets)
    
    const [form, setForm] = useState({
        name:'',
        summary:'',
        healthScore:'',
        steps:'',
        image:'',
        diets: []
    })
    
    const [errors, setErrors] = useState({
        name:'',
        summary:'',
        healthScore:'',
        steps:'',
        image:'',
        diets: []
    })

    const changeHandler = (event) => {
        const property =  event.target.name;
        const value = event.target.value;
        
         setForm({
            ...form,
            [property]: value
        });

        setErrors(
            validate({
            ...form,
            [property] :value
        }))
        
    }
    
    const checkHandler = (event) => {
        if (event.target.checked) {
            setForm({
                ...form,
                diets: [...form.diets, event.target.value]
            })
            setErrors(
                validate({
                    ...form,
                    diets: [...form.diets, event.target.value]
            }))
        } 
        else {
            const filteredDiets = form.diets.filter(elem => elem !== event.target.value )
            setForm({
                ...form,
                diets: filteredDiets
            })

            setErrors(
                validate({
                    ...form,
                    diets: filteredDiets
            }))
        
        }   
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (errors.name || errors.summary || errors.healthScore || errors.steps || errors.diets) {
            alert('Please check your form and send it again')
        } else {
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
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type='text' name='name' value={form.name} onChange={changeHandler}/>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="summary">Summary: </label>
                <input type='text' name='summary'value={form.summary} onChange={changeHandler}/>
                {errors.summary && <p>{errors.summary}</p>}
            </div>
            <div>
                <label htmlFor="healthScore">Health Score: </label>
                <input type='number' name='healthScore'value={form.healthScore} onChange={changeHandler}/>
                {errors.healthScore && <p>{errors.healthScore}</p>}
            </div>
            <div>
                <label htmlFor="steps">Steps: </label>
                <textarea name='steps' value={form.steps} onChange={changeHandler}> </textarea>
                {errors.steps && <p>{errors.steps}</p>}
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
                {errors.diets && <p>{errors.diets}</p>}
            </div>
            
            <button>Create Recipe</button>
        </form>
    )
};

export default Form;


