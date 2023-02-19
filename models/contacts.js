const fs = require('fs/promises');
const path = require('path');

// const { nanoid } = require('nanoid');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.resolve('./models/contacts.json');



const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === id);
    if (!result) {
        return null;
    };
  return result;
}

const addContact = async (body) => {

  const contacts = await listContacts();
  const newContacts = { ...body, id: uuidv4() };
  contacts.push(newContacts);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContacts;

};



const removeContact = async (id) => {}



const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
