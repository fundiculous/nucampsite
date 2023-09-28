export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName){
        errors.firstName = 'Required';
    } else if (!/^[A-Za-z]+$/.test(values.firstName)) {
        errors.firstName = 'Must contain only letters';
    } else if (values.firstName.length < 2){
        errors.firstName = 'Must be at least 2 characters.'
    } else if (values.firstName.length > 15){
        errors.firstName = 'Must be 15 characters or less.';
    }

    if (!values.lastName){
        errors.lastName = 'Required';
   } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
        errors.lastName = 'Must contain only letters';
    } else if (values.lastName.length < 2){
        errors.lastName = 'Must be at least 2 characters.'
    } else if (values.lastName.length > 15){
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.'
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
};