import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const SectionWrapper = ({ id, children }) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container"
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  );
};

export const Home = () => {
  return (
    <SectionWrapper id="home">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh' }}>
        <motion.div custom={1} variants={fadeIn}>
          <h1 style={{ marginBottom: '1rem' }}>
            Hi, I'm <span className="accent-text gradient-text">Yograj Patil</span>
          </h1>
        </motion.div>
        
        <motion.div custom={2} variants={fadeIn}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)' }}>
            Software Developer
          </h2>
        </motion.div>
        
        <motion.p custom={3} variants={fadeIn} style={{ maxWidth: '600px', marginBottom: '2rem' }}>
          Passionate about building software that solves business problems and uncovering hidden data stories.
        </motion.p>
        
        <motion.div custom={4} variants={fadeIn} style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/yograj7" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yograj-patil-375418262/" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#0077b5'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/_mr_yograj_patil_/" target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#E1306C'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
            <FaInstagram size={24} />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export const About = () => {
  return (
    <SectionWrapper id="about">
      <motion.div custom={1} variants={fadeIn} style={{ marginBottom: '3rem' }}>
        <h2 className="gradient-text">About Me</h2>
      </motion.div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <motion.div custom={2} variants={fadeIn} className="glass-panel" style={{ padding: '2rem' }}>
          <p style={{ marginBottom: '1.5rem', color: 'white' }}>
            To obtain an entry-level position in software development where I can apply my programming skills in C, C++, Java and SQL while continuously learning and contributing to organizational growth.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><strong>Profile:</strong> Developer</li>
            <li><strong>Education:</strong> Bachelor of Engineering (MGI-COET Shegaon)</li>
            <li><strong>Language:</strong> English, Hindi & Marathi</li>
            <li><strong>Hobbies:</strong> Watching movies and listening to songs</li>
          </ul>
        </motion.div>

        <motion.div custom={3} variants={fadeIn} className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Skills & Tools</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
             {['C', 'C++', 'Java', 'SQL', 'MS Word', 'MS Excel', 'PowerPoint', 'Power BI'].map((skill, index) => (
               <span key={index} className="glass-panel" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderRadius: '20px', border: '1px solid var(--accent-color)' }}>
                 {skill}
               </span>
             ))}
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>0+</div>
            <div style={{ color: 'var(--text-secondary)' }}>Projects<br/>Completed</div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

// ... Rest of the sections will be implemented next

export const Resume = () => {
  return (
    <SectionWrapper id="resume">
      <motion.div custom={1} variants={fadeIn} style={{ marginBottom: '3rem' }}>
        <h2 className="gradient-text">Resume & Certifications</h2>
      </motion.div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', flexWrap: 'wrap' }}>
        <motion.div custom={2} variants={fadeIn} className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaDownload color="var(--accent-color)" /> Download Resume
          </h3>
          <p style={{ marginBottom: '2rem' }}>
            To obtain an entry-level position in software development where I can apply my programming skills in C, C++, and SQL while continuously learning and contributing to organizational growth.
          </p>
          <a href="https://drive.google.com/file/d/14kbf7hmTKDdvXgWDkyI0Ke4TbHBERGom/view" target="_blank" rel="noreferrer" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'var(--accent-color)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            View Full Resume
          </a>
        </motion.div>

        <motion.div custom={3} variants={fadeIn} className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Education</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li style={{ borderLeft: '2px solid var(--accent-color)', paddingLeft: '1rem' }}>
              <h4 style={{ color: 'white', fontSize: '1.1rem' }}>Bachelor of Engineering</h4>
              <p style={{ fontSize: '0.9rem' }}>Sant Gadge Baba Amaravati University Amravati</p>
            </li>
            <li style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '1rem' }}>
              <h4 style={{ color: 'white', fontSize: '1.1rem' }}>Higher Secondary School</h4>
              <p style={{ fontSize: '0.9rem' }}>Sant Gadge Baba Amaravati University Amravati</p>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div custom={4} variants={fadeIn} style={{ marginTop: '3rem' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Certifications</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
           {[
             { name: 'Microsoft 1', link: 'https://drive.google.com/file/d/1CtYqwvWgIT6sErcxRGO0izee6A_oPexf/view' },
             { name: 'Microsoft 2', link: 'https://drive.google.com/file/d/1B-0ezU_GmN-gWfqIQlT1Xq3238dvYxWe/view' },
             { name: 'AICTE-Eduskill', link: 'https://drive.google.com/file/d/129QKuTyuTyGMRuQ0GSRqgRr6l3ZUHnsu/view' },
             { name: 'NPTEL', link: 'https://drive.google.com/file/d/1DPA8NyQhLvQUaNJIcE4kO9CzFplIwNbB/view' }
           ].map((cert, index) => (
             <a key={index} href={cert.link} target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.75rem 1.5rem', textDecoration: 'none', color: 'var(--text-secondary)', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onMouseOver={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }} onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
               {cert.name}
             </a>
           ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: 'ChatGPT Clone Assistant-UI',
      type: 'Individual Project',
      desc: "Developed a ChatGPT-like conversational AI web application that delivers realtime responses using OpenAI's API. Designed a responsive and minimal UI with secure API handling and deployed it on Vercel.",
      link: 'https://chatting-beige-mu.vercel.app/'
    },
    {
      title: 'Weather App',
      type: 'Individual Project',
      desc: "Created a real-time weather forecasting web application that displays temperature, humidity, wind speed, and weather conditions for any city using live API data. Responsive interface with dynamic backgrounds.",
      link: 'https://yograj7.github.io/weather_app/'
    },
    {
      title: 'Smart Attendance Tracker',
      type: 'Team Project',
      desc: "Automated attendance system using face recognition with live location tracking for authentic logging.",
      link: 'https://yograjpatil.tech'
    }
  ];

  return (
    <SectionWrapper id="projects">
      <motion.div custom={1} variants={fadeIn} style={{ marginBottom: '3rem' }}>
        <h2 className="gradient-text">Featured Projects</h2>
      </motion.div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <motion.div key={index} custom={index + 2} variants={fadeIn} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>{project.type}</span>
              <h3 style={{ color: 'white', marginTop: '0.5rem', fontSize: '1.4rem' }}>{project.title}</h3>
            </div>
            <p style={{ flex: 1, fontSize: '0.95rem', marginBottom: '2rem' }}>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer" style={{ alignSelf: 'flex-start', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--accent-color)', paddingBottom: '2px', fontWeight: '500', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
      
      <motion.div custom={5} variants={fadeIn} style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="https://github.com/yograj7" target="_blank" rel="noreferrer" className="glass-panel" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', color: 'white', textDecoration: 'none', borderRadius: '30px', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'var(--glass-bg)'; }}>
          <FaGithub size={20} /> More projects on Github
        </a>
      </motion.div>
    </SectionWrapper>
  );
};

export const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <motion.div custom={1} variants={fadeIn} style={{ marginBottom: '3rem' }}>
        <h2 className="gradient-text">Get In Touch</h2>
      </motion.div>
      
      <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <motion.p custom={2} variants={fadeIn} style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'white' }}>
          I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', width: '100%', gap: '2rem', marginBottom: '3rem' }}>
          <motion.div custom={3} variants={fadeIn} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--accent-color)' }}>
              <FaEnvelope size={24} />
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Email</h4>
              <a href="mailto:yograjpatil929@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>yograjpatil929@gmail.com</a>
            </div>
          </motion.div>
          
          <motion.div custom={4} variants={fadeIn} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--accent-color)' }}>
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Location</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Shegaon, Maharashtra</p>
            </div>
          </motion.div>

          <motion.div custom={5} variants={fadeIn} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--accent-color)' }}>
              <FaLinkedin size={24} />
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Social</h4>
              <a href="https://www.linkedin.com/in/yograj-patil-375418262/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>LinkedIn Profile</a>
            </div>
          </motion.div>
        </div>

        <motion.a custom={6} variants={fadeIn} href="mailto:yograjpatil929@gmail.com" style={{ display: 'inline-block', padding: '1rem 3rem', background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
          Say Hello
        </motion.a>
      </div>
      
      <div style={{ marginTop: '5rem', textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ fontSize: '0.9rem' }}>
          Designed & Built by Yograj Patil © {new Date().getFullYear()} | All rights reserved
        </p>
      </div>
    </SectionWrapper>
  );
};
