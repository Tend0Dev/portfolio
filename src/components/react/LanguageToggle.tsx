import { useState } from "react";
import { Toggle } from "rsuite";
import "rsuite/Toggle/styles/index.css";

export default function LanguageToggle() {
  // Detecta el idioma actual de la URL (ej: /en/, /es/)
  const currentLang = typeof window !== "undefined" 
    ? window.location.pathname.split("/")[1] || "en"
    : "en";

  const [checked, setChecked] = useState(currentLang === "es");

  const handleToggle = (checked: boolean) => {
    setChecked(checked);
    const newLang = checked ? "es" : "en";

    // Redirige a la misma ruta pero en otro idioma
    const parts = window.location.pathname.split("/");
    parts[1] = newLang; // sustituye el idioma
    const newPath = parts.join("/") || "/";
    window.location.href = newPath;
  };

  return (
    <div className= "pb-4">
      <Toggle
        checked={checked}
        onChange={handleToggle}
        color="violet"
        checkedChildren="ES"
        unCheckedChildren="EN"
      />
    </div>
  );
}
