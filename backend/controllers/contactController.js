// @desc Get all contacts
// @route GET /api/contacts
// @access public

export const getAllContacts = (req, res) => {
    res.status(200).json({ message: `Get all contacts` })
}


// @desc Get contact with id
// @route GET /api/contacts/id
// @access public

export const getContactWithID = (req, res) => {
    res.status(200).json({ message: `Get contact with id ${req.params.id}` })
}


// @desc Create new contact
// @route POST /api/contacts
// @access public

export const createNewContact = (req, res) => {
    const { name, email, phone, designation } = req.body
    
    if (!name || !email || !phone || !designation) {
        res.status(400)
        throw new Error('All fields are required')
    }

    res.status(201).json({ message: `Create new contact` })
}


// @desc Edit contact with ID
// @route PUT /api/contacts/id
// @access public

export const editContactWithID = (req, res) => {
    res.status(200).json({ message: `Updated contact with id ${req.params.id}` })
}


// @desc Delete contact with ID
// @route DELETE /api/contacts/id
// @access public

export const deleteContactWithID = (req, res) => {
    res.status(200).json({ message: `Deleted contact with id ${req.params.id}` })
}