const errorMessages = {
        duplicate: "Another entry with this month and week already exists",
        required: "A required field is missing"
}

const getErrorMessages = () => {
    return errorMessages;
}

const getMonths = () => {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
}

const getWeeks = () => {
    return [1,2,3,4,5]
}

export { getMonths, getWeeks, getErrorMessages }