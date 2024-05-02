import "./App.css";
import { useState } from "react";
import { v4 } from "uuid";
import Name from "./Name";
import PdfRenderer from "./PdfRenderer";

function App() {
  const [names, setNames] = useState([
    { id: v4(), name: "Test Testersen", size: 25 },
    { id: v4(), name: "Hansen &\nNordmann", size: 20 },
    { id: v4(), name: "Ola Meget Langtnavn", size: 15 },
    { id: v4(), name: "Ukjent", size: 25 },
  ]);

  const addName = () => {
    setNames([...names, { id: v4(), name: "", size: 25 }]);
  };

  const update = (id, name, size) => {
    setNames(
      names.map((it) => {
        if (it.id === id) {
          return { id, name, size };
        } else {
          return it;
        }
      })
    );
  };

  return (
    <div className="app">
      <header>
        <h1>Navneskilt generator</h1>
        <p>
          Denne appen kan generere navnelapper som passer i enkelte
          dørcalling-anlegg. PDF-en genereres fortløpende på høyresiden, og kan
          printes ut direkte fra nettleseren. Lappene bør printes på plast av
          typen overhead-ark og klippes til. For eksempel{" "}
          <a href="https://www.kjell.com/no/produkter/kontor/papir/transparenter/xerox-overheadpapir-laser-a4-50-pk.-p17134">
            disse fra Kjell & Company.
          </a>
        </p>
      </header>
      <div id="content">
        <div id="editor">
          {names.map((it) => (
            <Name
              key={it.id}
              id={it.id}
              name={it.name}
              size={it.size}
              update={update}
            />
          ))}
          <button onClick={addName}>Legg til navn</button>
        </div>
        <div id="preview">
          <PdfRenderer names={names} />
        </div>
      </div>
    </div>
  );
}

export default App;
