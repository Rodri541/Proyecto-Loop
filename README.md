# Proyecto-Loop
# Documentación Full Stack-challenge
El proyecto llevó alrededor de 10-11 horas y los lenguajes usados fueron Node.js, React, SQL y CSS.
# Cómo iniciar
Antes de abrir el proyecto se debería abrir Microsoft SQL Server Management, elegir SQL Server Authentication en la zona de Authentication y loguearse con un usuario valido, en mi caso Login: sa Password: sololetras. Luego se debe crear una base de datos, preferiblemente CountryVoteDB en la cual se ejecutará una query con los datos de dentro de la carpeta database en la carpeta Back.
Y finalmente se deben cambiar los datos dentro de config.js que está dentro de Back, cambiando el usuario, la contraseña y el nombre de la base de datos según se hayan usado al abrir SQL.

El proyecto debe ser descargado usando la opción de Download ZIP encontrado en el botón de Code de GitHub, luego debe ser descomprimido y abierto con Visual Studio Code.

El proyecto tiene dos carpetas, Front y Back, una vez instalado y completado los pasos previos se debe abrir la terminal de Back y ejecutar el comando npm install seguido de npm run dev, tambien se debe hacer lo mismo para Front excepto que se debe usar npm start envés de npm run dev.
# Elecciones de diseño
# Back-End
En cuanto a la funcionalidad del Back-End se usaron dos “tipos” de archivos: controladores y rutas, se creó un archivo controlador y ruta para traer y usar los datos de cada tabla de la base de datos y otro controlador y ruta para manejar todo lo proveniente de la API proveída. 
Básicamente en un controlador se hacen métodos los cuales son GET, POST, DELETE, O UPDATE y a través de estos interactúa con la base de datos o API en este caso, y en las rutas se crean los Endpoints para cada uno de los métodos hechos en los controladores.

Se eligió esta estructura dada una familiaridad adquirida en proyectos anteriores en los que se usó la misma estructura.

Se crearon tres métodos, submitVote, un método POST que se ejecuta cuando se toca el botón Submit Vote y añade al votante a la base de datos, getTopCountries es un método GET que trae los top 10 paises con mas votos desde la base de datos y getAllCountries que trae todos los países y los datos sobre ellos pedidos desde la API, el nombre del país ingresado por el usuario luego se compara con los nombres de los países extraídos por getAllCountries para asignarle al país que el usuario votó su Capital, Region, etc.

Tal como se mencionó anteriormente también se creó una base de datos SQL la cual tiene una sola tabla, esta siendo llamada Users y tiene los campos Id, name, Email, Country y CreatedTime. A Través de la base de datos se pueden crear usuarios y sus países favoritos
# Front-End
La carpeta Front tiene una carpeta src dentro de ella la cual contiene los archivos mainPage.jsx y mainPage.css los cuales contienen todo o la gran mayoría del código Front-End, en mainPage.jsx se llaman los Endpoints creados en el Back-End tal como submitVote, el cual permite a un usuario votar a un país lo cual es validado, o tambien como getTopCountries el cual muestra una lista con el top 10 paises mas votados que se actualizan en tiempo real y además incluye un buscador que busca por país, capital,region y sub-region. Y en mainPage.css se edita el aspecto visual de la pagina para que este tan parecido como se puede a las imágenes proveídas.







