const searchOperationsSchema = {
    type: "object",
    properties: {
        Date: {type: "string"},
        User: {type: "string"},
        Pet: {type: "string"},
        StatusTurnedTo: {type: "string"},
        OperationID: {type: "string"},
    },
    required: [],
    additionalProperties: false
  }
  
  module.exports = {searchOperationsSchema}