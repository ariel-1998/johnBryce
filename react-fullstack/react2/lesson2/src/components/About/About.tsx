import './About.css';

function About() {
    let img = 'https://previews.123rf.com/images/ismagilov/ismagilov1805/ismagilov180500019/100753487-broken-bitcoin-a-falling-red-graph-against-a-blurred-blue-background-concept-of-cryptocurrency-bubbl.jpg'
    return (
      <div className='aboutMe'>
        <h3>ABOUT ME</h3>
        <div>
            <p>my name is ariel <br />
            I am 23 yo studing fullstack <br />
            development at the moment <br/>
            and im also working every day
            </p>
        </div>
        { new Date().getMinutes() % 2 === 0 &&  <img src={img} alt="me" />}
      </div>
    );
  }

export default About;