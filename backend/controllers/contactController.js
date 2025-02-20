import Contact from '../models/Contact.js'
import asyncHandler from 'express-async-handler'

// @desc Get all contacts
// @route GET /api/contacts
// @access public

export const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({})
    res.status(200).json(contacts)
})


// @desc Get contact with id
// @route GET /api/contacts/id
// @access public

export const getContactWithID = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(400)
        throw new Error(`Contact with id ${req.params.id} not found`)
    }

    res.status(200).json(contact)
})


// @desc Create new contact
// @route POST /api/contacts
// @access public

export const createNewContact = asyncHandler(async (req, res) => {
    const { name, email, phone, designation } = req.body

    if (!name || !email || !phone || !designation) {
        res.status(400)
        throw new Error('All fields are required')
    }

    const newContact = await Contact.create({
        name, email, phone, designation
    })

    res.status(201).json(newContact)
})


// @desc Edit contact with ID
// @route PUT /api/contacts/id
// @access public

export const editContactWithID = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(400)
        throw new Error(`Contact with id ${req.params.id} not found`)
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedContact)
})


// @desc Delete contact with ID
// @route DELETE /api/contacts/id
// @access public

export const deleteContactWithID = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(400)
        throw new Error(`Contact with id ${req.params.id} not found`)
    }

    await Contact.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: `Contact with id ${req.params.id} deleted` })
})