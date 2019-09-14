import express = require('express');
import { getItems, getItem } from './controller/itemsController'

const router = express.Router()

// Items
router.route('/items').get((req, res) => getItems(req,res))
router.route('/items/:id').get((req, res) => getItem(req,res))

export default router