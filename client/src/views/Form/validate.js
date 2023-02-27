const validate = (form) => {

let errors = {};

if (!form.name) {
    errors.name = 'A name is required. Please write a name for your recipe.'
};

if (form.name.length > 255) {
    errors.name = `The name of the recipe can't exceed 255 characters.`
};

if (!form.summary) {
    errors.summary = 'A summary of the recipe must be provided. Please write a summary of your recipe.'
};

if (!form.healthScore) {
    errors.healthScore = "A healthScore is required. Please enter a number for your recipe."
};

if (form.healthScore < 0 || form.healthScore > 100) {
    errors.healthScore = "Please enter a valid healthScore. It must be a number between 0 and 100."
};

if (!/^\d+$/.test(form.healthScore)) {
    errors.healthScore = 'HealthScore must be a number.'
};

if (!form.steps) {
    errors.steps = 'Steps are required. Please enter the steps for your recipe.'
};

if(form.diets.length === 0) {
    errors.diets = 'Please choose at least one diet for your recipe'
};

return errors;

}


export default validate;