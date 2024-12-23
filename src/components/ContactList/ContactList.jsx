import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <ul className={s.container}>
        {contacts.map(({ id, name, number }) => {
          return (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}
