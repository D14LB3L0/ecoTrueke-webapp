export interface IProducts {
  id: string;
  productPicture: string | null;
  name: string;
  quantity: number;
  typeTranscription: string;
  condition: string;
  status: string;
}

export interface IProduct {
  id: string;
  userId: string;
  productPicture: string | null;
  name: string;
  description: string | null;
  typeTranscription: string;
  category?: string[] | undefined;
  condition: string;
  status: string;
  quantity: number;
}
