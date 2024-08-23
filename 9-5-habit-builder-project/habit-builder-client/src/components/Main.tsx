const Main = ({ title, children }) => {
  return (
    <main className="h-full w-5/6 overflow-x-hidden overflow-y-scroll rounded-3xl border-l border-[#c7c7c7] bg-neutral-100 px-12 py-11 text-neutral-950 shadow-2xl dark:border-[#5e5e5e] dark:bg-neutral-900 dark:text-neutral-200">
      <h1 className="mb-6 font-bold">{title}</h1>
      {children}
    </main>
  );
};

export default Main;
