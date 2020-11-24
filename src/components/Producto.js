import React from 'react';
import { Link } from 'react-router-dom';

const Producto = ({producto}) => {
 //console.log(producto)
   const { nombre, precio, id } = producto
   
    return ( 
        <tr>

         
         <td>{nombre}</td>
            <td><span className="font-weight-bold"> $ {precio} </span></td>
            <td className="acciones">
                <Link to = {`/productos/editar/${id}`}>
                    Editar
                </Link>
                <button
                tipe="button"
                className="btn btn-danger"
                >Eliminar</button>

            </td> 

        </tr>
     );
}
 
export default Producto;