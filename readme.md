# Project Name
Portfolio Project

## requirement
node v18.18.2

## Installation
git clone https://github.com/re1yun/portfolio.git
npm run install
npm run start

## Usage

Describe how to use your project.

## Contributing

Explain how others can contribute to your project.

## License

Include information about the license for your project.

## Todo
- Apply Bulma CSS
- Set background using particlesjs
- Set Router on Nodejs
- Apply code splitting on html files -> adopt ejs
- Set Navbar
    - make navbar transparent
    - write JS function for navbar burgers to work
    - make 'resume' button to download resume file
- Create about page
    - Insert Picture
    - Type general 'about' info
    - change design
- Create projects page
    - Create folder(?) for each project
    - have own page for each proejct
    - get data from database
    - have images and available resources on web
- Create contact page
    - add link to github & linkedin profile
    - add personal mail address
    - if available, create form for contact
- Connect to mongodb
    - collection: projects
        - project:
            - name: string
            - thumbnail: image
            - description: string
            - startDate: date
            - endDate: date
            - team: int
            - skillStacks: [string]
            - assigned tasks: string
            - repo: url
            - link: url