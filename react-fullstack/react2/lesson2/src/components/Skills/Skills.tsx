import './Skills.css';

function Skills() {
  let skills = [`HTML`, `CSS`, `javaScript`, `Bootstrap`, `jQuery`, `React`];
  let key = 0

    return (
      <div className='skills'>
        <h3>I have learned the following technologhies:</h3>
        <ul>
          { skills.map(skill => <li key={skill}>{ skill }</li>) }
        </ul>
      </div>
    );
  }

export default Skills;