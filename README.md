# Documentación Full Stack-challenge
El proyecto llevó alrededor de 10-11 horas y los lenguajes usados fueron Node.js, React, SQL y CSS.
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
En cuanto a la funcionalidad del Back-End se usaron dos “tipos” de archivos: controladores y rutas, se creó un archivo controlador y ruta para traer y usar los datos de cada tabla de la base de datos y otro controlador y ruta para manejar todo lo proveniente de la API proveída. 

Básicamente en un controlador se hacen métodos los cuales son GET, POST, DELETE, O UPDATE y a través de estos se interactúa con la base de datos o API, y en las rutas se crean los Endpoints usados para cada uno de los métodos hechos en los controladores.

Se eligió esta estructura dada una familiaridad adquirida en proyectos anteriores en los que se usó la misma estructura.

Se crearon tres métodos, submitVote, un método POST que se ejecuta cuando se toca el botón Submit Vote y añade al votante a la base de datos, getTopCountries es un método GET que trae los top 10 paises con mas votos desde la base de datos y getAllCountries que trae todos los países y los datos sobre ellos pedidos desde la API, el nombre del país ingresado por el usuario luego se compara con los nombres de los países extraídos por getAllCountries para asignarle al país que el usuario votó su Capital, Region, etc.

Tal como se mencionó anteriormente también se creó una base de datos SQL la cual tiene una sola tabla, esta siendo llamada Users y tiene los campos Id, name, Email y Country. A Través de la base de datos se pueden crear usuarios y sus países favoritos

## Front-End
La carpeta Front tiene una carpeta src dentro de ella la cual contiene los archivos mainPage.jsx y mainPage.css los cuales contienen todo o la gran mayoría del código Front-End, en mainPage.jsx se llaman los Endpoints creados en el Back-End tal como submitVote, el cual permite a un usuario votar a un país lo cual es validado, o tambien como getTopCountries el cual muestra una lista con el top 10 paises mas votados que se actualizan en tiempo real y además incluye un buscador que busca por país, capital, region y sub-region. 
Y en mainPage.css se edita el aspecto visual de la pagina para que este tan parecido como se puede a las imágenes proveídas.







