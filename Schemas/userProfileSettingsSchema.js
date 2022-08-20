const userProfileSettingsSchema = {
    type: "object",
    properties: {
      firstName: {type: "string"},
      lastName: {type: "string"},
      phoneNumber: {type: "string", minLength:10, maxLength:10},
      bio: {type: "string"}
    },
    required: [],
    additionalProperties: false
  }
  module.exports = {userProfileSettingsSchema}