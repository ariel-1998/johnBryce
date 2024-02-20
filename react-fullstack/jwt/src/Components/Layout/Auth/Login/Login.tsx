import { useForm } from 'react-hook-form';
import './Login.css';

function Login() {
    const {register} = useForm()
  return (
    <div className='login'>
        <form>
            <input type="text" placeholder='user name' {...register("username")} />
            <input type="password" placeholder='password' {...register("password")} />
        </form>
    </div>
  );
}

export default Login;