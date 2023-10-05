export const validateUserLoginForm =(values) =>{
    const errors = {};
    
    if (!values.username){
            errors.username = 'Required';
        } else if ((values.username.length < 6) || (values.username.length > 15)) {
            errors.username = 'Username must be a minimum of 6 characters and a maxiumum of 15';
        }
        
        if (!values.password){
            errors.password = 'Required';
        } else if (values.password.length < 8){
            errors.password = 'Password must be at least 8 characters';
        }
        
    return errors;
;} 

//the code below will indicate separately the errors for username too short and too long if preferred
/*
    if (!values.username){
        errors.username = 'Required';
    } else if (values.username.length < 6) {
        errors.username = 'Username must me at least 6 characters';
    } else if (values.username.length > 15) {
        errors.username = 'Username must be a maximum of 15 characters';
    }
    
    if (!values.password){
        errors.password = 'Required';
    } else if (values.password.length < 8){
        errors.password = 'Password must be at least 8 characters';
    }
    
   return errors;
};*/