import "./Item.css";
import { FaCheck, FaTimesCircle } from 'react-icons/fa';

function Item(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FaTimesCircle />
      </span>
    </li>
  );
}

export { Item };
