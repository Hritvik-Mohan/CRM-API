const asyncHandler = require("express-async-handler")

//@desc Get all customers
//@route GET /api/customers
//@access public
const getCustomers = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: "Get all customers"
    });
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
    res.status(200).json({
        message: "Create customer"
    });
});

//@desc Get customer
//@route GET /api/customers/:id
//@access public
const getCustomer = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Get customer for ${req.params.id}`
    });
});

//@desc Update customer
//@route PUT /api/customers/:id
//@access public
const updateCustomer = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Update customer for ${req.params.id}`
    });
});

//@desc Delete customer
//@route DELETE /api/customers/:id
//@access public
const deleteCustomer = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Delete customer for ${req.params.id}`
    });
});

module.exports = {
    getCustomers,
    createCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer,
};