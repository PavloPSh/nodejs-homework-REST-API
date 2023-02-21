const express = require('express');

const router = express.Router()

const ctrl = require('../../controllers/contacts');

const { validateBody } = require('../../middlewares');
const schema = require('../../schemas/contactSchemas')


router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', validateBody(schema.constactSchema), ctrl.add);

router.delete('/:id', ctrl.deleteByID);

router.put('/:id', validateBody(schema.constactSchema), ctrl.updateById);


module.exports = router;
