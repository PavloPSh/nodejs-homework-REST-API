const express = require('express');

const router = express.Router()

const ctrl = require('../../controllers/conatacts')

const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { schema } = require('../../schemas');



router.get('/', authenticate, ctrl.getAll);

router.get('/:id', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateBody(schema.constactSchema), ctrl.add);

router.delete('/:id', authenticate, isValidId, ctrl.deleteByID);

router.put('/:id', authenticate, isValidId, validateBody(schema.constactSchema), ctrl.updateById);

router.patch('/:id/favorite', authenticate, isValidId, validateBody(schema.updateFavoriteSchema), ctrl.updateFavorite);



module.exports = router;
