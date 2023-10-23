// src/models/project.js

import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    repository: String,
    startDate: Date,
    endDate: Date,
    team: [String],
    tasks: [{
        name: String,
        description: String,
        startDate: Date,
        endDate: Date,
        status: String,
        assignee: String
    }]
});