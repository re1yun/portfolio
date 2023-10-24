// src/models/project.js

import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    frontEnd: [String],
    backEnd: [String],
    dataBase: [String],
    deploy: [String],
    os: [String],
    ide: [String],
    tools: [String],
    language: [String],
});

const projectSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
    startDate: Date,
    endDate: Date,
    team: Number,
    skillStacks: skillSchema,
    assignedTasks: [String],
    repo: String,
    link: String,
},{
    collection: 'projects'
});

const Project = mongoose.model('Project', projectSchema);

export default Project;