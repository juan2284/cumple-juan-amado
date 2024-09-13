import { familyReducer, initialState } from "@/reducers/familyReducer";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/20/solid";
import { useReducer } from "react";


export default function Navbar() {
  const [state, dispatch] = useReducer(familyReducer, initialState);

  const handleClick = () => {
    dispatch({type: 'navbar-status'});
  };

  const handleActive = (param: string) => {
    dispatch({type: 'bar-active', payload: {option: param}});
  };

  return (
    <>
      <div className={`${state?.navbar ? 'h-[6%] sm:h-auto overflow-hidden' : 'h-auto'} w-full fixed top-0 z-50 bg-[#11182799] shadow-lg flex flex-col sm:flex-row justify-start sm:justify-center items-center`}>
        <button onClick={handleClick} title="Menú" className={`${state?.navbar ? 'flex' : 'hidden'} sm:hidden w-full sm:w-auto sm:flex-row justify-center items-center gap-1 sm:px-6 sm:py-3 hover:bg-sky-600 group transition-all ease-in-out duration-500`}>
          <ChevronDoubleDownIcon className={`w-6 py-2 text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500`} />
        </button>

        <a href={'/#banner'} onClick={() => handleActive('banner')} className={`${state?.active === 'banner' || state?.active === '' ? 'bg-sky-600' : ''} w-full sm:w-auto flex sm:flex-row justify-center items-center gap-1 sm:px-8 sm:py-3 hover:bg-sky-600 group transition-all ease-in-out duration-500`}>
          <HomeIcon className={`w-6 py-2 text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500`} title="Inicio" />
          <span className="text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500 font-bold">Inicio</span>
        </a>
        <a href={'/#raices'} onClick={() => handleActive('raices')} title="Raíces" className={`${state?.active === 'raices' ? 'bg-amber-800' : ''} w-full sm:w-auto flex sm:flex-row justify-center items-center gap-1 sm:px-6 sm:py-3 hover:bg-amber-800 group transition-all ease-in-out duration-500`}>
          <ChevronDownIcon className={`w-6 py-2 text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500`}  />
          <span className="text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500 font-bold">Raíces</span>
        </a>
        <a href={'/#tronco'} onClick={() => handleActive('tronco')} title="Tronco" className={`${state?.active === 'tronco' ? 'bg-amber-950' : ''} w-full sm:w-auto flex sm:flex-row justify-center items-center gap-1 sm:px-6 sm:py-3 hover:bg-amber-950 group transition-all ease-in-out duration-500`}>
          <ChevronDownIcon className={`w-6 py-2 text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500`} />
          <span className="text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500 font-bold">Tronco</span>
        </a>
        <a href={'/#ramas'} onClick={() => handleActive('ramas')} title="Ramas" className={`${state?.active === 'ramas' ? 'bg-lime-600' : ''} w-full sm:w-auto flex sm:flex-row justify-center items-center gap-1 sm:px-6 sm:py-3 hover:bg-lime-600 group transition-all ease-in-out duration-500`}>
          <ChevronDownIcon className={`w-6 py-2 text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500`} />
          <span className="text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500 font-bold">Ramas</span>
        </a>
        <a href={'/#frutos'} onClick={() => handleActive('frutos')} title="Frutos" className={`${state?.active === 'frutos' ? 'bg-red-700' : ''} w-full sm:w-auto flex sm:flex-row justify-center items-center gap-1 sm:px-6 sm:py-3 hover:bg-red-700 group transition-all ease-in-out duration-500`}>
          <ChevronDownIcon className={`w-6 py-2 text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500`} />
          <span className="text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500 font-bold">Frutos</span>
        </a>

        <button onClick={handleClick} title="Ocultar Menú" className={`${state?.navbar ? 'hidden' : 'flex'} sm:hidden w-full sm:w-auto sm:flex-row justify-center items-center gap-1 sm:px-6 sm:py-3 hover:bg-sky-600 group transition-all ease-in-out duration-500`}>
          <ChevronDoubleUpIcon className={`w-6 py-2 text-gray-100 group-hover:text-gray-100 transition-all ease-in-out duration-500`} />
        </button>
      </div>
    </>
  );
}