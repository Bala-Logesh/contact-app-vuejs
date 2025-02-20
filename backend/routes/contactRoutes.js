import express from 'express'
import * as cc from '../controllers/contactController.js'

const router = express.Router()

router.get('/', cc.getAllContacts)

router.get('/:id', cc.getContactWithID)

router.post('/', cc.createNewContact)

router.put('/:id', cc.editContactWithID)

router.delete('/:id', cc.deleteContactWithID)

export default router