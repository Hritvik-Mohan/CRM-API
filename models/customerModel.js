const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the company's name"],
    },
    ceo: {
      type: String,
      required: [true, "Please add the name of the ceo"],
    },
    status: {
      type: String,
      required: [true, "Please add the status"],
    },
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