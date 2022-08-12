

const userRegisterScehma = {
  type: "object",
  properties: {
    firstName: {type: "string"},
    lastName: {type: "string"},
    phoneNumber: {type: "string", minLength:10, maxLength:10},
    email: {type: "string"},
    password: {type: "string", minLength:3, maxLength: 10},
    confirmPassword: {type: "string", minLength:3, maxLength: 10},
  },
  required: ["firstName","lastName","phoneNumber","email","password","confirmPassword"],
  additionalProperties: false
}

module.exports ={ userRegisterScehma}