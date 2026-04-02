import "../styles/NewListConfMenu.css";
import { useCardsContext } from "../contexts/CardsContext";
import { useRef, useEffect, use } from "react";
function NewListConfMenu({ setAddNewCollection }) {
  const { cardsCollections, setCardsCollections } = useCardsContext();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const close_btn = (event) => {
    setAddNewCollection(false);
  };
  function create_btn() {
    if (inputRef.current.value.trim() === "") {
      console.log("Empty");
      inputRef.current.focus();
      alert("Please, enter the name of the new collection");
    } else {
      setCardsCollections((prev) => [
        ...prev,
        { title: inputRef.current.value.trim() },
      ]);
      close_btn();
    }
  }
  useEffect(() => {
    console.log(cardsCollections);
  }, [cardsCollections]);
  useEffect(() => {
    function handleClickOutside(event) {
      const clickedInsideMenu = menuRef.current?.contains(event.target);
      const clickedInsideButton = buttonRef.current?.contains(event.target);
      if (!clickedInsideMenu || clickedInsideButton) {
        close_btn();
      }
    }
    function keyPressHandler(event) {
      if (event.key == "Enter") {
        create_btn();
      }
      console.log("KeyPress: ", event.key);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, []);

  return (
    <div className="NewListConfMenuBody">
      <div ref={menuRef} className="panel_box">
        <button ref={buttonRef} className="close_btn">
          x
        </button>
        <div className="panel_box_main">
          <p>Create new collection</p>
          <input ref={inputRef} placeholder="collection title..." type="text" />
          <button onClick={create_btn}>create</button>
        </div>
      </div>
    </div>
  );
}
export default NewListConfMenu;
