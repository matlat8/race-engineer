import { useAuth } from "../context/AuthContext";
import { Outlet, useLocation } from "react-router-dom";
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from "../supabase/client";
import { ThemeSupa } from '@supabase/auth-ui-shared'

const AuthRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
  );
};

export default AuthRoute;