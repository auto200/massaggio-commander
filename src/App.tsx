import { useState } from "react";
import "./App.css";

const COMMANDS = [
  { command: "Massage on", description: "Włącz masaż" },
  { command: "Massage close", description: "wyłącz masaż" },
  { command: "Comfort massage", description: "masaż komfortowy" },
  { command: "Relax massage", description: "masaż relaksujący" },
  { command: "Full body massage", description: "masaż całego ciała" },
  { command: "Neck and shoulder massage", description: "masaż barków i szyji" },
  { command: "Back and waist massage", description: "msasaż lędźwi i pleców" },
  { command: "Stretch massage", description: "msaż rozciągający" },
  { command: "Fixed massage", description: "masaż w stałym punkcie" },
  { command: "Change the other mode", description: "zmień tryb" },
  { command: "Go little down", description: "trochę w dół" },
  { command: "Go little up", description: "trochę w górę" },
  {
    command: "Open the air pressure",
    description: "włącz uciskanie powietrzem",
  },
  {
    command: "Close the air pressure",
    description: "wyłącz uciskanie powietrzem",
  },
  { command: "Up the seat position", description: "siedzenie do góry" },
  { command: "Down the seat position", description: "siedzenie w dół" },
  { command: "Stop adjustment", description: "zatrzymaj zmianę pozycji" },
] as const;

const PRE_COMMAND = "hi alice";

function App() {
  const [currentCommand, setCurrentCommand] = useState<string | null>(null);

  const handleCommandClick = (command: string) => {
    setCurrentCommand(command);
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(PRE_COMMAND));
    setTimeout(() => {
      const instance = new SpeechSynthesisUtterance(command);
      window.speechSynthesis.speak(instance);
      instance.onend = () => setCurrentCommand(null);
    }, 3000);
  };

  return (
    <div className="App">
      <table>
        <tbody>
          {COMMANDS.map((c, i) => (
            <tr
              key={i}
              onClick={() => handleCommandClick(c.command)}
              style={{
                backgroundColor:
                  currentCommand === c.command ? "lightgreen" : "",
              }}
            >
              <td>
                <b>{i + 1}</b>
              </td>
              <td>{c.command}</td>
              <td>{c.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
