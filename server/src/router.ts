import express = require('express');
import itemsController from './controller/itemsController'

const router = express.Router()

// Items
router.route('/items').get(itemsController.getItems)

export default router