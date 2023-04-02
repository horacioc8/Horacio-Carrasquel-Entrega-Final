# Documentación del Proyecto
### -Descripción
Este proyecto es un sitio web de e-commerce que permite a los usuarios comprar productos en línea. Cuenta con diferentes categorías de productos, una página de detalle de producto, un carrito de compras y una página de checkout.

El proyecto fue construido utilizando React como framework de frontend y Firebase como base de datos en tiempo real. También se utilizaron algunas librerías adicionales como React Router DOM y SCSS para el manejo de rutas y estilos respectivamente.

## Funcionalidades

##### getItemFromDatabase()


- Descripción: función asíncrona que obtiene todos los productos almacenados en la base de datos de Firebase.
- Retorno: un array con todos los productos almacenados en la base de datos.

##### getItemByCategoryDatabase(categoryURL)
Descripción: función asíncrona que obtiene todos los productos de una categoría específica almacenados en la base de datos de Firebase.

- categoryURL: un string que indica la categoría de los productos a obtener.
- Retorno: un array con los productos de la categoría especificada almacenados en la base de datos.

##### ItemListContainer()

- Descripción: componente de React que se encarga de mostrar los productos en el sitio web.
- Retorno: un componente ItemList que muestra los productos obtenidos a través de las funciones getItemFromDatabase() o         getItemByCategoryDatabase(categoryURL).


#### ItemList()
- Descripción: componente de React que se encarga de mostrar una lista de productos.
- items: un array con los productos a mostrar.
- Retorno: una lista de productos, donde cada producto incluye su imagen, nombre, marca, precio y oferta (si corresponde).
navigate(url)
-Descripción: función que redirige al usuario a una URL específica utilizando useNavigate de React Router DOM.
url: un string que indica la URL a la que se desea redirigir.

## Instalación
Para instalar y ejecutar el proyecto en tu computadora, sigue los siguientes pasos:

1- Clona el repositorio en tu computadora: git clone https://github.com/TU_USUARIO/nombre-del-repositorio.git.
2- Instala las dependencias del proyecto: npm install.
3- Crea un archivo .env en la raíz del proyecto y añade tus credenciales de Firebase de la siguiente forma:
makefile
Copy code

REACT_APP_API_KEY=TU_API_KEY
REACT_APP_AUTH_DOMAIN=TU_AUTH_DOMAIN
REACT_APP_PROJECT_ID=TU_PROJECT_ID
REACT_APP_STORAGE_BUCKET=TU_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
REACT_APP_APP_ID=TU_APP_ID

4- Ejecuta el proyecto con npm start.


