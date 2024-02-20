import { useEffect } from 'react';
import './Title.css';

function Title() {
    useEffect(() => {
        document.title = "Shoes"
    },[])

  return (
    null
    );
}

export default Title;