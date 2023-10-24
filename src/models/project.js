// src/models/project.js

import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
    startDate: Date,
    endDate: Date,
    team: Number,
    skillStacks: [{type: String, default: []}],
    assignedTasks: [String],
    repo: String,
    link: String,
},{
    collection: 'projects'
});

const Project = mongoose.model('Project', projectSchema);

export default Project;