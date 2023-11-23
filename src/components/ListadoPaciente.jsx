import Paciente from "./Paciente";

function ListadoPaciente({ pacientes , setPaciente, eliminarPaciente}) {

  return (
    <div className="md:w-1/2 lg:w-3/5  ">
      {pacientes.length != 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">ListadoPaciente</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          <div className="md:h-screen overflow-y-scroll ">
            {pacientes.map((paciente) => {
              return <Paciente 
                      key={paciente.id} 
                      paciente={paciente} 
                      setPaciente = {setPaciente}
                      eliminarPaciente = {eliminarPaciente}
                    />;
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Agrega y{" "}
            <span className="text-indigo-600 font-bold">se mostraran aqui</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPaciente;
