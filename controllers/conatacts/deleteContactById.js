const { Contact } = require('../../models');
const { HttpError } = require('../../helpers');


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

module.exports = deleteByID;
