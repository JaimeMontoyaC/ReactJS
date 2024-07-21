import "./ButtonCreate.css";
import { FaPlus } from 'react-icons/fa';

function ButtonCreate({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal(state => !state);
      }}
    >
      <FaPlus />
    </button>
  );
}

export { ButtonCreate };
