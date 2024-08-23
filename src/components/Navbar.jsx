import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { HomeIcon, UserAddIcon, LogoutIcon, LoginIcon, CalendarIcon, MenuIcon, XIcon } from '@heroicons/react/solid'; // Importar íconos

const Navbar = () => {
    const { isAuthenticated, logout, user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 my-3 py-5 px-6 sm:px-10 rounded-lg flex flex-wrap items-center justify-between shadow-md'>
            {/* Contenedor del título alineado a la izquierda */}
            <div className="flex w-full sm:w-auto justify-between items-center">
                <div className="flex items-center">
                    <Link to={isAuthenticated ? "/rsvps" : "/"}>
                        <h1 className='text-2xl font-bold text-white'>ANCISSSTE</h1>
                    </Link>
                </div>

                {/* Botón de menú hamburguesa para pantallas pequeñas */}
                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? (
                            <XIcon className="h-6 w-6" />
                        ) : (
                            <MenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Menú de navegación */}
            <ul className={`flex-col sm:flex-row sm:flex gap-2 sm:gap-4 items-center w-full sm:w-auto mt-4 sm:mt-0 sm:justify-end ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
                {isAuthenticated ? (
                    <>
                        <li className='text-white text-xl'>Bienvenido {user?.profesion} {user?.nombre || ""}</li>
                        
                        <li>
                            <Link to='/add-rsvp' className='text-white flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded'>
                                <CalendarIcon className="h-5 w-5" />
                                Reservación
                            </Link>
                        </li>

                        <li>
                            <button onClick={logout} className='text-white flex items-center gap-2 bg-red-500 hover:bg-red-600 px-3 py-2 rounded'>
                                <LogoutIcon className="h-5 w-5" />
                                Cerrar Sesión
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login' className='text-white flex items-center gap-2 px-3 py-2 hover:shadow-lg rounded'>
                                <LoginIcon className="h-5 w-5" />
                                Iniciar Sesión
                            </Link>
                        </li>
                        <li>
                            <Link to='/register' className='text-white flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded'>
                                <UserAddIcon className="h-5 w-5" />
                                Registrarme
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
