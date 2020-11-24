import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR

} from '../types'

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//Crear nuevo productos

export function crearNuevoProductoAction(producto){

      //  console.log(producto)
       return async (dispatch) => { 
           dispatch( agregarProducto () );
           try {
               //Insertar en API
               await clienteAxios.post('/productos', producto);

               //Si todo ok actualiza state
               dispatch( agregarProductoExito(producto))

               //Alerta
               Swal.fire(
                   'Correcto',
                   'El producto se agregó correctamente',
                   'success'
               )
           } catch (error) {
              console.log(error);
               //Si hay un error cambiar el state
               dispatch( agregarProductoError(true))

               //Alerta de error

               Swal.fire({
                   icon:'error',
                   title: 'Hubo un error',
                   text:'Hubo un error, intenta de nuevo'
               })
           }
       }
    }


const agregarProducto = () => ({
    type:AGREGAR_PRODUCTO,
    payload: true
})

// Si el producto se agrega 

const agregarProductoExito = (producto) =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
}
)

// si hay error

const agregarProductoError = (estado) =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado

})


//Funcion que descarga los productos del api

export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch (descargarProductos() );
        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch (descargaProductosExitosa(respuesta.data))
         
         //  console.log(respuesta.data);
        } catch (error) {
            console.log(error);
            dispatch ( descargaProductosError() )            
        }
;    }
}

const descargarProductos = ()  => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})


const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true

})