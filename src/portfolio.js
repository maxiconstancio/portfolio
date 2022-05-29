const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://maxiconstancio.netlify.app',
  title: 'NodeJS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Maxi Constancio',
  role: 'Desarrollador Back End',
  description:
    'En Nodejs JR. Con conocimientos en BD relacionales y BD no-relacionales. En constante aprendizaje.',
  resume: 'https://drive.google.com/file/d/13bdQMdDaFKFFJdqzyQmNzKz1zRiRCNqA/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/maxiconstancio',
    github: 'https://github.com/maxiconstancio',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Apple Store React',
    description:
      'Apple Store desarrollada en React para Proyecto Final de Diplomatura en Academia Numen',
    stack: ['React', 'javascript', 'Tailwind', 'Axios', 'Swiper' ],
    sourceCode: 'https://github.com/maxiconstancio/reactnumen',
    livePreview: 'https://applestorenumen.netlify.app/',
  },
  {
    name: 'Alkemy ONG',
    description:
      'Simulación de un proyecto en un ambiente laboral, con un equipo de trabajo organizado mediante la Metodología SCRUM. ',
    stack: ['Node', 'Express', 'mySQL, JWT, AWS, Bcrypt, Sequelize', 'Mocha', 'Chai', 'Postman'],
    sourceCode: 'https://github.com/maxiconstancio/AlkemyNode',
    livePreview: 'https://documenter.getpostman.com/view/18268919/UyrGCExf',
  },
  {
    name: 'BackEnd Apple Store',
    description:
      'CRUD para el backend de aplicación de Apple Store, proyecto de Diplomatura en Full Stack de Academia Numen',
    stack: ['Node', 'javascript', 'Express', 'MongoDB', 'mongoose'],
    sourceCode: 'https://github.com/Apicarrito',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  
  'JavaScript',
  'Nodejs',
  'Express',
  'MongoDB',
  'mySql',
  'API REST',
  'JWT',
  'Passport',
  'Bcrypt',
  'Mocha',
  'Chai',
  'HTML',
  'CSS', 
  'React',
  'Tailwind',
  'Boostrap',
  'Axios',
  'Swiper',
  'Postman',
  'Git',
  'SCRUM',
  'JIRA',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'maxiconstancioh@gmail.com',
}

export { header, about, projects, skills, contact }
