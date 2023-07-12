export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex items-center justify-center flex-col">
      <img
        className="w-20"
        src="/images/rolling.gif"
        alt="loading"
      />
      <p 
        className="capitalize mt-5 font-medium text-slate-600">
        loading...
      </p>
    </div>
  );
}