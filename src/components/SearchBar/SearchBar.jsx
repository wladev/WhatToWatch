import s from "./SearchBar.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
 
export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        type="text"
        placeholder="Search a tv show may like"
        className={s.input}
      />
    </>
  );
}