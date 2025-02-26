import { useState } from "react";

// components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  const [bgColor, setBgColor] = useState("main-bg-orange");

  return (
    <div className={`h-screen w-screen ${bgColor}`}>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
