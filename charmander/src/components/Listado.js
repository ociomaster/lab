import React, { useState, useEffect } from 'react';
import Ficha from './Ficha';


function Listado({ id, itemBuscador }) {
  const [data, setData] = useState([]);
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [card, setCard] = useState(null);
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);
  const [itemListado, setItemListado] = useState(null);
  const handleClick = (seleccionado, index) => {
    if (card != seleccionado[0] || !mostrarComponente){
	    setIndiceSeleccionado(index);
    	setCard(seleccionado[0]);
    	setItemListado(seleccionado)
    	setMostrarComponente(true); 
    }else{
    	setMostrarComponente(false); 
    	setIndiceSeleccionado(null);
    }
  };


  useEffect(() => {
    if (id) {
      fetch(`http://127.0.0.1:5000/sets/${id}/cards`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }else {
    	setMostrarComponente(false); 
    };
  }, [id]);

  return (
    <div className="listado_root bg-yellow-100 flex md:justify-start m-2 overflow-x-auto w-full rounded-lg" >
      <ul className="w-1/4">
      	<li className="bg-yellow-300 rounded-lg w-full h-auto" >    <img src={itemBuscador[9]}  /></li>
        {data.map((item, index) => (
          <li key={index} onClick={() => handleClick(item, index)} className={`p-1 rounded-lg cursor-pointer  border-2 ${indiceSeleccionado === index ? 'bg-blue-200' : 'bg-yellow-100 hover:bg-gray-200' }`}> 
            {item[1]} | {item[7]} 
          </li>
        ))}
      </ul>
      {mostrarComponente && <Ficha card={card} itemListado={itemListado} itemBuscador={itemBuscador} />} 
    </div>
  );
}

export default Listado;
