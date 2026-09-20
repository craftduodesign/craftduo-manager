import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function Events() {
  return (
    <div className="flex bg-slate-100">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <main className="p-6">

          <h1 className="text-3xl font-bold">
            Eventos
          </h1>

          <p className="text-slate-500 mt-2">
            Aquí aparecerá el listado de eventos.
          </p>

        </main>

      </div>

    </div>
  );
}