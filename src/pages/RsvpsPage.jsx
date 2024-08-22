import { useEffect } from 'react';
import { useRsvps } from '../context/RsvpContext';
import RsvpCard from '../components/RsvpCard';
import { Link } from 'react-router-dom';

function RsvpsPage() {
  const { getRsvps, rsvps } = useRsvps();

  useEffect(() => {
    getRsvps();
  }, []);

  if (rsvps.length === 0) return (
    <>
      <div className='flex items-start justify-center min-h-screen'>
        <div className='text-center'>
          <h1 className='text-xl font-semibold mt-10'>
            No has completado tu reservación
          </h1>
          <Link to='/add-rsvp'><button className="p-8 mt-3 mb-10 bg-green-600 text-white font-semibold rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            Completar reservación
          </button></Link>
        </div>
      </div>
    </>
  );
  


  return (
    <div className='flex items-end'>
      <div className='container mx-auto px-4 py-8 min-h-screen'>
        <h1 className='text-2xl font-bold text-center mb-6'>Reservaciones</h1>
        <div className='flex flex-col gap-6'>
          {
            rsvps.map(rsvp => (
              <RsvpCard rsvp={rsvp} key={rsvp._id}></RsvpCard>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default RsvpsPage
