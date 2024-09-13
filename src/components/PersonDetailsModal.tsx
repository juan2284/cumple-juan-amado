import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { Person } from "@/types/familyTypes";

export type PersonDetailsModal = {
  person: Person;
};

export default function PersonDetailsModal({person}: PersonDetailsModal) {  
  const navigate = useNavigate();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const personSearch = queryParams.get('person');
  const show = personSearch ? true : false;
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => navigate(location.pathname, { replace: true })}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full rounded-lg max-w-xl transform overflow-hidden bg-gray-100 text-left align-middle shadow-xl transition-all p-2">

                <Dialog.Title
                  as="h3"
                  className="font-black text-2xl text-slate-700 my-2 text-center"
                >{person.name}</Dialog.Title>

                <div className="flex justify-center">
                  <img src={person.image !== '' ? `${person.image}` : person.genre === 'm' ? `ellos.png` : `ellas.png`} className="w-1/2 md:w-1/4 rounded-full shadow-lg" alt={person.name.toLowerCase()} />
                </div>

                <div className="flex flex-col justify-center items-center p-3">
                  <div className="w-full text-center">
                    <p className={`${person.birthday !== '' ? 'flex' : 'hidden'} flex-row justify-start text-sm font-bold text-slate-700 gap-2 p-1`}>
                      <CalendarDaysIcon className="w-5 h-5 text-slate-700" />
                      Cumpleaños: {''}
                      <span className="text-slate-700 font-light text-sm">{person.birthday}</span>
                    </p>

                    <p className={`${person.death !== '' ? 'flex' : 'hidden'} flex-row justify-start text-sm font-bold text-slate-700 gap-2 p-1`}>
                      <CalendarDaysIcon className="w-5 h-5 text-slate-700" />
                      Fallecimiento: {''}
                      <span className="text-slate-700 font-light text-sm">{person.death}</span>
                    </p>
                  </div>

                  <div className={`${person.birthdayCard !== '' ? 'block' : 'hidden'} w-full`}>
                    <p className="flex flex-row justify-center text-sm font-bold text-slate-700 gap-2 p-1 border border-dashed border-slate-400 rounded-lg">Tarjeta de Cumpleaños {new Date().getFullYear()}: {''}
                      <a className="text-green-500 font-bold text-sm underline hover:text-green-700" target="_blank" href={person.birthdayCard}>{person.name.split(' ')[0]}</a>
                    </p>
                  </div>
                </div>

                {person.hijos.length !== 0 ? (
                  <div>
                    <p className="text-sm font-bold text-slate-700">Hijos: {''}</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                        {person.hijos.map(hijo => (
                          <p className="text-slate-600 font-bold text-xs bg-slate-300 p-2" key={hijo}>{hijo}</p>
                        ))}

                    </div>
                  </div>
                    ) : null}

                <div className="flex md:flex-row justify-center items-center gap-2">
                  <button
                    type="button"
                    className="bg-green-500 hover:bg-green-600 w-full p-3 mt-2 text-white uppercase font-bold cursor-pointer transition-colors rounded-lg"
                    onClick={() => navigate(location.pathname, { replace: true })}
                  >Close</button>
                </div>


              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}