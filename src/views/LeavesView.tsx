import { Dispatch } from "react";
import FamilyCard from "@/components/FamilyCard";
import { Family, Person } from "@/types/familyTypes";
import { ListActions } from "@/reducers/familyReducer";

export type LeavesViewProps = {
  families: Family[];
  persons: Person[];
  dispatch: Dispatch<ListActions>;
}

export default function LeavesView({families, persons, dispatch}: LeavesViewProps) {
  return (
    <>
      <main className="h-svh bg-[url(fruits.jpg)] bg-center bg-gray-200 p-4 flex flex-col justify-center gap-4">
        <section className="w-full h-full flex flex-col flex-wrap sm:flex-row gap-2 justify-center items-center">
          {families.map(family => (
            <FamilyCard key={family.family_name} family={family} persons={persons} dispatch={dispatch} />
          ))}
        </section>
      </main>
    </>
  );
}