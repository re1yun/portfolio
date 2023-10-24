// src/api/index.js: beginning of the API
import express from 'express';
import path from 'path';
const __dirname = path.resolve();
import Project from '../models/project.js';
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'home'
    });
});

router.get('/about', (req, res) => {
    res.render('index.ejs', {
        title: 'about'
    });
});

router.get('/contact', (req, res) => {
    res.render('index.ejs', {
        title: 'contact'
    });
});

router.get('/projects', (req, res) => {
    res.render('index.ejs', {
        title: 'projects'
    });
});

router.get('/projects/project/:pname', async (req, res) => {
    const project = await Project.findOne({name: req.params.pname});
    console.log(req.params.pname);
    res.render('index.ejs', {
        title: 'project',
        project_title: project.name,
        img: project.img,
        description: project.description,
        duration: project.endDate - project.startDate,
        team: project.team,
        assignedTasks: project.assignedTasks,
        repo: project.repo,
        link: project.link,
    });
});

router.get('/download/:root', (req, res) => {
    const file = `${__dirname}/src/public/${req.params.root}.pdf`;
    res.download(file); // Set disposition and send it.
});

export default router;