import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About({ currentGame, setCurrentGame }) {
  return (
    <div className='about-page'>
      <div className="about-main-title">
        <h1>Meet the devs</h1>
      </div>
      <main className="about-cards about-team-title">
        <article className="about-card">
          <img src="#" alt="Jamel" />
          <div className="text">
            <h3>Jamel Scott Fadel</h3>
            <p>
              My passion for technical work and readiness for open discussion
              has given me the ability to promptly switch between an independent
              and collaborative mindset. As an authentic leader, I feel
              compelled to cultivate trust and reliability in my professional
              relationships. I use my desire for challenge, passion for
              technology and technical experience to shape the digital future.
            </p>
            <a href="https://github.com/Jamelscott" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/jamelfadel/" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </article>
        <article className="about-card">
          <img src="#" alt="Jon" />
          <div className="text">
            <h3>Jon Dimaculangan</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
              odio tempor orci dapibus ultrices in iaculis. Lectus urna duis
              convallis convallis. Ultrices gravida dictum fusce ut placerat
              orci nulla pellentesque.
            </p>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </article>
        <article className="about-card">
          <img src="#" alt="Justin" />
          <div className="text">
            <h3>Justin Aquino</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
              odio tempor orci dapibus ultrices in iaculis. Lectus urna duis
              convallis convallis. Ultrices gravida dictum fusce ut placerat
              orci nulla pellentesque.{' '}
            </p>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </article>
        <article className="about-card">
          <img src="#" alt="Norman" />
          <div className="text">
            <h3>Norman Teodoro</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
              odio tempor orci dapibus ultrices in iaculis. Lectus urna duis
              convallis convallis. Ultrices gravida dictum fusce ut placerat
              orci nulla pellentesque.
            </p>
            <a href="https://www.google.com/search?q=norman+teodoro" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.google.com/search?q=norman+teodoro" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
