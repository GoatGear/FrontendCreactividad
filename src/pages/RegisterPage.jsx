import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/add-rsvp")
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  })

  return (
    <div className='flex flex-col md:flex-row justify-start sm:justify-center items-start min-h-screen p-1 sm:p-8'>
      <div className="bg-white max-w-md w-full p-10 rounded-md">
        {
          registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white my-2" key={i}>
              {error}
            </div>
          ))
        } 
        <h1 className='text-2xl font-bold mb-4 text-center text-gray-700'>Registra tus datos</h1>
        <form onSubmit={onSubmit}>

          <input type="text" {...register('nombre', { required: true })}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md my-2"
            placeholder="Nombre"
          />
          {errors.nombre && (<p className="text-red-500">Nombre de usuario requerido</p>)}

          <input type="text" {...register('apellido', { required: true })}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md my-2"
            placeholder="Apellido"
          />
          {errors.apellido && (<p className="text-red-500">Apellido de usuario requerido</p>)}

          <select {...register('profesion', { required: true })}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md my-2">
            <option value="">Título</option>
            <option value="Dr.">Dr.</option>
            <option value="Dra.">Dra.</option>
            <option value="Mtro.">Mtro.</option>
            <option value="Enf.">Enf.</option>
            <option value="Lic">Lic.</option>
            <option value="Lic">Ing.</option>
            <option value="">Otro</option>
            {/* Agrega más opciones según sea necesario */}
           
          </select>
          {errors.profesion && (<p className="text-red-500">Profesión requerida</p>)}

          <select {...register('especialidad', { required: true })}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md my-2">
            <option value="">Selecciona una especialidad</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Oncología">Oncología</option>
            <option value="Neurocirugía">Neurocirugía</option>
            <option value="Traumatología">Traumatología</option>
            <option value="Pediatria">Pediatria</option>s
            <option value="Dermatología">Dermatología</option>
            <option value="Ginecología y Obtetricia">Ginecología y Obtetricia</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
          {errors.especialidad && (<p className="text-red-500">Especialidad requerida</p>)}

          <input type="email" {...register('correo', { required: true })}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md my-2"
            placeholder="Correo"
          />
          {errors.correo && (<p className="text-red-500">Correo requerido</p>)}

          <input type="password" {...register('password', { required: true })}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (<p className="text-red-500">Contraseña requerida</p>)}
          
          <button type="submit" className="w-full py-2 mt-3 mb-10 bg-blue-600 text-white font-semibold rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">Registrarme</button>
        </form>
        <p className="flex gap-x-2 justify-between text-gray-500 text-center">
          ¿Ya tienes una cuenta? {" "}<Link to="/login" className="text-sky-600 underline">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage;
