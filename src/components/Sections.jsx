import React, { useState } from 'react';
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
    <section id={id} className="section-container">
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <SectionWrapper id="home">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh' }}>
          <div>
          <h1 style={{ marginBottom: '1rem' }}>
            Hi, I'm <span className="accent-text gradient-text">Yograj Patil</span>
          </h1>
          </div>
        
          <div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)' }}>
            Software Developer
          </h2>
          </div>
        
          <p style={{ maxWidth: '600px', marginBottom: '2rem' }}>
          Passionate about building software that solves business problems and uncovering hidden data stories.
          </p>
        
          <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/yograj7" target="_blank" rel="noreferrer" className="glass-panel icon-button">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yograj-patil-375418262/" target="_blank" rel="noreferrer" className="glass-panel icon-button">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/_mr_yograj_patil_/" target="_blank" rel="noreferrer" className="glass-panel icon-button">
            <FaInstagram size={24} />
          </a>
          </div>
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
               <span key={index} className="glass-panel skill-pill">
                 {skill}
               </span>
             ))}
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>10+</div>
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
            <a key={index} href={cert.link} target="_blank" rel="noreferrer" className="glass-panel cert-link">
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
      link: 'https://chatting-beige-mu.vercel.app/',
      image: '/src/assets/project1.png'
    },
    {
      title: 'Weather App',
      type: 'Individual Project',
      desc: "Created a real-time weather forecasting web application that displays temperature, humidity, wind speed, and weather conditions for any city using live API data. Responsive interface with dynamic backgrounds.",
      link: 'https://yograj7.github.io/weather_app/',
      image: '/src/assets/project2.png'
    },
    {
      title: 'Smart Attendance Tracker',
      type: 'Team Project',
      desc: "Automated attendance system using face recognition with live location tracking for authentic logging.",
      link: 'https://yograjpatil.tech',
      image: '/src/assets/project3.png'
    }
  ];

  return (
    <SectionWrapper id="projects">
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="gradient-text">Featured Projects</h2>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-panel project-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>{project.type}</span>
              <h3 style={{ color: 'white', marginTop: '0.5rem', fontSize: '1.4rem' }}>{project.title}</h3>
            </div>
            {project.image && <img src={project.image} alt={`${project.title} screenshot`} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} />}
            <p style={{ flex: 1, fontSize: '0.95rem', marginBottom: '2rem' }}>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-cta">
              View Project →
            </a>
          </div>
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
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formState;
    if (!email || !message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    // Simple mailto fallback (no backend)
    const subject = encodeURIComponent(`Portfolio message from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name || ''} <${email}>`);
    window.location.href = `mailto:yograjpatil929@gmail.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <SectionWrapper id="contact">
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="gradient-text">Get In Touch</h2>
      </div>

      <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>
          I am currently looking for new opportunities. Send a short message and I'll try my best to get back to you!
        </p>

        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'grid', gap: '0.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <input name="name" value={formState.name} onChange={handleChange} placeholder="Your name" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-primary)' }} />
            <input name="email" value={formState.email} onChange={handleChange} placeholder="Your email*" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-primary)' }} />
          </div>
          <textarea name="message" value={formState.message} onChange={handleChange} placeholder="Message*" required rows={6} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-primary)' }} />
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <button type="submit" style={{ padding: '0.75rem 1.5rem', background: 'var(--accent-color)', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>{status === 'sending' ? 'Sending…' : 'Send Message'}</button>
            <a href="mailto:yograjpatil929@gmail.com" style={{ padding: '0.75rem 1.5rem', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', borderRadius: '8px', textDecoration: 'none' }}>Or email directly</a>
          </div>
          {status === 'error' && <div style={{ color: '#ffb4b4' }}>Please provide an email and message.</div>}
          {status === 'sent' && <div style={{ color: '#b4ffb4' }}>Message composer opened — thank you!</div>}
        </form>
      </div>

      <div style={{ marginTop: '5rem', textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ fontSize: '0.9rem' }}>
          Designed & Built by Yograj Patil © {new Date().getFullYear()} | All rights reserved
        </p>
      </div>
    </SectionWrapper>
  );
};
