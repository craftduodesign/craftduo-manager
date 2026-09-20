export default function Header({ title }) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6">
      <h1 className="text-xl font-semibold text-slate-800">
        {title}
      </h1>
    </header>
  );
}