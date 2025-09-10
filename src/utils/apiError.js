// Create a custom error class named ApiError that extends the built-in Error class
class ApiError extends Error {
    // Constructor function takes statusCode, message, errors, and stack as arguments
    constructor(
        statusCode,                          // HTTP status code (e.g., 400, 404, 500)
        message = "Something went wrong",    // Default error message if none provided
        errors = [],                         // Extra details (e.g., validation errors)
        stack = ""                           // Custom stack trace (optional)
    ){
        super(message) // Call parent (Error) constructor with the message

        // Custom properties for ApiError
        this.statusCode = statusCode // Store the HTTP status code
        this.data = null             // Placeholder for additional data (always null here)
        this.message = message       // Store the error message
        this.success = false         // Indicates the API request failed
        this.errors = errors         // Store any extra error details

        // Handle stack trace
        if(stack) {
            this.stack = stack // If custom stack provided, use it
        } else {
            // Otherwise, capture the current stack trace automatically
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

// Export the ApiError class so it can be used in other files
export {ApiError}
