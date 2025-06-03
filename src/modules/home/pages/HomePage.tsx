export const HomePage = () => {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-280px)] bg-background px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
          EcoTrueke
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-6">
          Plataforma de trueque, donaciones y ventas responsables.
        </p>
        <p className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-widest">
          ¡Próximamente!
        </p>
      </div>
    </main>
  );
};
