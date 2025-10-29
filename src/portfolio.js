/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Umesh Garg",
  title: "Hi, I'm Umesh Garg 👋",
  subTitle: emoji(
    "Backend Developer | SaaS Integrations | API Architect | POS & Automation Systems | Tech Enthusiast 🚀 | Prompt expert | Fast Learner"
  ),
  resumeLink:
    "https://docs.google.com/document/d/13pUC0r3QJmh-7re9lh_BkHIO4P6DozJWOFjI9iwgNdk/export?format=pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Joker9050",
  linkedin: "https://www.linkedin.com/in/umeshgarg9050hee/",
  gmail: "gargumesh463@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Backend Developer with expertise in SaaS Integration, POS Systems, and Automation — building optimized, scalable systems that handle real-time data with efficiency.",
  skills: [
    "⚙️ Design and develop RESTful APIs with clean architecture, security, and scalability.",
    "🔗 Integrate large-scale SaaS platforms like Octorate Channel Manager and smart lock systems (Omnitec, Nuki).",
    "💾 Expert in SQL and MySQL — designing normalized schemas, writing optimized queries, and managing high-traffic databases.",
    "🧩 Create automation tools for debugging, data sync, and recurring server tasks (cron jobs).",
    "🏪 Build full POS systems including billing, Udahri (balance management), item tracking, and reporting.",
    "🕒 Implement cron jobs, webhook listeners, and task schedulers for automated operations.",
    "📊 Optimize database queries and backend performance to handle thousands of live data transactions daily.",
    "🤝 Collaborate closely with senior developers and DevOps for production-grade deployment and performance tuning.",
    "🚀 Continuously enhance system reliability, reduce server memory usage, and improve load handling efficiency.",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Webhooks",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "Cron Jobs",
      fontAwesomeClassname: "fas fa-clock"
    },
    {
      skillName: "Automation",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "VS Code",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "OOPs",
      fontAwesomeClassname: "fas fa-object-group"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// areas of interest
const techInterests = {
  title: "Areas of Interest 💡",
  subTitle:
    "Exploring new technologies and improving backend performance through modern architectures.",
  items: [
    "SaaS System Architecture & Multi-Tenant Design",
    "IoT & Smart Devices Integration (Lock Systems, Sensors)",
    "Microservices and Event-driven Architecture",
    "AI-based System Optimization",
    "Serverless & Cloud-Native Applications",
  ],
  display: true,
};
// Education Section

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section
  schools: [
    {
      schoolName: "J.C. Bose University of Science and Technology, YMCA (Faridabad)",
      logo: require("./assets/images/ymcalogo.png"),
      subHeader: "Bachelor of Technology (B.Tech) in Computer Engineering",
      duration: "August 2019 - June 2023",
      desc: "Graduated with strong technical foundation and hands-on experience in backend and full-stack development.",
      descBullets: [
        "⚡ Studied core subjects like Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks.",
        "⚡ Built academic projects using Java, PHP, MySQL, and Spring Boot.",
        "⚡ Participated in hackathons and coding challenges, focusing on scalable software solutions."
      ]
    },
    {
      schoolName: "KCM World School, Palwal",
      logo: require("./assets/images/kcmlogo.jpeg"),
      subHeader: "Senior Secondary (Class XII), Science Stream (PCM)",
      duration: "2018 - 2019",
      desc: "Developed interest in problem-solving and programming.",
      descBullets: [
        "⚡ Focused on Physics, Chemistry, and Mathematics.",
        "⚡ Started exploring coding fundamentals and web technologies."
      ]
    },
    {
      schoolName: "KCM PUBLIC SCHOOL, Palwal",
      logo: require("./assets/images/kcmlogo.jpeg"),
      subHeader: "Secondary (Class X)",
      duration: "2016 - 2017",
      desc: "Completed foundational education with strong academic performance.",
      descBullets: [
        "⚡ Active participation in technical and science fairs.",
        "⚡ Received merit recognition for academic excellence."
      ]
    }
  ]
};


