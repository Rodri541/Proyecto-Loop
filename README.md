# Documentación Full Stack-challenge
El proyecto llevó alrededor de 10-12 horas y los lenguajes usados fueron Node.js, React, SQL y CSS.
# Cómo iniciar

### 1. Configuración de la base de datos
1. Abrir **Microsoft SQL Server Management Studio**.  
2. Seleccionar **SQL Server Authentication**.  
3. Iniciar sesión con un usuario válido  
   - Ejemplo:  
     - Login: `sa`  
     - Password: `sololetras`  
4. Crear una base de datos (recomendado: **CountryVoteDB**).  
5. Ejecutar la query que se encuentra en: Back/database/
6. Editar el archivo `Back/config.js` y cambiar:
- **Usuario**  
- **Contraseña**  
- **Nombre de la base de datos**  
según los valores que uses en SQL Server.  

### 2. Descargar y abrir el proyecto
1. Ir al repositorio en GitHub.  
2. Hacer clic en el botón **Code > Download ZIP**.  
3. Descomprimir el archivo descargado.  
4. Abrir la carpeta en **Visual Studio Code**.  

### 3. Instalar dependencias y ejecutar

#### Backend
1. Abrir una terminal en la carpeta **Back**.  
2. Ejecutar: npm install y luego npm run dev

#### Frontend
1. Abrir una terminal en la carpeta **Front**.  
2. Ejecutar: npm install y luego npm start

# Elecciones de diseño
## Back-End
El Back-End está organizado en dos tipos de archivos principales: controladores y rutas, de los cuales hay cuatro en total: countries.controller.js, countries.routes.js y voting.controller.js, voting.routes.js. Los controladores contienen los métodos encargados de la lógica de negocio (GET, POST, DELETE y UPDATE), a través de los cuales se interactúa tanto con la base de datos como con la API externa. Las rutas, por su parte, definen los endpoints que exponen dichos métodos al cliente. 
Esta estructura fue elegida por la familiaridad adquirida en proyectos anteriores, donde se demostró ser una forma clara y mantenible de organizar el código.

Dentro de la lógica del sistema se implementaron tres métodos principales:

submitVote: método POST que se ejecuta al presionar el botón Submit Vote, añadiendo un nuevo votante a la base de datos.

getTopCountries: método GET que obtiene los 10 países con más votos desde la base de datos.

getAllCountries: método GET que recupera todos los países y su información desde la API externa. Posteriormente, el nombre ingresado por el usuario se compara con estos datos para asignarle información adicional como capital, región o subregión.

La base de datos utilizada es SQL Server y cuenta con una única tabla denominada Users, compuesta por los campos: Id, Name, Email y Country.

## Front-End
La carpeta Front contiene el código correspondiente a la parte visual de la aplicación. Dentro de ella se encuentra la carpeta src, que incluye los archivos principales mainPage.jsx y mainPage.css. En mainPage.jsx se gestionan las llamadas a los endpoints del Back-End, como submitVote, que permite a los usuarios votar por un país con validación incluida, y getTopCountries, que muestra en tiempo real el top 10 de países más votados. Además, este componente incorpora un buscador que permite filtrar por país, capital, región y subregión.

Por su parte, el archivo mainPage.css define los estilos visuales de la página, buscando que la interfaz se asemeje lo más posible a las imágenes de referencia provistas en el desafío.







