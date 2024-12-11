const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    companyName: String,
    location: String,
    role: String,
    technicalWork: String,
});

const ProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    yearOfPassing: { type: Number, required: true },
    branch: { type: String, required: true },
    presentCompany: String,
    presentLocation: String,
    email: String,
    presentRole: String,
    presentTechnicalWork: String,
    pastCompanies: [CompanySchema],
});

module.exports = mongoose.model('Profile', ProfileSchema);
