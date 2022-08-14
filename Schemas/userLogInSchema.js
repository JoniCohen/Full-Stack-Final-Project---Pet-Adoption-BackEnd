const userLoginSchema = {
    type: "object",
    properties: {
      email: {type: "string"},
      password: {type: "string", minLength:3, maxLength: 10},
    },
    required: ["email","password"],
    additionalProperties: false
  }
  
  module.exports ={userLoginSchema}