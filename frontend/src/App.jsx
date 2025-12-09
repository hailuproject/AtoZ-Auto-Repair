import React from "react";
import Navbar from "./components/Shared/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AuthProvider></AuthProvider>
      <Navbar />
      {/* ...other components/content... */}
    </AuthProvider>
  );
}

export default App;
