import React from 'react';

function useLocalStorage(itemName, initialValue) {
  //Creación de estado para el item.
  const [item, setItem] = React.useState(initialValue);
  //Creación de estado para la carga.
  const [loading, setLoading] = React.useState(true);
  //Creación de estado para el error.
  const [error, setError] = React.useState(false);
  //Creamos un efecto que ayuda a renderizar el componente segun la necesidad.
  React.useEffect(() => {
    setTimeout(() => {
      //Manejo de estado del error
      try {
        //Llamado al localStorage  
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([initialValue]));
          parsedItem = [initialValue];
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true)
      }
    }, 3000);
  //Se usa , [] con el fin de indicar que la función useEffect en este caso se ejecuta una sola vez.
  }, []);

  //Función actualizadora de estados,
  //espera recibir un parametro con el texto para ser añadido
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage }

//Codigo para llenar localStorage
// localStorage.removeItem('Info_Cursos')

// const defaultMsg = [
//   { text: "Curso React.js", completed: false },
//   { text: "Taller de React.js con Vite y TailwindCSS", completed: false },
//   { text: "Curso React.js con TypeScript", completed: false },
//   { text: "Curso profesional React Hooks", completed: false },
//   { text: "Curso de React Avanzado", completed: false },
// ];

// localStorage.setItem('Info_Cursos', JSON.stringify(defaultMsg))