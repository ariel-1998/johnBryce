import './Boom.css'

interface BoomProps {
    number: number;
}

function Boom({ number }: BoomProps) {
    return(
        <p>{number.toString().includes(`7`) || number % 7 === 0 ? 'BOOM' : number}</p>
    )
}

export default Boom;