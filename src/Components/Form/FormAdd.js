import React from "react";
import './FormAdd.css'
import { Context } from "../Context/Context";

function FormAdd() {
    const {
        addItem,
        setOpenModal,
    } = React.useContext(Context);
    // Se usa para guardar el texto del text area
    const [newTextValue, setNewTextValue] = React.useState('');

    const onSubmit = (event) => {
        //Evento para prevenir recarga por defecto del formulario
        event.preventDefault();
        addItem(newTextValue)
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTextValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Nombre del curso a agregar</label>
            <textarea
                placeholder="Nombre del curso"
                value={newTextValue}
                onChange={onChange}
            />
            <div className="button-container">
                <button
                    type="button"
                    className="button-form button-form--cancel"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="button-form button-form--add">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { FormAdd };