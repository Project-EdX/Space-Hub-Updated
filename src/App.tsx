import { createClient } from "@supabase/supabase-js";
import { AppRouter } from "../src/Routers/Routes";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string,
);

function App() {
  return (
    <div style={{ textAlign: "center", width: "100vw" }}>
      <AppRouter />
    </div>
  );
}

export default App;
