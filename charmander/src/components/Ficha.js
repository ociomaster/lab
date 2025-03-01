
import React from 'react';
import { useState, useEffect } from 'react';


function Ficha({card, itemListado, itemBuscador}) {
  const [ficha, setFicha] = useState([]);
    const [listaItems, setListaItems] = useState([]);
  const [imagen, setImagen] = useState('');
useEffect(() => {
    if (card) {
      fetch(`http://127.0.0.1:5000/cards/${card}`)
        .then((res) => res.json())
        .then((ficha) => setFicha(ficha));
    }
  }, [card]);
  useEffect(() => {
    if (card && ficha.length > 0) {
      let largeImage = '';
      const items = [];
      for (let i = 0; i < ficha.length; i++) {
        if (ficha[i][8] === 'small') {
          largeImage = ficha[i][7];
        }
        items.push({
          [ficha[i][4]]: {
            url: ficha[i][2],
            actualizado: ficha[i][3],
            id: ficha[i][5],
            tienda: ficha[i][4],
          },
        });
      }
      setImagen(largeImage);
      setListaItems(items);
    }
  }, [card, ficha]);
  return (
    <div className="listado_root bg-blue-200 flex md:justify-start w-full rounded-lg p-2 ">     
         <div className="m-2 overflow-y-auto w-full rounded-lg g-gray-200" >
	        <img src={itemBuscador[8]} /> 
            <div>Nombre: {itemListado[1]}</div>
            <div>Clase: {itemListado[2]}</div>
            <div>Tipo: {itemListado[4]}</div>
            <div>Subtipos: {itemListado[3]}</div>
            <div>Rareza: {itemListado[7]}</div>

		  <div>Nombre: {itemBuscador[1]}</div>
		  <div>Serie: {itemBuscador[2]}</div>
		  <div>Impresiones: {itemBuscador[3]}</div>      
		  <div>Lanzamiento: {itemBuscador[6]}</div>
           
         </div>
         <div className="imagenes" className="m-2 rounded-lg p-2 bg-yellow-200 rounded-lg w-100 h-auto">
		     <img src={imagen} alt="Carta" className="w-80 h-auto"/> 
		     <img src={itemBuscador[9] } className="w-80 h-auto"/> 
         
{listaItems.map((item, index) => {
  const claveDinamica = Object.keys(item)[0]; // Obtiene la clave dinámica (nombre de la tienda)
  const datos = item[claveDinamica]; // Obtiene el objeto anidado con los datos

  return (
    <div key={index} className="m-2 ounded-lg p-2 bg-yellow-400 rounded-lg">
      <div>Tienda: {datos.tienda}</div>
      <div>URL: {datos.url}</div>
      <div>Actualizado: {datos.actualizado}</div>
      <div>ID: {datos.id}</div>
    </div>
  );
})}
            
         
         </div>
    </div>
  );
}



export default Ficha;
