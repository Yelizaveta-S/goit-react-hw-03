import s from "./Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ name, number, id, onDelete }) {
  return (
    <li className={s.listItem}>
      <div>
        <p className={s.infoItem}>
          <FaUserLarge />
          {name}
        </p>
        <p className={s.infoItem}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={s.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
