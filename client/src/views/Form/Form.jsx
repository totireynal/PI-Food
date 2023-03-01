import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../redux/actions";
import { useNavigate} from 'react-router-dom';
import  validate  from './validate.js';
import style from './Form.module.css'

const Form = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch]);

    const data = useSelector(state => state.diets);

    const handlerClick = () => {
        navigate('/home');
    }
    
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
    <div className={style.bigContainer}>
        <div className={style.container}>
            <h2>Create your Recipe</h2>

            <form onSubmit={submitHandler}>
                <div className={style.recipeInformation}>

                    <div className={style.input}>
                        <label htmlFor="name">Name: </label>
                        <input type='text' name='name' placeholder='Enter the name of your recipe' value={form.name} onChange={changeHandler}/>
                        <span className={style.errors}>{errors.name && <p>{errors.name}</p>}</span>
                    </div>
                    <div className={style.input}>
                        <label htmlFor="summary">Summary: </label>
                        <input type='text' name='summary' placeholder='Enter the summary of your recipe' value={form.summary} onChange={changeHandler}/>
                        <span className={style.errors}>{errors.summary && <p>{errors.summary}</p>}</span>
                    </div>
                    <div className={style.input}>
                        <label htmlFor="healthScore">Health Score: </label>
                        <input type='number' name='healthScore' placeholder='Enter the health score of your recipe'value={form.healthScore} onChange={changeHandler}/>
                        <span className={style.errors}>{errors.healthScore && <p>{errors.healthScore}</p>}</span>
                    </div>
                    <div className={style.input}>
                        <label htmlFor="image">Image: </label>
                        <input type='text' name='image' placeholder='Enter the url of your image'value={form.image} onChange={changeHandler}/>
                    </div>
                    <div className={style.input}>
                        <label htmlFor="steps">Steps: </label>
                        <textarea name='steps' placeholder='Enter the steps for your recipe'value={form.steps} onChange={changeHandler}> </textarea>
                        <span className={style.errors}>{errors.steps && <p>{errors.steps}</p>}</span>
                    </div>
                   
                
                    <div className={style.title}><h4>Choose the diets of your recipe:</h4></div>
                    
                        </div>
                    
                    <div className={style.dietsContainer}>

                        {data.map((diet) => {
                            return (
                                <div key={diet.id} className={style.checkbox}>
                                    <label>
                                        <input type='checkbox' name='diets' value={diet.name} onChange={checkHandler}/>
                                        <span>{diet.name}</span>
                                    </label>
                                </div>
                            )   
                        })}
                    </div>               
                        <span className={style.dietserrors}>{errors.diets && <p>{errors.diets}</p>}</span>
                       
                <div className={style.btnContainer}>
                    {(errors.name || errors.summary || errors.healthScore || errors.steps || errors.diets) 
                    ?  <button className={style.btnCreateDisabled} disabled>Create Recipe</button>
                    :  <button className={style.btnCreate}>Create Recipe</button>
                    }
                 
                </div>
            </form>
                <button className={style.btnBack} onClick={handlerClick}>Back</button>
        </div>
    </div>
    )
};

export default Form;


