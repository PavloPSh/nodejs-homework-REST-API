const express = require('express');

const router = express.Router()

const ctrl = require('../../controllers/contacts');

const { validateBody, isValidId } = require('../../middlewares');
const schema = require('../../schemas/contactSchemas');



router.get('/', ctrl.getAll);

router.get('/:id', isValidId, ctrl.getById);

router.post('/', validateBody(schema.constactSchema), ctrl.add);

router.delete('/:id', isValidId, ctrl.deleteByID);

router.put('/:id', isValidId, validateBody(schema.constactSchema), ctrl.updateById);

router.patch('/:id/favorite', isValidId, validateBody(schema.updateFavoriteSchema), ctrl.updateFavorite);



module.exports = router;
