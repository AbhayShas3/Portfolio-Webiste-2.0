import React, { useState, useEffect, useRef } from 'react';
import { BriefcaseIcon, AcademicCapIcon, BeakerIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon, DocumentTextIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import './index.css';
import project3Image from './Images/maxresdefault.jpg'
import project2Image from './Images/hnlhcy6ipoqegwblrnge.webp'
import project1Image from './Images/Sol.png'
import resumePDF from './Images/Resume.pdf'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiDocument } from 'react-icons/hi';
function Navbar() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-white">Abhay Shastry</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 my-8">
      <a href="mailto:abhay.s.shastry@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
        <MdEmail className="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/in/abhay-shastry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a href="https://github.com/abhayshas3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
        <FaGithub className="w-6 h-6" />
      </a>
      <a 
        href={resumePDF}
        download="Resume.pdf"
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
      >
        <HiDocument className="w-6 h-6" />
      </a>
    </div>
  );
}

function TypewriterEffect({ text, speed = 50 }) {  
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <span>{displayText}</span>;
}




function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, message });
    setIsSubmitted(true);
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white border-gray-600"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white border-gray-600"
          rows="4"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </div>
      {isSubmitted && (
        <p className="text-green-500 text-xs italic mt-2">Thank you for your message!</p>
      )}
    </form>
  );
}

function TimelineItem({ date, title, subtitle, icon: Icon, children, isLeft }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`mb-8 flex flex-col sm:flex-row w-full ${isLeft ? 'sm:flex-row-reverse' : ''}`}>
      <div className="hidden sm:flex items-center mb-4 sm:mb-0 sm:w-5/12 justify-end">
        {isLeft && (
          <div className="mr-4 text-right">
            <h3 className="font-bold text-white text-lg">{title}</h3>
            <p className="text-sm text-gray-400">{date}</p>
          </div>
        )}
        <div className="z-20 flex items-center justify-center bg-blue-500 shadow-xl w-10 h-10 rounded-full">
          <Icon className="h-6 w-6 text-white" />
        </div>
        {!isLeft && (
          <div className="ml-4">
            <h3 className="font-bold text-white text-lg">{title}</h3>
            <p className="text-sm text-gray-400">{date}</p>
          </div>
        )}
      </div>
      <div className={`bg-gray-800 rounded-lg shadow-lg px-6 py-4 sm:w-5/12 ${isLeft ? 'sm:mr-8' : 'sm:ml-8'} 
                      transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl`}>
        <div className="sm:hidden mb-2">
          <h3 className="font-bold text-white text-lg">{title}</h3>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex justify-between items-center w-full sm:hidden"
        >
          <span className="font-semibold text-white">{subtitle}</span>
          {isExpanded ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          )}
        </button>
        <div className={`${isExpanded ? 'block' : 'hidden'} sm:block mt-2`}>
          <h4 className="hidden sm:block mb-3 font-semibold text-gray-300">{subtitle}</h4>
          {children}
        </div>
      </div>
    </div>
  );
}


