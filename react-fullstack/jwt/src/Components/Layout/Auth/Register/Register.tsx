import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../../../App/authSlice';
import { NewUserModel } from '../../../../Models/NewUserModel';
import { authService } from '../../../../Services/AuthService';
import './Register.css';

function Register() {
    const {register, handleSubmit} = useForm<NewUserModel>();
    const dispatch = useDispatch();

    async function registerNewUser({ firstname, lastname, username, password}: NewUserModel){
      const token = await authService.register(firstname, lastname, username, password);
      dispatch(login(token));
    }

  return (
    <div className='register'>
        <form onSubmit={handleSubmit(registerNewUser)}>
            <input type="text" placeholder='first name' {...register("firstname")} />
            <input type="text" placeholder='last name' {...register("lastname")} />
            <input type="text" placeholder='user name' {...register("username")} />
            <input type="password" placeholder='password' {...register("password")} />
        </form>
    </div>
  );
}

export default Register;