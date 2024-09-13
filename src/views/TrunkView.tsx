import { Dispatch } from "react";
import FamilyCard from "@/components/FamilyCard";
import { ListActions } from "@/reducers/familyReducer";
import { Family, Person } from "@/types/familyTypes";

export type TrunkViewProps = {
  families: Family[];
  persons: Person[];
  dispatch: Dispatch<ListActions>;
}

export default function TrunkView({families, persons, dispatch}: TrunkViewProps) {
  return (
    <>
      <main className="h-svh bg-[url(trunk.jpg)] bg-center bg-gray-200 p-4 flex flex-col justify-center gap-4">
        <section className="w-full h-full flex flex-col flex-wrap sm:flex-row gap-2 justify-center items-center">
          {families.map(family => (
            <FamilyCard key={family.family_name} family={family} persons={persons} dispatch={dispatch} />
          ))}
        </section>
      </main>
    </>
  );
}