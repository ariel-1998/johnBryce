import './Finished.css';
import { useDispatch, useSelector } from 'react-redux';
import { addValue } from '../App/counterSlice';

function App() {
  const { value } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch()

  return (
    <div>
      <div>
      <button>+</button>
      {value}
      </div>
      <div>
      <button onClick={() => dispatch(addValue(3))}>+3</button>
      <span>{value}</span>
      </div>
    </div>
  );
}

export default App;
