const Joi = require('joi'); 

const userSchema = Joi.object().keys({ 
    first_name: Joi.string().required().min(4),
    last_name: Joi.string().min(3), 
    email: Joi.string().email(), 
    username:Joi.string().required().min(4),
    password:Joi.string().required().min(4)
});

module.exports.createUser = (req) => {
    const { body } = req;
    const result = userSchema.validate(body)
    return result
}

module.exports.updateUser = (req) => {
    const { body } = req;
    const userUpdateSchema = Joi.object().keys({ 
      find_username:Joi.string().required().min(4),
      first_name: Joi.string().required().min(4),
      last_name: Joi.string().min(4), 
      email: Joi.string().email(), 
      username:Joi.string().required().min(4),
      password:Joi.string().required().min(4)
    
    });
    const result = userUpdateSchema.validate(body)
    return result
}

module.exports.findAndDeleteUser = (req) => {
    const { body } = req;
    const userFindSchema = Joi.object().keys({ 
        username:Joi.string().required().min(4),
    });
    const result = userFindSchema.validate(body)
    return result
}