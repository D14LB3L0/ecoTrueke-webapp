export interface IProducts {
  id: string;
  productPicture: string | null;
  name: string;
  quantity: number;
  typeTranscription: string;
  condition: string;
}

export interface IProduct {
  productPicture: string | null;
  name: string;
  description: string | null;
  typeTranscription: string;
  category?: string[] | undefined;
  condition: string;
  status: string;
  quantity: number;
}
