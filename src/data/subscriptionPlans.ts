export const subscriptionPlans = [
    {
      id: "122",
      type: "free",
      title: "Plan Gratuito",
      description: "Ideal para comenzar a intercambiar productos.",
      features: [
        "Publica hasta 3 productos",
        "Acceso al chat con compradores",
        "Notificaciones básicas"
      ]
    },
    {
      id: "123",
      type: "premium",
      title: "Plan Premium",
      description: "Mayor visibilidad y herramientas avanzadas.",
      features: [
        "Publicaciones ilimitadas",
        "Destaca tus productos",
        "Acceso anticipado a intercambios",
        "Soporte prioritario"
      ]
    }
  ] as const;
  