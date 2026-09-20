import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function Dashboard() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();

      setUser(data.user);
    };

    loadUser();
  }, []);

  return (
    <div className="flex bg-slate-100">

      <Sidebar user={user} />

      <div className="flex-1">
        <Header title="Dashboard" />

        <main className="p-8">

          <div className="mb-8">

            <h1 className="text-3xl font-bold text-slate-800">
              Bienvenida 👋
            </h1>

            <p className="text-slate-500 mt-2">
              Gestiona todos los eventos de CraftDuo desde un único lugar.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-slate-500 text-sm">
                Próximos eventos
              </p>

              <h2 className="text-4xl font-bold mt-3">
                0
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-slate-500 text-sm">
                Clientes
              </p>

              <h2 className="text-4xl font-bold mt-3">
                0
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-slate-500 text-sm">
                Tareas pendientes
              </p>

              <h2 className="text-4xl font-bold mt-3">
                0
              </h2>
            </div>

          </div>

        </main>

      </div>

    </div>
  );
}