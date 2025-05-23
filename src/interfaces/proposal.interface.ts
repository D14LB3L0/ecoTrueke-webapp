export interface IProposal {
  id: string;
  proposerId: string;
  ownerId: string;
  proposalType: string;
  offeredProductId: string;
  requestedProductId: string;
  status: string;
  createdAt: string;
}


export interface IProposalProduct {
  id: string;
  proposerId: string;
  ownerId: string;
  proposalType: string;
  status: string;
  createdAt: string;
  proposerUser: {
    id: string;
  };
  proposerPerson: {
    id: string;
    name: string;
  };
  offeredProduct: {
    id: string;
    name: string;
    productPicture: string;
  };
  requestedProduct: {
    id: string;
    name: string;
    productPicture: string;
  };
}
