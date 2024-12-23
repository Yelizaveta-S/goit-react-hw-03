import s from "./SearchBox.module.css";

export default function SearchBox({ value, handler }) {
  return (
    <div className={s.searchContainer}>
      <label className={s.label}>
        Find contacts by name
        <input type="text" value={value} onChange={handler} />
      </label>
    </div>
  );
}
