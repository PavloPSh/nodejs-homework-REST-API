
const Contact = require('../models/contact');

const { HttpError, ctrlWrapper } = require('../helpers/index');



const getAll = async (req, res) => {
    const result = await Contact.find();
    res.status(200).json(result);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findById(id);
        if (!result) {
            throw HttpError(404, 'Not found');
        }
    res.status(200).json(result)
};

const add = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
};

const deleteByID = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndDelete(id);
        if (!result) {
            throw HttpError(404, 'Not found')
        }
    res.status(200).json({
        message: 'Contact deleted'
    });
};

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
        if (!result) {
            throw HttpError(404, 'Not Found')
        }
    res.status(200).json(result);
};

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
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
    updateFavorite: ctrlWrapper(updateFavorite),
};