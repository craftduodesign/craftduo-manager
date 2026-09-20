import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Sidebar({ user }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const initial = user?.email?.charAt(0).toUpperCase() || "?";

  const name = user?.user_metadata?.display_name || "Usuario";

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col p-5">

      <div>
        <h1 className="text-2xl font-bold mb-10">
          CraftDuo
        </h1>

        <nav className="space-y-2">

          <NavLink
            to="/panel"
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-violet-600"
                  : "hover:bg-slate-800 text-slate-300"
              }`
            }
          >
            Panel principal
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-violet-600"
                  : "hover:bg-slate-800 text-slate-300"
              }`
            }
          >
            Eventos
          </NavLink>

        </nav>
      </div>

      <div className="mt-auto relative">

        {/* Menú desplegable */}
        {open && (
            <div className="absolute bottom-20 left-0 right-0 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 z-50">
            <button
                onClick={logout}
                className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 transition"
            >
                Cerrar sesión
            </button>
            </div>
        )}

        {/* Perfil */}
        <button
            onClick={() => setOpen(!open)}
            className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl p-3 flex items-center gap-3 transition"
        >
            {/* Avatar */}
            <div className="w-11 h-11 flex-none rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-lg">
            {initial}
            </div>

            {/* Texto */}
            <div className="flex-1 min-w-0 text-left">
            <p className="text-sm font-semibold text-white truncate">
                {name}
            </p>

            <p className="text-xs text-slate-400 truncate">
                {user?.email}
            </p>
            </div>

            {/* Flecha */}
            <svg
            className={`w-4 h-4 flex-none text-slate-400 transition-transform ${
                open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
            </svg>
        </button>

        </div>
    </aside>
  );
}