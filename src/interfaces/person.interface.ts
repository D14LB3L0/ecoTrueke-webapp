export interface IPerson {
    name: string;
    paternalSurname: string;
    maternalSurname:string;
    phone: string;
    address: string;
    documentNumber: string;
    documentType: 'dni' | undefined; 
    gender: 'female' | 'male' | 'other' | undefined;
    profilePicture: string | null; 
  }
  