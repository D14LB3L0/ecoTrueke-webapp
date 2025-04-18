export interface IPerson {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    documentNumber: string;
    documentType: 'dni'; 
    gender: 'female' | 'male' | 'other';
    profilePictureUrl: string;
    updatedAt: string; 
    createdAt: string; 
    isDeleted: boolean;
  }
  