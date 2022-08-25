const addPetsSchema = {
    type: "object",
    properties: {
      namePet: {type: "string"},
      imagePet: {type: "string"},
      heightPet: {type: "string"},
      weightPet: {type: "string"},
      bioPet: {type: "string"},
      dietaryPet: {type: "string"},
      hypoallergenicPet: {type: "boolean"},
      colorsPet: {type: "integer"},
      typesPet: {type: "integer"},
      breedsPet: {type: "integer"}
    },
    required: ["namePet","imagePet","heightPet","weightPet","bioPet","dietaryPet","hypoallergenicPet","colorsPet","typesPet","breedsPet"],
    additionalProperties: false
  }
  
  module.exports = {addPetsSchema}