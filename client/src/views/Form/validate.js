const validate = (form) => {

let errors = {};

if (!form.name) {
    errors.name = 'Please write a name.'
};

if (form.name.length > 255) {
    errors.name = `The name of the recipe can't exceed 255 characters.`
};

if (!form.summary) {
    errors.summary = 'Please write a summary.'
};

if (!form.healthScore) {
    errors.healthScore = "Please enter a number."
};

if (form.healthScore < 0 || form.healthScore > 100) {
    errors.healthScore = "Health Score must be a number between 0 and 100."
};

if (!/^\d+$/.test(form.healthScore)) {
    errors.healthScore = 'Health Score must be a number between 0 and 100.'
};

if (!form.steps) {
    errors.steps = 'Please enter the steps.'
};

if(form.diets.length === 0) {
    errors.diets = 'Please choose at least one diet.'
};

return errors;

}


export default validate;