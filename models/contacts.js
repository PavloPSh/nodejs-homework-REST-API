// const fs = require('fs/promises');
// const path = require('path');

// const { v4: uuidv4 } = require('uuid');

// const contactsPath = path.resolve('./models/contacts.json');



// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   const contacts = JSON.parse(data);
//   return contacts;
// }



// const getContactById = async (id) => {
//   const contacts = await listContacts();
//   const result = contacts.find(contact => contact.id === id);
//     if (!result) {
//         return null;
//     };
//   return result;
// }



// const addContact = async (body) => {

//   const contacts = await listContacts();
//   const newContacts = { ...body, id: uuidv4() };
//   contacts.push(newContacts);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return newContacts;

// };



// const removeContact = async (id) => {

//   const contacts = await listContacts();
//   const idx = contacts.findIndex(contact => contact.id === id);
//   if (idx === -1) {
//     return null;
//   }
//   const [result] = contacts.splice(idx, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return result;
// }



// const updateContact = async (id, body) => {

//   const contacts = await listContacts();
//   const idx = contacts.findIndex(contact => contact.id === id);
//   if (idx === -1) {
//     return null;
//   };
//   contacts[idx] = { id, ...body };
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return contacts[idx];
// }

// module.exports = {
  // listContacts,
  // getContactById,
  // removeContact,
  // addContact,
  // updateContact,
// }
