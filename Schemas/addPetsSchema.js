const addPetsSchema = {
    type: "object",
    properties: {
      namePet: {type: "string"},
      imagePet: {type: "string"},
      heightPet: {type: "string"},
      weightPet: {type: "string"},
      bioPet: {type: "string"},
      dietaryPet: {type: "string"},
      hypoallergenicPet: {type: "string"},
      colorsPet: {type: "string"},
      typesPet: {type: "string"},
      breedsPet: {type: "string"}
    },
    required: ["namePet","imagePet","heightPet","weightPet","bioPet","dietaryPet","hypoallergenicPet","colorsPet","typesPet","breedsPet"],
    additionalProperties: false
  }
  
  module.exports = {addPetsSchema}