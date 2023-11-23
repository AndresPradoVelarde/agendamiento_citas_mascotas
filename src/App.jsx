import { useState, useEffect } from "react";
import Header from "./components/header";
import Formulario from "./components/Formulario";
import ListadoPaciente from "./components/ListadoPaciente";

function App() {
  //Listado de Pacientes
  const [pacientes, setPacientes] = useState([]);
  //Solo Paciente
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem("pacientes"));
    pacientesLocal?.length > 0 && setPacientes(pacientesLocal);
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((paciente) => {
      return paciente.id !== id;
    });
    setPacientes(pacientesActualizados);
  };
  return (
    <div className="container mx-auto mt-20">
      <header />

      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          paciente={paciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
