module.exports = {
  title: 'William Hayward',
  header: "Hi, I'm William Hayward",
  description: "I'm a software developer studying at UQ. I make web, mobile, and desktop applications.",
  name: 'William Hayward',
  footerTitle: 'Software Developer',
  email: 'HaywardWilliam1996@gmail.com',
  cta: {
    label: 'Get my resume',
    url: 'williamhaywardresume.pdf',
  },
  socials: [
    { icon: 'github-circled', url: 'https://github.com/WilliamHayward/' },
    { icon: 'mail-alt' }, // mail alt automatically links to mailto:email
    { icon: 'linkedin-squared', url: 'https://www.linkedin.com/in/williamhayward1996/' },
  ],
  projects: [
    {
      name: 'Lipwig',
      description: 'Lipwig is a message server built in Node.js using the socket.io framework. It is fully documented and has an official API for browser-based JavaScript and for Java.',
      tags: ['Node', 'Javascript', 'socketio', 'Websockets'],
      alt: 'Lipwig logo', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'lipwig.png',
      url: 'https://williamhayward.github.io/Lipwig/'
    },
    {
      name: 'Turrets',
      description: 'Turrets is a platform tower defense game built in LibGDX.',
      tags: ['Java', 'LibGDX'],
      img: 'turrets.png',
      url: 'https://github.com/WilliamHayward/Turrets'
    },
    {
      name: 'Coaster',
      description: 'Coaster was a group project for the DECO2800 course at UQ. There were roughly 60 people working on the project, divided into teams. My team was primarily responsible for procedural terrain generation. I was also in charge of open sourcing the project. <br/><br/>Coaster received the Paul Gampe Prize for "Best Open Source Project" in the 2016 UQ Innovation Showcase. Paul Gampe prize for best open source project.',
      tags: ['Java', 'Procedural'],
      img: 'coaster.png',
      url: 'https://github.com/UQdeco2800/coaster'
    }
  ],
  experiences: [
    {
      title: 'Head Teacher at Code Camp',
      timeline: 'April 2017 - Present',
      description: 'Teaching the next generation of coders and creators',
    },
    {
      title: 'Studying Software Design at UQ',
      timeline: 'June 2014 - Present',
      description: '<ul><li>Contributed to Paul Gampe Prize for "Best Open Source Project" winning project</li><li>Heavily involved in several club executives</li></ul>',
    },
    
  ],
  testimonials: [
    {
      quote: '',
      name: '',
      title: ''
    }
  ]
}
