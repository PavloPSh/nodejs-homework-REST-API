const express = require('express');
const Joi = require('joi');


const contactsOperations = require('../../models/contacts');

const HttpError = require('../../helpers')

const router = express.Router()

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get('/', async (req, res, next) => {
  try {
    const result = await contactsOperations.listContacts();
    res.status(200).json(result);
  } catch (error) {
      next(error);

  };
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsOperations.getContactById(id);
    if (!result) {
      throw HttpError(404, 'Not Found');
    }
    res.status(200).json(result)
  } catch (error) {
      next(error);
  };
})

router.post('/', async (req, res, next) => {
  try {

    const { error } = schema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    };
    const result = await contactsOperations.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
      next(error);
  }
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'Homework 2' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'Homework 2' })
})

module.exports = router
