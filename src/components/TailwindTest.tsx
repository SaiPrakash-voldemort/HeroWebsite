const TailwindTest = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-4">
      <div className="shrink-0">
        <div className="h-12 w-12 bg-primary-500 rounded-full"></div>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Tailwind Test</div>
        <p className="text-slate-500">If you can see this styled nicely, Tailwind is working!</p>
      </div>
    </div>
  );
};

export default TailwindTest;