import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Correo o contraseña incorrectos");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">

        <div className="text-center mb-8">

          <div className="w-16 h-16 rounded-2xl bg-violet-600 mx-auto flex items-center justify-center text-white text-2xl font-bold">
            C
          </div>

          <h1 className="text-3xl font-bold mt-4 text-slate-800">
            CraftDuo
          </h1>

          <p className="text-slate-500 mt-2">
            Inicia sesión para continuar
          </p>

        </div>

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="text-sm text-slate-600">
              Correo electrónico
            </label>

            <input
              type="email"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">
              Contraseña
            </label>

            <input
              type="password"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Iniciar sesión
          </button>

        </form>

      </div>

    </div>
  );
}