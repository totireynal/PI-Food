import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";

const Form = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    const data = useSelector(state => state.diets)

    const [form, setForm] = useState({
        name:'',
        summary:'',
        healthScore:'',
        steps:'',
        image:'',
        diets:[]
    })

    const [select, setSelect] = useState([]);

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
        const checked = event.target.checked; 

       setForm({
        ...form,
        [property]: value,
        diets: select

       })

       if(checked) {
        setSelect([...select, value])
       } 
       else {
        setSelect([select.filter(diet=> diet !== value)])
       }

       console.log(select)
    }
    // const validate = (form) => {
    // }

    const submitHandler = (event) => {
        event.preventDefault();
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
                <input type='text' name='steps'value={form.steps} onChange={changeHandler}/>
            </div>
            <div>
                <label htmlFor="image">Image: </label>
                <input type='text' name='image'value={form.image} onChange={changeHandler}/>
            </div>
            <div>
                {data.map((diet, index) => {
                    return (
                        <label key={index}>
                            <input type='checkbox' value={diet.name} onChange={changeHandler}/>
                            {diet.name}
                        </label>
                    )
                })
                
                }
            </div>
            
            <button> SUBMIT </button>
        </form>
    )
};

export default Form;




// {
    /* <div>
                <label htmlFor="diets">Choose diets: </label>
                <br/>
                <input type='checkbox' name='diets' value='vegetarian' onChange={changeHandler}/> Vegetarian
                <br/>
                <input type='checkbox' name='diets' value='gluten free' onChange={changeHandler}/> Gluten free
                <br/>
                <input type='checkbox' name='diets' value='dairy free' onChange={changeHandler}/> Dairy free
                <br/>
                <input type='checkbox' name='diets' value='lacto ovo vegetarian' onChange={changeHandler}/> Lacto Ovo vegetarian
                <br/>
                <input type='checkbox' name='diets' value='vegan' onChange={changeHandler}/> Vegan
                <br/>
                <input type='checkbox' name='diets' value='paleolithic' onChange={changeHandler}/> Paleolithic
                <br/>
                <input type='checkbox' name='diets' value='primal' onChange={changeHandler}/> Primal
                <br/>
                <input type='checkbox' name='diets' value='whole 30' onChange={changeHandler}/> Whole 30
                <br/>
                <input type='checkbox' name='diets' value='pescatarian' onChange={changeHandler}/> Pescatarian
                <br/>
                <input type='checkbox' name='diets' value='ketogenic' onChange={changeHandler}/> Ketogenic
                <br/>
                <input type='checkbox' name='diets' value='fodmap friendly' onChange={changeHandler}/> Fodmap friendly
                <br/>
            </div> */
        // }