import linuxIcon from "../images/linux.svg";
import jQueryIcon from "../images/jquery.svg";
import javaIcon from "../images/java.svg";
import PostmanIcon from "../images/postman.svg";
import stMatthewsIcon from "../images/stMatthewsLogo.jpg"
import KarunyaLogo from "../images/KarunyaLogo.jpg"
import AmazonLogo from "../images/amazonlogo.jpg"
import EclinicalWorksLogo from "../images/eclinicalworks.jpg"
import hpLogo from "../images/hplogo.jpg"
import ecsGlobalLogo from "../images/ecsgloballogo.jpg"

export const Bio = {
  name: "Vinay Ahari",
  roles: [
    "Devops Engineer",
    "Developer",
    "Linux Troubleshooter",
    "Designer & Debugger",
  ],
  description:
    "My enduring fascination with the dynamic evolution of technology propelled me to embark on a career in computer science and engineering. I earned my BTech in Computer Science and Engineering, cultivating a deep understanding of the field. This educational journey inspired me to further expand my expertise, prompting me to pursue a Masters in Computer Science and Engineering with a specialization in Cloud Computing.    Throughout my academic and professional pursuits, I have honed a versatile skill set and gained proficiency in various programming languages, including Java and Python. Additionally, I have delved into the realm of web development, mastering technologies such as HTML, CSS, JavaScript, Bootstrap, jQuery, and PHP.This comprehensive knowledge base positions me to contribute effectively to the ever- evolving landscape of technology.",
  github: "https://github.com/vinayhr5",
  resume:
    "https://drive.google.com/file/d/1vFM6nskPk0Rkz4LaOZ9KAqgXbo34qyWX/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/vinayahari",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Linux",
        image: linuxIcon,
      },
      {
        name: "jQuery",
        image: jQueryIcon,
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "Java",
        image: javaIcon,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image: PostmanIcon,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ecsGlobalLogo,
    role: "DevOps Support Engineer",
    company: "ECS Global India Pvt. Ltd, Vadodara",
    date: "Oct 2022 - Present",
    desc: "As a Design Lead at ECS Global Inc in the Retail Industry, I specialize in creating and designing labels for clients. Additionally, I contribute to various support tasks, working extensively with Enterprise Communications Tools Suite. Over the year here, I've gained expertise in Linux, AWS, Docker, Jquery, Java, and JavaScript. My responsibilities include setting up AWS environments, configuring serverless environments with ECS and ECR, monitoring logs, and developing automation scripts using Python and Lambda. I also play a crucial role in debugging issues using Spring Tools Suite.",
    skills: [
      "Docker",
      "Postgresql",
      "AWS",
      "Apache",
      "JavaScript",
      "Java",
      "Linux",
      "Python",
    ],
  },
  {
    id: 1,
    img: AmazonLogo,
    role: "Process Associate",
    company: "Amazon Development Centre (India) Pvt. Ltd, Bengaluru",
    date: "September 2021 - October 2022",
    desc: "Responsible for Forward and Reverse mapping in the IN Softlines team, auditing Item Found and Item Not Found mappings, contributing to the experimental Meesho IN project, and sharing mapping guidelines and skills with team members.",
    skills: [
      "Operations",
      "Item Analysis Tool",
      "Experience with Microsoft Office products and applications",
    ],
  },
  {
    id: 2,
    img: EclinicalWorksLogo,
    role: "Performance Support Engineer",
    company: "eClinicalWorks, Ahmedabad",
    date: "June 2023 - July 2023",
    desc: "As a Performance Support Engineer, I handled responsibilities such as troubleshooting issues for US clients via remote connection, identifying slowness and freezing problems in SAAS applications, resolving network issues using network tools, analyzing JSPs and HTTPS traffic with Fiddler, utilizing New Relic for JVM out-of-memory and transaction analysis, examining Java Thread dumps, and analyzing Tomcat logs for slower JSPs, exceptions, errors, and out-of-memory issues, as well as scrutinizing SQL queries impacting application performance.",
    skills: [
      "JSP",
      "Tomcat Log Analysis",
      "Fiddler",
      "New Relic",
      "Chrome Network Debugging",
      "Network Monitoring Tools",
      "SQL",
    ],
  },
  {
    id: 3,
    img: hpLogo,
    role: "Technical Support Engineer ",
    company: "HP, Bengaluru",
    date: "May 2020 - Nov 2020",
    desc: "My responsibilities involve managing inbound/outbound calls and emails, handling escalation calls, ensuring faster First Call Resolution, identifying and addressing software/hardware issues for clients. I utilize client-engaging communication skills, work with CRM and HP tools for efficient issue resolution, and share troubleshooting knowledge with colleagues for quicker problem-solving.",
    skills: [
      "Customer Relationship Management (CRM)",
      "Computer Hardware Troubleshooting",
      "Network Troubleshooting",
      "Remote Troubleshooting",
      "Computer Software Troubleshooting",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: KarunyaLogo,
    school: "Karunya Institute of Technology and Sciences, Coimbatore",
    date: "2019 - Advanced Specialization: Cloud Computing",
    grade: "7.52 CGPA",
    desc: "Publish Survey research paper on IEEE on Task Scheduling using Intelligent Water Drops Algorithm in Cloud Computing. [IEEE Link](https://ieeexplore.ieee.org/document/8862777)",
    degree: "Masters of Technology - MTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: KarunyaLogo,
    school: "Karunya University, Coimbatore",
    date: "2017",
    grade: "6.85 CGPA",
    desc: "Projects: Built Android Based Business Card Reader Application, Designed and Developed Websites using HTML, CSS, Bootstrap and JQuery.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 2,
    img: stMatthewsIcon,
    school: "St. Matthew's Mission School, Udaipur",
    date: "2012 - Physics, Chemistry, Maths",
    grade: "65.40%",
    desc: "",
    degree: "CBSE(XII)",
  },
  {
    id: 3,
    img: stMatthewsIcon,
    school: "St. Matthew's Mission School, Udaipur",
    date: "2009 - Physics, Chemistry, Maths",
    grade: "60.80%",
    desc: "",
    degree: "CBSE(X)",
  },
];


