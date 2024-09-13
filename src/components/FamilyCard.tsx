import { ListActions } from "@/reducers/familyReducer";
import { Family, Person } from "@/types/familyTypes";
import { Dispatch } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type FamilyCardProps = {
  family: Family;
  persons: Person[];
  dispatch: Dispatch<ListActions>;
}

export default function FamilyCard({family, persons, dispatch}: FamilyCardProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const lastNames = family.family_name.split(' ');

  const fatherImage = family.padre === '' ? '' : persons.filter(person => person.name === family.padre && family.padre !== '')[0].image;
  const motherImage = family.madre === '' ? '' : persons.filter(person => person.name === family.madre && family.madre !== '')[0].image;

  const handleClick = (person: string) => {
    dispatch({type: 'get-person', payload: {name: person}});
    navigate(location.pathname + `?person=${person}`);
  };

  const handleBlazons = (lastName: string) => {
    dispatch({type: 'get-lastName', payload: {lastName}});
    navigate(location.pathname + `?lastName=${lastName}`);
  };

  const hijosArray: Person[] = [];
  for (let i = 0; i < family.hijos.length; i++) {
    for (let j = 0; j < persons.length; j++) {
      if (family.hijos[i] === persons[j].name) {
        hijosArray.push(persons[j]);
      }      
    } 
  }

  return (
    <>
      <div className="w-full sm:w-[45%] sm:h-[46%] sm:min-w-1/2 flex flex-col justify-center items-center bg-gray-100 rounded-lg p-1 shadow-lg">
        <header className="w-full flex flex-row justify-center items-center gap-6 border-b-[1px] sm:border-none border-gray-400 mb-2">
          <button onClick={() => handleBlazons(lastNames[0])} className={`${family.heraldica[0] === undefined ? 'hidden' : 'hidden sm:block'} w-[5%]`}>
            <img src={`${family.heraldica[0]}`} alt={`blason apellido ${lastNames[0]}`} title={lastNames[0]} />
          </button>
          <h3 className="text-center font-bold text-xl sm:text-2xl text-gray-600">{family.family_name}</h3>
          <button onClick={() => handleBlazons(lastNames[1])} className={`${family.heraldica[1] === undefined ? 'hidden' : 'hidden sm:block'} w-[5%]`}>
            <img src={`${family.heraldica[1]}`} alt={`blason apellido ${lastNames[1]}`} className={`w-full`} title={lastNames[1]} />
          </button>
        </header>

        <main className="w-full flex flex-row justify-center items-end gap-4 border-b border-b-gray-400">
          <button onClick={() => handleClick(family.padre)} className={`${family.padre === '' ? 'hidden' : ''} w-1/2 flex flex-col justify-center text-center`}>
            <img className="w-[20%] m-auto p-1 shadow-lg hidden sm:block" src={family.padre === '' ? '' : fatherImage === '' ? `ellos.png` : fatherImage} alt="padre" />
            <span className="w-full font-bold text-gray-600 text-sm">{family.padre}</span>
            <div className="w-[1px] h-2 bg-gray-400 m-auto"></div>
          </button>
          <button onClick={() => handleClick(family.madre)} className={`${family.madre === '' ? 'hidden' : ''} w-1/2 flex flex-col justify-center text-center`}>
            <img className="w-[20%] m-auto p-1 shadow-lg hidden sm:block" src={family.madre === '' ? '' : motherImage === '' ? `ellas.png` : motherImage} alt="madre" />
            <span className="w-full font-bold text-gray-600 text-sm">{family.madre}</span>
            <div className="w-[1px] h-2 bg-gray-400 m-auto"></div>
          </button>
        </main>

        <footer className="w-full h-full flex flex-row justify-around items-start gap-2">
          {hijosArray.map(hijo => (
            <button onClick={() => handleClick(hijo.name)} className="w-[55%] h-full flex flex-col justify-start items-center text-center" key={hijo.name}>
              <div className="w-[1px] h-2 bg-gray-400"></div>
              <img className="min-w-[30%] max-w-[30%] shadow-lg p-1 hidden sm:block object-contain" src={hijo.image !== '' ? hijo.image : hijo.genre === 'f' ? `ellas.png` : `ellos.png`} alt="hijo_1" />
              <span className="font-light text-gray-600 text-xs p-[2px]">{hijo.name}</span>
            </button>
          ))}          
        </footer>

      </div>
    </>
  )
}