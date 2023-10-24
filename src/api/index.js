// src/api/index.js: beginning of the API
import express from 'express';
import path from 'path';
import Project from '../models/project.js';
import moment from 'moment';
const __dirname = path.resolve();
var router = express.Router();
const area = ['frontEnd', 'backEnd', 'dataBase', 'cloud', 'deploy', 'os', 'ide', 'tools', 'language'];
const areaName = ['Front End', 'Back End', 'Database', 'Cloud', 'Deployment', 'OS', 'IDE', 'Tools', 'Language'];
const myDictionary = {
    'JAVA': "https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white",
    'CPP': "https://img.shields.io/badge/c++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    'PYTHON': "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    'JAVASCRIPT': "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    'EXPRESSJS': "https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white",
    'NODEJS': "https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white",
    'HTML': "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    'CSS': "https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    'MYSQL': "https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    'MONGODB': "https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
    'FIREBASE': "https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",
    'AWS': "https://img.shields.io/badge/amazon_aws-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
    'AWSEC2': "https://img.shields.io/badge/aws_ec2-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white",
    'GIT': "https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white",
    'GITHUB': "https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white",
    'VSCODE': "https://img.shields.io/badge/visual_studio_code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white",
    'MACOS': "https://img.shields.io/badge/macos-000000?style=for-the-badge&logo=apple&logoColor=white",
    'WINDOW': "https://img.shields.io/badge/windows-0078D6?style=for-the-badge&logo=windows&logoColor=white",
    'LINUX': "https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
    'UBUNTU': "https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
    'INTELLIJ': "https://img.shields.io/badge/intellij_idea-000000?style=for-the-badge&logo=intellij-idea&logoColor=white",
    'ECLIPSE': "https://img.shields.io/badge/eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white",
    'VSTUDIO': "https://img.shields.io/badge/visual_studio-5C2D91?style=for-the-badge&logo=visual-studio&logoColor=white",
    'PYCHARM': "https://img.shields.io/badge/pycharm-000000?style=for-the-badge&logo=pycharm&logoColor=white",
    'ANDRIOD': "https://img.shields.io/badge/android-3DDC84?style=for-the-badge&logo=android&logoColor=white",
    'WEBOS': "https://img.shields.io/badge/webos-00A4DE?style=for-the-badge&logo=webos&logoColor=white",
    'KOTLIN': "https://img.shields.io/badge/kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white",
    'XML': "https://img.shields.io/badge/xml-000000?style=for-the-badge&logo=xml&logoColor=white",
    'ANS': "https://img.shields.io/badge/android_studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white",
    'IMAGEKITIO': "https://img.shields.io/badge/imagekit.io-FFB000?style=for-the-badge&logo=imagekit&logoColor=white",
    'CLOUDTYPE': "https://img.shields.io/badge/cloudtype-60D2FF?style=for-the-badge&logo=cloudinary&logoColor=white",
};

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
    console.log(project.skillStacks);
    var skillStacks = [];
    for(var key in area){
        var temp = [];
        console.log("looking for: " + area[key]);
        for(var j in project.skillStacks[area[key]]){
            console.log("looking for: " + project.skillStacks[area[key]][j]);
            if(myDictionary[project.skillStacks[area[key]][j]]){
                console.log("found: " + project.skillStacks[area[key]][j]);
                temp.push(myDictionary[project.skillStacks[area[key]][j]]);
            }
            else{
                console.log("not found: " + project.skillStacks[area[key]][j]);
                continue;
            }
        }
        if(temp.length){
            skillStacks.push([areaName[key], temp]);
        }
    }
    console.log(skillStacks);

    res.render('index.ejs', {
        title: 'project',
        project_title: project.name,
        img: project.img,
        description: project.description,
        endDate: project.endDate,
        startDate: project.startDate,
        skillStacks: skillStacks,
        team: project.team,
        assignedTasks: project.assignedTasks,
        repo: project.repo,
        link: project.link,
        moment
    });
});

router.get('/download/:root', (req, res) => {
    const file = `${__dirname}/src/public/${req.params.root}.pdf`;
    res.download(file); // Set disposition and send it.
});

export default router;