import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRsvps } from "../context/RsvpContext";
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const RsvpForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { createRsvp, getRsvp, updateRsvp } = useRsvps();
  const navigate = useNavigate();
  const params = useParams();
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [codigoBeca, setCodigoBeca] = useState('');

  // Becas válidas
  const becasValidas = ['BECA666', 'BECA123', 'BECA789'];

  useEffect(() => {
    async function loadRsvp() {
      if (params.id) {
        const rsvp = await getRsvp(params.id);
        setValue('title', rsvp.title);
        setValue('description', rsvp.description);
        setValue('reservacion', rsvp.reservacion);
        setOpcionSeleccionada(rsvp.reservacion);
        setCodigoBeca(rsvp.beca || '');
      }
    }
    loadRsvp();
  }, [params.id, getRsvp, setValue]);

  const onSubmit = async (data) => {
    // Validacion 1
    if (data.reservacion === 'Beca' && !becasValidas.includes(data.beca)) {
      alert('El código de beca es incorrecto.'); // mejorar
      return;
    }

    const rsvpData = {
      ...data,
      date: dayjs.utc(data.date).format(),
    };

    if (params.id) {
      await updateRsvp(params.id, rsvpData);
    } else {
      await createRsvp(rsvpData);
    }
    navigate('/rsvps');
  };

  const handleOptionChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <>
      <h1 className="text-2xl text-center">Completar reservación</h1>
      <div className='flex flex-col md:flex-row justify-start sm:justify-center items-start min-h-screen p-1 sm:p-8'>
        <div className="bg-white max-w-md w-full p-10 rounded-md">
          <h1 className="text-2xl text-gray-700 font-bold text-center mb-4">Método de pago</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <select
                {...register('reservacion')}
                value={opcionSeleccionada}
                onChange={handleOptionChange}
                className="text-black w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="Pago en sitio">Pago en sitio</option>
                <option value="Beca">Beca</option>
              </select>
            </div>

            {opcionSeleccionada === 'Beca' && (
              <div className="mt-4">
                <label className="text-black block text-center text-lg mb-2">
                  Ingresa tu código de beca:
                </label>
                <input
                  type="text"
                  placeholder="Nombre de la beca"
                  {...register('beca')}
                  className="w-full bg-gray-200 text-black px-4 py-2 rounded-md my-2"
                />
                {errors.beca && (
                  <p className="text-red-500 text-sm mt-2">{errors.beca.message}</p>
                )}
              </div>
            )}

            <button className="w-full py-2 mt-3 mb-10 bg-green-600 text-white font-semibold rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
              Reservar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RsvpForm;
