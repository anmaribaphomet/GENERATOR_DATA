## Colaboradores
Solo yo 
<a href="https://github.com/anmaribaphomet"> @anmaribaphomet</a><br>

Este programa fue desarrollado para la materia base de datos 2 en el semestre 2026-1

# Generador de Datos de Alumnos

## Descripción del proyecto

El Generador de Datos de Alumnos es una herramienta desarrollada en JavaScript que permite 
crear registros ficticios de estudiantes de manera automática. Su propósito es facilitar la generación de 
datos de prueba para utilizarlos en bases de datos, pruebas de software y ejercicios relacionados con la administración de información escolar.

La aplicación permite seleccionar el formato de salida, establecer la cantidad de registros que se desean
generar y descargar los datos en un archivo compatible con diferentes herramientas.

## Interfaz Grafica
<img width="1386" height="842" alt="Screenshot 2026-02-20 001223" src="https://github.com/user-attachments/assets/9219e879-b373-4f74-82e5-26a18a312d0f" />



## Características principales

- **Generación automática de registros:** crea datos ficticios de alumnos utilizando listas de nombres y apellidos.
- **Matrículas consecutivas:** genera matrículas a partir del número base `224250000`.
- **Correos electrónicos automáticos:** asigna a cada alumno un correo con el formato `a{matricula}@unison.mx`.
- **Nombres aleatorios:** combina nombres mexicanos con segundos nombres franceses de manera opcional.
- **Apellidos variados:** utiliza listas de apellidos mexicanos y rusos.
- **Selección de cantidad:** permite especificar cuántos registros se desean generar.
- **Múltiples formatos:** permite generar información en SQL para MySQL, SQL para PostgreSQL, CSV y JSON.
- **Descarga de archivos:** permite guardar los datos generados en el formato seleccionado.

## Formatos disponibles

| Formato | Descripción | Archivo generado |
|---|---|---|
| MySQL (SQL) | Genera instrucciones para crear la base de datos, la tabla e insertar los registros. | `sistema_escolar.sql` |
| PostgreSQL (SQL) | Genera instrucciones SQL compatibles con PostgreSQL, incluyendo la creación de la base de datos y la tabla. | `Postgres.sql` |
| CSV | Genera los registros en formato de valores separados por comas, útil para hojas de cálculo y herramientas de análisis. | `sistema_escolar.csv` |
| JSON | Genera los registros como una lista de objetos JSON. | `sistema_escolar.json` |

## Estructura de los datos

Cada registro contiene los siguientes campos:

- `matricula` / `expediente`: identificador numérico único del alumno.
- `apellido1` / `app1`: primer apellido.
- `apellido2` / `app2`: segundo apellido, que puede ser nulo en las versiones SQL.
- `nombre` / `nombres`: nombre completo del alumno, con la posibilidad de incluir un segundo nombre.
- `correo`: dirección de correo electrónico generada a partir de la matrícula.

Los nombres de las columnas varían según el formato de salida.

## Tecnologías utilizadas

- **HTML:** estructura de la interfaz de usuario.
- **CSS:** presentación visual de la aplicación, si se utiliza en el proyecto.
- **JavaScript:** generación aleatoria de los registros, selección del formato, construcción del contenido y descarga de archivos.
- **MySQL:** formato SQL para crear y poblar una base de datos relacional.
- **PostgreSQL:** formato SQL alternativo para trabajar con otro sistema gestor de bases de datos.
- **CSV y JSON:** formatos de intercambio y almacenamiento de datos.

## Instalación y uso

1. Descarga o clona el repositorio del proyecto.
2. Asegúrate de contar con los archivos HTML, JavaScript y CSS necesarios.
3. Abre el archivo HTML principal en un navegador web.
4. Introduce la cantidad de registros que deseas generar.
5. Selecciona el formato de salida.
6. Haz clic en el botón para generar los datos.
7. Revisa el contenido generado en el área de salida.
8. Utiliza la opción de guardar o descargar para obtener el archivo correspondiente.

No se requiere un servidor backend para la generación y descarga de los archivos, ya que estas operaciones se realizan directamente en el navegador.

## Uso de los archivos generados

### MySQL

El archivo SQL contiene instrucciones para crear la base de datos `sistema_escolar`, seleccionar dicha base de datos, crear la tabla `alumnos` 
e insertar los registros generados.

### PostgreSQL

El archivo incluye instrucciones para configurar la codificación, crear la base de datos, definir la tabla `alumnos`
e insertar los registros. Debe ejecutarse en un entorno compatible con PostgreSQL, considerando las particularidades de sus comandos de conexión.

### CSV

El archivo puede abrirse con programas de hojas de cálculo o importarse a diferentes sistemas de gestión de bases de datos.

### JSON

El archivo contiene una colección de objetos con los datos de los alumnos. 
Puede utilizarse para pruebas de aplicaciones, intercambio de información o procesamiento mediante otros programas.

## Consideraciones

- Los registros son ficticios y están destinados a pruebas y actividades académicas.
- Los datos se generan aleatoriamente a partir de las listas definidas en el código.
- La cantidad de registros depende del valor introducido por el usuario.
- Las matrículas se generan de forma consecutiva a partir del número base establecido en el programa.
- Los archivos SQL deben ejecutarse en el sistema gestor de bases de datos correspondiente.
- El archivo PostgreSQL contiene una instrucción para eliminar la base de datos `sistema_escolar`
- si ya existe. Por lo tanto, debe utilizarse con precaución para evitar la pérdida de información.
 La generación de nombres aleatorios no garantiza que todos los registros correspondan a personas
 reales ni que los datos sean representativos de una población.

## Objetivo académico

Este proyecto permite practicar la manipulación de cadenas de texto, el uso de arreglos, 
la generación de datos aleatorios, las estructuras de control, la creación dinámica de contenido y la exportación de información en distintos formatos.

Asimismo, contribuye a comprender cómo se estructura la información para su utilización en 
bases de datos relacionales y formatos de intercambio de datos.

**Institución:** Universidad de Sonora
