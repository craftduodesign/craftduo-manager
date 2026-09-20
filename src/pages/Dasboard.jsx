import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        navigate("/");
        return;
      }

      setUser(data.user);
    };

    checkSession();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div>
      <h1>Bienvenida</h1>

      <p>{user?.email}</p>

      <button onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
}