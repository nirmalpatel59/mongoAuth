let mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let studentSchema = new Schema({
    email: { type: String, required: true },
    password: String,
    phone_no: { type: String, required: true }
});
studentSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
}, 'Email field is invalid');
let studentModal = mongoose.model('students', studentSchema);
module.exports = studentModal;