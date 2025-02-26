import { useState } from "react";

// components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  const [bgColor, setBgColor] = useState("main-bg-gold");

  return (
    <div className={`h-screen w-screen transition ${bgColor}`}>
      <Header />
      <main>
        <Hero setBgColor={setBgColor} />
      </main>
    </div>
  );
}

export default App;
