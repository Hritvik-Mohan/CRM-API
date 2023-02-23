const asyncHandler = require("express-async-handler")
const Customer = require("../models/customerModel")
//@desc Get all customers
//@route GET /api/customers
//@access public
const getCustomers = asyncHandler (async (req, res) => {
    const customers = await Customer.find();
    res.status(200).json(customers);
});

//@desc Create New customer
//@route POST /api/customers
//@access public
const createCustomer = asyncHandler (async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, ceo, status, employees, turnover, year } = req.body;
    if (!name || !ceo || !status || !employees || !turnover || !year) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const customer = await Customer.create({
        name,
        ceo,
        status,
        employees,
        turnover,
        year
    })
    res.status(200).json(customer);
});

//@desc Get customer
//@route GET /api/customers/:id
//@access public
const getCustomer = asyncHandler (async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        res.status(404);
        throw new Error("Customer not found");
    }
    res.status(200).json(customer);
});

//@desc Update customer
//@route PUT /api/customers/:id
//@access public
const updateCustomer = asyncHandler (async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        res.status(404);
        throw new Error("Customer not found");
    }
    const updatedCustomer = await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedCustomer);
});

//@desc Delete customer
//@route DELETE /api/customers/:id
//@access public
const deleteCustomer = asyncHandler (async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        res.status(404);
        throw new Error("Customer not found");
    }
    await Customer.deleteOne({ _id: req.params.id });
    res.status(200).json(customer);
});

module.exports = {
    getCustomers,
    createCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer,
};