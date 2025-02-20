import constants from "../constants.js"

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    let errorTitle = ''

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            errorTitle = 'Field Validation Error'
            break
        case constants.NOT_FOUND:
            errorTitle = 'Not Found'
            break
        case constants.UNAUTHORIZED:
            errorTitle = 'Unauthorized'
            break
        case constants.FORBIDDEN:
            errorTitle = 'Forbidden'
            break
        case constants.INTERNAL_SERVER_ERROR:
            errorTitle = 'Internal Server Error'
            break
        default:
            errorTitle = 'Something went wrong'
            break
    }

    res.status(statusCode).json({ title: errorTitle, message: err.message, stackTrace: err.stack })
}

export default errorHandler