const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "80%"
    },
    { 
      Stack: "Automation & Tools (Cron Jobs, Webhooks, Git)", 
      progressPercentage: "80%" 
    },
    {
      Stack: "Version Control & Deployment",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming & Methodologies",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "E2X Infotech Pvt. Ltd.",
      companylogo: require("./assets/images/e2xlogo.png"),
      date: "August 2024 – Present",
      desc: "Contributing to the backend development and automation of SaaS-based hotel and PMS management systems.",
      descBullets: [
        "⚙️ Developed and optimized REST API endpoints for Octorate PMS and Omnitec lock integration, automating password creation, updates, and synchronization.",
        "🤖 Created automation scripts using web scraping and APIs to handle guest document submissions to local authorities and automate city tax collection processes.",
        "💾 Designed and optimized MySQL schemas, stored procedures, and triggers to improve database performance and handle live hotel and booking data efficiently.",
        "🔁 Built cron-based background jobs for reservation sync, guest updates, and reporting automation.",
        "🚀 Improved system performance, fixed critical bugs, and ensured API reliability across live data environments.",
        "📊 Developed tools for debugging and monitoring to assist support and developer teams in resolving recurring automation issues."
      ]
    },
    {
      role: "Backend Intern",
      company: "World Phone Internet Services Pvt. Ltd.",
      companylogo: require("./assets/images/worldphonelogo.png"),
      date: "May 2023 – November 2023",
      desc: "Worked on backend and API optimization for the Bandwidth Management System.",
      descBullets: [
        "⚡ Added new features to client portals and refined backend logic for speed and reliability.",
        "⚡ Collaborated with senior developers to debug, document, and refactor REST APIs.",
        "⚡ Improved API response time and reduced latency through caching and optimized SQL queries."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle:
    "Real-world SaaS systems and enterprise solutions built with focus on automation, scalability, and clean architecture.",
  projects: [
    {
      image: require("./assets/images/octoratelogo.png"),
      projectName: "Octorate PMS Automation",
      projectDesc:
        "Developed automation pipelines for the Octorate Property Management System (PMS) — integrating Omnitec smart locks, automating guest document submissions, and city tax collection through APIs and web scraping. Focused on backend efficiency, cron jobs, and scalable webhook integrations.",
      footerLink: [
        { name: "Visit Website", url: "https://www.octorate.com/" },
        // { name: "Tech Stack", url: "https://www.php.net" }
      ]
    },
    {
      image: require("./assets/images/worldphonelogo.png"),
      projectName: "WorldPhone – Enterprise Communication Platform",
      projectDesc:
        "Contributed to the CMS and EMS modules of WorldPhone — a global VoIP and business communication suite. Optimized backend APIs, enhanced data synchronization, and ensured high-performance server interactions for call and message management systems.",
      footerLink: [
        { name: "Visit Website", url: "https://www.worldphone.in/" }
      ]
    },
    // {
    //   image: require("./assets/images/posSystemLogo.png"),
    //   projectName: "POS & Udahri Management System (In Development)",
    //   projectDesc:
    //     "Building a modular Point of Sale system focused on billing, item tracking, and Udahri (customer balance) management. Designed for small businesses with offline-ready mode, real-time reports, and printer integration.",
    //   footerLink: [
    //     { name: "View Progress", url: "#" },
    //     { name: "GitHub Repo", url: "https://github.com/Joker9050" }
    //   ]
    // },
    {
      image: require("./assets/images/octoratelogo.png"),
      projectName: "Automation Utilities & Web Scraping Tools",
      projectDesc:
        "Created internal tools for process automation — including data extraction, debugging utilities, and smart API-based workflow scripts for Octorate internal systems. These tools reduced manual work and improved backend visibility for support teams.",
      footerLink: [
        { name: "GitHub Repo", url: "https://www.octorate.com/" }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Let’s Connect 🤝",
  subtitle:
    "I'm always open to discussing backend architecture, SaaS integrations, or new opportunities. Whether you want to collaborate, hire, or just exchange ideas — feel free to reach out!",
  number: "+91 9050818446",
  email_address: "gargumesh463@gmail.com",
  location: "Palwal, Haryana, India",
  availability: "Open to full-time roles, freelance backend projects & collaborations",
  display: true
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
