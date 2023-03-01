const getAll = require('./getAllContacts');
const getById = require('./getContactById');
const add = require('./addContact');
const deleteByID = require('./deleteContactById')
const updateById = require('./updateContactById')
const updateFavorite = require('./updateFavorite')


const { ctrlWrapper } = require('../../helpers');


module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    deleteByID: ctrlWrapper(deleteByID),
    updateById: ctrlWrapper(updateById),
    updateFavorite: ctrlWrapper(updateFavorite),
}