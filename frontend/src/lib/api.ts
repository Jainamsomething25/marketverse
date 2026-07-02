import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Interceptor to attach Supabase JWT token automatically if user is logged in
api.interceptors.request.use(
  async (config) => {
    try {
      const { supabase } = await import("@/lib/supabase");
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.access_token) {
        config.headers.Authorization = `Bearer ${session.access_token}`;
      }
    } catch (e) {
      console.warn("Supabase auth session not available in API request: ", e);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
