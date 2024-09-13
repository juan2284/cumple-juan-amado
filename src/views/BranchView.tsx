import { Dispatch } from "react";
import FamilyCard from "@/components/FamilyCard";
import { ListActions } from "@/reducers/familyReducer";
import { Family, Person } from "@/types/familyTypes";

export type BranchViewProps = {
  families: Family[];
  persons: Person[];
  dispatch: Dispatch<ListActions>;
}

export default function BranchView({families, persons, dispatch}: BranchViewProps) {
  return (
    <>
      <main className="h-svh bg-[url(branches.jpg)] bg-center flex flex-col justify-center items-center">
        <section className="w-full h-full flex flex-col flex-wrap sm:flex-row gap-2 sm:gap-y-0 justify-center items-end sm:mt-10">
          {families.map(family => (
            <FamilyCard key={family.family_name} family={family} persons={persons} dispatch={dispatch} />
          ))}
        </section>
      </main>
    </>
  );
}