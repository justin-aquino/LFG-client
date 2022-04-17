import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About({ currentGame, setCurrentGame }) {
  return (
    <>
    {/* start flex container */}
    <div className='dashboard-container-det'>
    <div className='header-on-dark'><h1>Meet the devs</h1></div>
    <div className='dev-container'>      
        <article>
          <div className='img-dev'>
            <img src="#" alt="Jamel" />
          </div>
          <div>
            <h3>Jamel Scott Fadel</h3>
            <a href="https://github.com/Jamelscott" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/jamelfadel/" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
            <p>
              My passion for technical work and readiness for open discussion
              has given me the ability to promptly switch between an independent
              and collaborative mindset. As an authentic leader, I feel
              compelled to cultivate trust and reliability in my professional
              relationships. I use my desire for challenge, passion for
              technology and technical experience to shape the digital future.
            </p>
          </div>  
        </article>

        <article>
          <div className='img-dev'>
            <img src="#" alt="Jon" />
          </div>          
          <div>
            <h3>Jon Dimaculangan</h3>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
              odio tempor orci dapibus ultrices in iaculis. Lectus urna duis
              convallis convallis. Ultrices gravida dictum fusce ut placerat
              orci nulla pellentesque.
            </p>
          </div>
        </article>
        
        
        <article>
          <div className='img-dev'>
            <img src="https://preeminent-cobbler-237db0.netlify.app/jaquino.png" alt="Justin" />
          </div>          
          <div>
            <h3>Justin Aquino</h3>
            <a href="https://github.com/justin-aquino" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/justinaquino-dev/" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
            <p>
            I am a proactive and dedicated individual with a background in restaurant management, desiring to utilize full-stack development skills. My tenacity for learning and creating led me to pursue a career in tech with hopes of transferring my creativity in making menus and recipes over to creating something inclusive, that may help with the collective advancement of human technology.{' '}
            </p>
          </div>
        </article>
        <article>
          <div className='img-dev'>
            <img src="https://i.imgur.com/glk2gta.jpg" alt="Norman" />
          </div>
          <div>
            <h3>Norman Teodoro</h3>
            <a href="https://github.com/foosasugaome" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/normanteodoro/" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
            <p>
            I have worked in the fields of tech, insurance, manufacturing, and education, having held different roles like support, systems administration, and development. I am always looking for ways to maximize my potential by learning from my experiences and giving back to the community.
            </p>
          </div>
        </article>      
    </div>
    </div>
    {/* end flex container */}    
    </>
  );
}
