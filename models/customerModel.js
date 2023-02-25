const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the company's name"],
    }, 
    website: {
      type: String,
      required: [true, "Please add the company's website"]
    } ,
    ceo: {
      type: String,
      required: [true, "Please add the name of the ceo"],
    },
    // status: {
    //   type: String,
    //   required: [false, "Please add the status"],
    // },
    employees: {
      type: String,
      required: [true, "Please add the number employees"],
    },
    turnover: {
      type: String,
      required: [true, "Please add the company's turnover"],
    },
    year: {
      type: String,
      required: [true, "Please add the established year"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);