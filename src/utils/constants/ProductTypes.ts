export const ProductStatus = {
  active: "Activo",
  pending: "Pendiente",
  traded: "Intercambiado",
  sold: "Vendido",
  donnated: "Donado",
} as const;

export const ProductTransaction = {
  exchange: "Intercambio",
} as const;

export const ProductCondition = {
  new: "Nuevo",
  fair: "Regular",
  poor: "Malo",
};

export const ProductCategory = {
  technology: "Tecnología",
  clothing: "Ropa",
  home: "Hogar",
  toys: "Juegos",
  sports: "Deportes",
  books: "Libros",
  vehicles: "Vehículos",
  others: "Otros",
} as const;
