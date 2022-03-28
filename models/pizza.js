const { schema, model} = require('mongoose');
const pizzaSchema = new schema ({
  pizzaName: {
    type:String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Datenow
  },
  size: {
    type: String,
    default: 'Large',
  },
  toppings:[]
});


//create the pizza model using the Pizza Schema
const pizza = model('Pizza', pizzaSchema);

//export the Pizza model
module.exports = pizza;