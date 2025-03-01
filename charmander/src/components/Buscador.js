import React, { useState, useEffect } from 'react';
import Listado from './Listado';

function Buscador() {
  const [data, setData] = useState([]);
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);
  const [id, setId] = useState(null);
  const [itemBuscador, setItemBuscador] = useState(null);

  const handleClick = (seleccionado, index) => {
    if (id != seleccionado[0] || !mostrarComponente){
        setIndiceSeleccionado(index);
		setId(seleccionado[0]);
		setItemBuscador(seleccionado)
		setMostrarComponente(true); 
    }else{
    	setMostrarComponente(false); 
    	setIndiceSeleccionado(null);
    }
  };

  useEffect(() => {
    fetch('http://127.0.0.1:5000/sets')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-yellow-200 flex md:justify-start m-2 overflow-x-auto h-full w-auto rounded-lg" >
      <ul className="w-1/5">
        {data.map((item, index) => (
          <li key={index} id={item[0]} onClick={() => handleClick(item, index)} className={`p-2 rounded-lg cursor-pointer border-2 w-300 flex-1  ${indiceSeleccionado === index ? 'bg-blue-200' : 'bg-yellow-200 hover:bg-gray-200' }`}>
            <div className="w-auto">{item[1]}</div>
          </li>
        ))}
      </ul>
      {mostrarComponente && <Listado id={id} itemBuscador={itemBuscador} />} 
    </div>
  );
}

export default Buscador;
