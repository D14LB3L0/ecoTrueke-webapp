import { IPerson, IproductPerson } from "@/interfaces/person.interface";

export interface IPersonSlice {
    person: IPerson;
    setPerson: (person: IPerson) => void;
    productPersonId: string;
    setProductPersonId: (productPersonId: string) => void;
    productPerson: IproductPerson
    setProductPerson: (productPerson: IproductPerson) => void;

}