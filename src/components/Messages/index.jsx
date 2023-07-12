export default function EmptyDataMessages() {
  return (
    <div className="px-5 w-full sm:max-w-md mx-auto text-center">
      <img 
        className="w-4/5 mx-auto sm:max-w-sm"
        src="./images/empty-messages.jpg" />
      <p className="text-sm text-slate-500">
        Your favorites list is empty. Discover your favorite movies by exploring our content.
      </p>
    </div>
  );
}