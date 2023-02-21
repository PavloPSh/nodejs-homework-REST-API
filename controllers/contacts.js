

const contactsOperations = require('../models/contacts');

const { HttpError, ctrlWrapper } = require('../helpers/index');



const getAll = async (req, res) => {
    const result = await contactsOperations.listContacts();
    res.status(200).json(result);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await contactsOperations.getContactById(id);
        if (!result) {
            throw HttpError(404, 'Not found');
        }
    res.status(200).json(result)
};

const add = async (req, res) => {
    const result = await contactsOperations.addContact(req.body);
    res.status(201).json(result);
};

const deleteByID = async (req, res) => {
    const { id } = req.params;
    const result = await contactsOperations.removeContact(id);
        if (!result) {
            throw HttpError(404, 'Not found')
        }
    res.status(200).json({
        message: 'Contact deleted'
    });
};

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await contactsOperations.updateContact(id, req.body);
        if (!result) {
            throw HttpError(404, 'Not Found')
        }
    res.status(200).json(result);
};

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    deleteByID: ctrlWrapper(deleteByID),
    updateById: ctrlWrapper(updateById),
};