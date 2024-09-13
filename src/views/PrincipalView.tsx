import { useReducer } from "react";
import { familyReducer, initialState } from "@/reducers/familyReducer";
import { Family } from "@/types/familyTypes";
import Banner from "@/components/Banner";
import BranchView from "@/views/BranchView";
import LeavesView from "@/views/LeavesView";
import RootsView from "@/views/RootsView";
import TrunkView from "@/views/TrunkView";
import Logo from "@/components/Logo";
import PersonDetailsModal from '@/components/PersonDetailsModal';
import LastNameDetailsModal from '@/components/LastNameDetailsModal';
import Tree from "@/views/Tree";

export default function PrincipalView() {
  const [state, dispatch] = useReducer(familyReducer, initialState);
  const families: Family[] = state!.families;

  const rootFamilies = families.filter(family => family.nivel === 0);
  const trunkFamilies = families.filter(family => family.nivel === 1);
  const branchesFamilies = families.filter(family => family.nivel === 2);
  const fruitsFamilies = families.filter(family => family.nivel === 3);

  return (
    <>
      <main className="h-screen snap-mandatory snap-y overflow-y-scroll scroll-smooth flex flex-col justify-start">
        <header className="w-full snap-always snap-center" id="banner">
          <Banner />
        </header>
        
        <section className="w-full snap-always snap-center bg-gray-200" id="raices">
          <RootsView persons={state!.persons} dispatch={dispatch} families={rootFamilies} />
        </section>

        <section className="w-full snap-always snap-center" id="tronco">
          <TrunkView persons={state!.persons} dispatch={dispatch} families={trunkFamilies} />
        </section>

        <section className="w-full snap-always snap-center" id="ramas">
          <BranchView persons={state!.persons} dispatch={dispatch} families={branchesFamilies} />
        </section>

        <section className="w-full snap-always snap-center" id="frutos">
          <LeavesView persons={state!.persons} dispatch={dispatch} families={fruitsFamilies} />
        </section>

        <section className="w-full snap-always snap-center bg-gray-200" id="arbol">
          <Tree />
        </section>

        <footer className='py-5 bg-gradient-to-r from-green-800 from-2% via-green-900 via-10% to-green-950 to-30% shadow-lg snap-always snap-center'>
          <div className='w-full flex flex-col md:flex-row justify-around items-center gap-4'>
            <a href={'/#banner'} className='flex flex-row justify-center items-center gap-x-4'>
              <Logo />
              <h1 className='text-white font-bold text-xl'>Familia Ruiz Sosa</h1>
            </a>
            <p className='text-center text-xs text-white'>
              Juan Rodriguez. Todos los derechos reservados {new Date().getFullYear()}
            </p>
          </div>
        </footer>

        <PersonDetailsModal person={state!.person} />
        <LastNameDetailsModal lastName={state!.lastName} />
      </main>
    </>    
  );
}