function Timeline({ children }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-600"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

function SkillCategory({ category, skills }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-3">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "GoLang", "Julia", "R", "Pony", "CUDA"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "Flask", "FastAPI","Paddle Paddle","Onnx","OpenCV","NLTK","React", "Node.js", "MapReduce", "Hadoop"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Postman" ]
    },
    {
      category: "Databases",
      skills: ["SQL", "MongoDB", "Redis", "Cassandra"]
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Ethereum Full Stack Website",
      description: "A Full Stack Commerical website template built with React and Solidity using EVM",
      imageUrl: project1Image, 
      link: "https://github.com/AbhayShas3/Ethereum_Ecomm_Website"
    },
    {
      id: 2,
      title: "Music Recommendation System",
      description: "Emotion based music recommendation system using Neural Networks",
      imageUrl: project2Image, 
      link: "https://github.com/MajorProjectGroup69/Music-Recommendation-System-using-Deep-Learning-for-Therapy"
    },
    {
      id: 3,
      title: "Yolo-v8 Inference API",
      description: "Dockerized API that can be used for inference any yolov8 detection,classification or segmentation onnx file",
      imageUrl: project3Image, 
      link: "https://github.com/AbhayShas3/yolov8_API"
    }
  ];


  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-16">
        {/* About section */}
        <section id="about" className="px-4 py-6 sm:px-0 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300">
            <TypewriterEffect text="I am a Master’s student in Computer and Information Sciences at the University of Florida with hands-on experience in machine learning, cloud platforms, and full-stack development. I've worked on high-impact projects for clients like AbinBev and Emirates Airlines. My expertise includes researching, developing, and deploying models, optimizing cloud infrastructures, and creating scalable APIs. I enjoy solving complex challenges and pushing the boundaries of technology." speed={10} /> 
            </p>
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
            <img src="https://via.placeholder.com/400x300" alt="Abhay Shastry" className="rounded-lg shadow-lg w-full" />
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="mt-10 px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-white mb-8">Education & Experience</h2>
          <Timeline>
            <TimelineItem
              date="August 2024 - Present"
              title="Master's in Computer and Information Sciences"
              subtitle="University of Florida"
              icon={AcademicCapIcon}
              isLeft={false}
            >
              <p className="text-sm mt-2 text-gray-300">Focusing on advanced topics in Computer Science</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
                <li> Distributed Systems, Advanced Math, Advanced Data Structures </li>
                <li>Herbert Wertheim Achievement Award Scholar</li>
                <li>Go Gators!</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              date="Sept 2022 - June 2024"
              title="Machine Learning Engineer"
              subtitle="Navan.ai"
              icon={BriefcaseIcon}
              isLeft={true}
            >
              <p className="text-sm mt-2 text-gray-300">Developed and deployed cutting-edge Computer Vision models</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
                <li>Researched, built and trained Computer Vision models</li>
                <li>Built inference APIs for optimized model deployment.</li>
                <li>Architected cloud infras on AWS & Azure for scalable solutions</li>
                <li>Led technical teams and coordinated with stakeholders</li>
                <li>Automated CI/CD pipelines</li>
                <li>Worked with internal teams and clients like AbinBev and Emirates</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              date="Jan 2022 - April 2022"
              title="Software Developer Intern"
              subtitle="Intel"
              icon={BriefcaseIcon}
              isLeft={false}
            >
              <p className="text-sm mt-2 text-gray-300">Worked as a Data Engineer</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
                <li>Developed ETL pipelines with Apache Airflow and SAP HANA</li>
                <li>Reduced ETL time by 43% with MapReduce</li>
                <li>Reduced production reporting errors by 30%</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              date="July 2021 - September 2021"
              title="Machine Learning Engineer Intern"
              subtitle="Saaragh"
              icon={BriefcaseIcon}
              isLeft={true}
            >
              <p className="text-sm mt-2 text-gray-300">Developed and deployed cutting-edge ML models</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
                <li>Built models for cancer detection, improving diagnostic accuracy</li>
                <li>Built APIs for model integration into company registry</li>
                <li>Developed warehouse management models for Konica Minolta</li>
              </ul>
            </TimelineItem>
            <TimelineItem
              date="Jan 2021 - Nov 2021 "
              title="Undergraduate Research Assistant"
              subtitle="Dayananda Sagar University"
              icon={AcademicCapIcon}
              isLeft={false}
            >
              <p className="text-sm mt-2 text-gray-300">Under Dr Girisha G.S, Director Of Computer Science Department</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
                <li>Experimented and developed a Bone Age analysis model</li>
                <li>Used depth-wise seperable convolution for better performance</li>
                <li>Engineered custom loss functions</li>
                <li><a
    href="https://ieeexplore.ieee.org/document/9633953"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 transition duration-300"
  >
    <span>Click here to view the paper</span>
    <svg
      className="w-5 h-5 ml-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </a>
</li>
              </ul>
            </TimelineItem>
            <TimelineItem
              date="Aug 2018 - Jul 2022 "
              title="Bachelor of Technology in Computer Science and Engineering"
              subtitle="Dayananda Sagar University"
              icon={AcademicCapIcon}
              isLeft={true}
            >
              <p className="text-sm mt-2 text-gray-300">Graduated with Distiction </p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
                <li>Societies : TEDxDSU, IEEE, CSI</li>
                <li>Extensive coursework ranging from Compiler Design to ML</li>
                <li>Dean's List</li>
              </ul>
            </TimelineItem>


            {/* Add more TimelineItems here */}
          </Timeline>
        </section>

        {/* Skills section */}
        <section id="skills" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((category, index) => (
                <SkillCategory key={index} category={category.category} skills={category.skills} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="mt-10 px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 overflow-hidden shadow-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out flex items-center"
                  >
                    View Project
                    <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              See More Projects
              <ArrowTopRightOnSquareIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* Contact Form section */}
        <section id="contact" className="mt-10 px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
          <ContactForm />
        </section>

        {/* Social Links section */}
        <section id="social" className="mt-10 px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-white mb-6">Connect with Me</h2>
          <SocialLinks />
        </section>
      </main>

      <footer className="bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">© 2024 Abhay Shreekant Shastry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;