import { Families, Family, LastName, Person } from "@/types/familyTypes";
import familiesJson from '@/data/familiyTree.json';
import personsJson from '@/data/personalData.json';
import lastNamesDetails from '@/data/lastNames.json';

const families: Families = familiesJson;
const persons: Person[] = personsJson;
const lastNames: LastName[] = lastNamesDetails;

export type ListActions = 
  {type: 'get-families'} |
  {type: 'get-person', payload: {name: string}} |
  {type: 'navbar-status'} |
  {type: 'bar-active', payload: {option: string}} |
  {type: 'get-lastName', payload: {lastName: string}}
;

export type ListState = {
  families: Family[];
  persons: Person[];
  person: Person;
  navbar: boolean;
  active: string;
  lastNames: LastName[];
  lastName: LastName;
};

export const initialState: ListState = {
  families: families.family,
  persons,
  person: {
    name: "",
    image: "",
    birthday: "",
    genre: "",
    death: "",
    birthdayCard: "",
    hijos: []
  },
  navbar: false,
  active: "",
  lastNames,
  lastName: {
    lastName: "",
    blazon: "",
    wiki: "",
    source: "",
    description: ""
  }
};

export const familyReducer = (
  state: ListState = initialState,
  action: ListActions
) => {

  if (action.type === 'get-families') {
    return {
      ...state,
      families: families.family
    }
  }

  if (action.type === 'get-person') {
    const personSearch = persons.filter(personArray => personArray.name === action.payload.name);

    return {
      ...state,
      person: personSearch[0]
    }
  }

  if (action.type === 'navbar-status') {
    const actual = state.navbar === true ? false : true;

    return {
      ...state,
      navbar: actual
    }
  }

  if (action.type === 'bar-active') {
    const activeOption = action.payload.option;

    return {
      ...state,
      active: activeOption
    }
  }

  if (action.type === 'get-lastName') {
    const lastNameSearched = lastNames.filter(lastName => lastName.lastName === action.payload.lastName);

    return {
      ...state,
      lastName: lastNameSearched[0]
    }
  }
};