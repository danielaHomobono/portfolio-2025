import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Technologies = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section id="technologies" ref={ref}>
      <h2>Tecnologías</h2>
      <div className="technologies-grid">
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fab fa-react" aria-hidden="true"></i>
          <h3>React</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fab fa-js-square" aria-hidden="true"></i>
          <h3>JavaScript</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fab fa-node-js" aria-hidden="true"></i>
          <h3>Node.js</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fas fa-database" aria-hidden="true"></i>
          <h3>MongoDB</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fas fa-database" aria-hidden="true"></i>
          <h3>MySQL</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fas fa-database" aria-hidden="true"></i>
          <h3>SQLite</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fab fa-react" aria-hidden="true"></i>
          <h3>React Three Fiber</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fab fa-android" aria-hidden="true"></i>
          <h3>Kotlin</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fab fa-python" aria-hidden="true"></i>
          <h3>Python</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fab fa-microsoft" aria-hidden="true"></i>
          <h3>C#</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fab fa-aws" aria-hidden="true"></i>
          <h3>AWS</h3>
        </div>
        <div className={`tech-card ${isVisible ? 'animate' : ''}`}>
          <i className="fas fa-server" aria-hidden="true"></i>
          <h3>Express.js</h3>
        </div>
      </div>
    </section>
  );
};

export default Technologies;