import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const Context = React.createContext();

function MyProvider({ children }) {

    //Manejo de estados para implementación en lista
    const {
        item: msgs,
        saveItem: saveMsg,
        loading,
        error
    } = useLocalStorage('Info_Cursos', []);
    //Manejo de estados para implementación en search
    const [searchInputValue, setSearchInputValue] = React.useState("");
    //Manejo de estados para modal
    const [openModal, setOpenModal] = React.useState(false);
    //Envio de propiedades para checkCounter (la doble negación convierte en boolean todo lo adyacente)
    const completedCurses = msgs.filter((msg) => !!msg.completed).length;
    const totalCursos = msgs.length;
    //Busqueda o filtro para el inputSearch
    //Este es un estado derivado, en este caso, derivado de la lista, con propiedad search
    const searchText = msgs.filter((msg) => {
        return msg.text.toLowerCase().includes(searchInputValue.toLowerCase());
    });
    //Función actualizadora de estados,
    //espera recibir un parametro con el texto con el que sabemos cual todo completar
    const addItem = (text) => {
        //Creo una variable y con los 3 puntos genero una copía del estado del array
        const newMsgs = [...msgs];
        //Utilizamos el metodo push para agregar un elemento al final del arreglo
        //Es decir, el nuevo curso, al final de la lista, ya existente.
        newMsgs.push({
            text,
            completed: false
        });
        saveMsg(newMsgs);
    };
    //Función actualizadora de estados,
    //espera recibir un parametro con el texto con el que sabemos cual todo completar
    const completeItem = (text) => {
        //Creo una variable y con los 3 puntos genero una copía del estado del array
        const newMsgs = [...msgs];
        //Se encarga de buscar dentro del estado, en su index. La funcion find tiene mas opciones que esta.
        const msgIndex = newMsgs.findIndex(
            (msg) => msg.text === text
        );
        newMsgs[msgIndex].completed = true;
        saveMsg(newMsgs);
    };
    //Función actualizadora de estados,
    //espera recibir un parametro con el texto con el que sabemos cual todo eliminar
    const deleteItem = (text) => {
        //Creo una variable y con los 3 puntos genero una copía del estado del array
        const newMsgs = [...msgs];
        //Se encarga de buscar dentro del estado, en su index. La funcion find tiene mas opciones que esta.
        const msgIndex = newMsgs.findIndex(
            (msg) => msg.text === text
        );
        //El metodo Splice nos pide una posición en donde se situará, es decir, el indice
        //y cuanto debe quitar a partir de allí.
        newMsgs.splice(msgIndex, 1);
        saveMsg(newMsgs);
    };

    return (
        <Context.Provider value={{
            loading,
            error,
            completedCurses,
            totalCursos,
            searchInputValue,
            setSearchInputValue,
            searchText,
            addItem,
            completeItem,
            deleteItem,
            openModal,
            setOpenModal,
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, MyProvider }