import React from "react";
import { CheckCounter } from "../CheckCounter/CheckCounter";
import { Item } from "../Item/Item";
import { Search } from "../Search/Search";
import { List } from "../List/List";
import { ButtonCreate } from "../ButtonCreate/ButtonCreate";
import { Context } from "../Context/Context";
import { Modal } from "../Modal/Modal";
import { FormAdd } from "../Form/FormAdd";


//Importo todo lo necesario por medio de Props
function AppUI() {

    //Del componente creado Context.js podemos usar toda su info solo con llamar con React.useContext
    const {
        loading,
        error,
        searchText,
        completeItem,
        deleteItem,
        openModal,
        setOpenModal
    } = React.useContext(Context);

    return (
        <>
            <CheckCounter />
            <Search />

            <List>
                {loading && <p>Cargando contenido...</p>}
                {error && <p>Ha ocurrido un error!</p>}
                {(!loading && searchText.length === 0) && <p>No hay cursos que cumplan el filtro.</p>}

                {searchText.map((msg) => (
                    <Item
                        key={msg.text}
                        text={msg.text}
                        completed={msg.completed}
                        onComplete={() => completeItem(msg.text)}
                        onDelete={() => deleteItem(msg.text)}
                    />
                ))}
            </List>

            <ButtonCreate
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <FormAdd></FormAdd>
                </Modal>
            )}
        </>
    );
}

export { AppUI }