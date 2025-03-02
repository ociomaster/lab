
El proyecto se compone por 3 directorios con componentes para cada capa
squirtle
- Elementos de base de datos, contiene un respaldo y un script de carga.
bulbasaur
- Aplicación Flask, contiene las API y se conecta a base de datos.
charmander
- Fuentes de React

En la raiz del repositorio existe un docker compose, el cual permite generar el contenedor de base de datos y el aplicativo flask

Base de datos:
En la carpeta squirtle se encuentra el respaldo de postgres proporcionado, un script de carga para el mismo, el dockecompose se encarga de crear el contenedor para ejecutar la base de datos en la que se almacenan los datos, no se incluye persistencia ya que no hay escritura.

Back:
En la carpeta bulbasaur se encuentran los siguientes elementos:
- app.py contiene la logica de despliegue de las api, es la salida de datos y el ejecutable
- businness.py contiene las difenreciaciones entre consultas, en caso de aplicativos más grandes tendria las variantes entre negocio para no dejar esta logica en las vistas.
- acceso_datos.py contiene el metodo de inicio y cierre de conección, tambien esta el metodo de consulta a base de datos.
Por ultimo el Dockerfile correspondiente para crear el conenedor.

Front:
el contenido de la carpeta charmander contiene los fuentes para un aplicativo React, en la carpeta src se encuentra lo siguiente:
- App.js la base de la aplicación, esta llama al buscador
- components/Buscador.js despliega la lista de sets disponibles y llama al listado de cartas
- components/Listado.js Despliega las cartas disponibles.
- components/Ficha.js Despliega los detalles de una carta.

Ejecusión:
En linux ejecutar el siguiente comando en la carpeta del docker-compose.yml
- sudo docker compose up -d

Para el aplicativo react iniciar react en una carpeta
- npx create-react-app charmander
Instalar tailwind
- npx tailwindcss init -p
Copiar los fuentes de la carpeta charmander en el repositorio.
Ejecutar el aplicativo.
- npm start


