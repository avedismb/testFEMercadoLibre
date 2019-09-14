import express = require('express');
import { getItems } from './controller/itemsController'

const router = express.Router()

// Items
router.route('/items').get((req, res) => getItems(req,res))

export default router