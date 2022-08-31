const searchSchema = {
    type: "object",
    properties: {
        typesPet: {type: "string"},
        namePet: {type: "string"},
        minHheightPet: {type: "string"},
        maxHeightPet: {type: "string"},
        colorsPet: {type: "string"},
      
      breedsPet: {type: "string"}
    },
    required: [],
    additionalProperties: false
  }
  
  module.exports = {searchSchema}