import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm();
  const { signin, errors: signinErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(()=>{
    if (isAuthenticated) navigate("/rsvps");
  }, [isAuthenticated]);

  return (
    <>
    <div className='flex flex-col md:flex-row justify-start sm:justify-center items-start min-h-screen p-1 sm:p-8'>
      <div className='bg-white max-w-md w-full p-10 rounded-md'>
      {
        signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))
      }
        <h1 className='text-2xl text-gray-700 font-bold text-center'>Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>

          <input type="email" {...register('correo', { required: true })}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md my-2"
            placeholder="Correo"
          />
          {errors.correo && (<p className="text-red-500" >Correo requerido</p>)}

          <input type="password" {...register('password', { required: true })}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (<p className="text-red-500" >Contraseña requerida</p>)}

          <button type="submit" className="w-full py-2 mt-3 mb-10 bg-blue-600 text-white font-semibold rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">Entrar</button>

        </form>
        <p className=" flex gap-x-2 justify-between text-gray-500 text-center">
          ¿No te has registrado aún? <Link to="/register"
          className="text-sky-500 underline" > Registrame</Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default LoginPage
