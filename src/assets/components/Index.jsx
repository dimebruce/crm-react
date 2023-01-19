import React from 'react'
// Importamos useLoaderData para poder hacer uso de lo que exista en el loader, importante checar el main.jsx
// Importamos cliente del componente para ahorra codigo
import { useLoaderData } from 'react-router-dom'
import Cliente from './Cliente';

// Loader para manejo similar a useEffect pero para routerDOM
export function loader(){
    // JSON de clientes
    const clientes = [
        {
            id: 1,
            nombre: 'Mariana González Pérez ',
            telefono: 9028371450,
            email: "mgarcia@gmail.com",
            empresa: 'Global Solutions Group'
        },
        {
            id: 2,
            nombre: 'Jorge López García',
            telefono: 9028371451,
            email: "jlopez@yahoo.com",
            empresa: 'Bright Ideas Inc.'
        },
        {
            id: 3,
            nombre: 'Alejandro Rodríguez Martínez',
            telefono: 9028371452,
            email: "arodriguez@hotmail.com",
            empresa: 'Tech Solutions Ltd.'
        },
        {
            id: 4,
            nombre: 'Andrea Sánchez Díaz ',
            telefono: 9028371453,
            email: "asanchez@outlook.com ",
            empresa: 'Digital Innovations Co.'
        },
        {
            id: 5,
            nombre: 'Sofía Gómez Ramírez',
            telefono: 9028371454,
            email: "sgomez@aolmail.com",
            empresa: 'Creative Enterprises LLC'
        },
    ];

    return clientes
}

const Index = () => {

    const clientes = useLoaderData()

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
        <p className='mt-3 font-black'>✅ Administra tus clientes</p>

        {/* Iterar los clientes que existen o no */}

        { clientes.length ? (
            <div className="overflow-x-auto">
            <table className="table table-zebra mt-5 table-auto w-full">
              {/* <!-- head --> */}
              <thead className='bg-blue-800 text-white'>
                <tr>
                  <th className='p-2'>👇</th>
                  <th className='p-2'>Cliente</th>
                  <th className='p-2'>Empresa</th>
                  <th className='p-2'>Email</th>
                  <th className='p-2'>Télefono</th>
                  <th className='p-2'>Acciones</th>
                </tr>
              </thead>
              <tbody>

                {/* Aquí va el mapeo de los clientes */}
                {clientes.map( cliente => (
                  <Cliente
                    cliente={cliente}
                    key={cliente.id}
                  />                  
                ))}
              </tbody>
            </table>
          </div>
        ) : (
            <p className='text-black text-center'> 😢 No hay clientes aún</p>
        ) }
    </>
  )
}

export default Index
