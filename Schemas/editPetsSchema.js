const editPetsSchema = {
    type: "object",
    properties: {
      namePet: {type: "string"},
      heightPet: {type: "string"},
      weightPet: {type: "string"},
      bioPet: {type: "string"},
      dietaryPet: {type: "string"},
      hypoallergenicPet: {type: "string"},
      colorsPet: {type: "string"},
      breedsPet: {type: "string"},
      userId: {type: "integer"}
    },
    required: ["colorsPet","breedsPet"],
    additionalProperties: false
  }
  
  module.exports = {editPetsSchema}