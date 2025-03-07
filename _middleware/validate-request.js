module.exports = validateRequest;

function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // Include all errors
        allowUnknown: true, // Ignore unknown props
        stripUnknown: true // Strip unknown props
    };

    const { error, value } = schema.validate(req.body, options);
    
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join('. ')}`);
    } else {
        req.body = value;
        next();
    }
}
