/* VENDOR */
import React from "react";
import { useState } from "react";

/* APPLICATION */
import down from "../../../assets/icons/down.svg";
import { selectAllCategories } from "../../../store/reducers/categoriesSlice";
import {useAppSelector} from "../../../store/hooks";

interface ModalDropdownProps {
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState(false),
    options = useAppSelector(selectAllCategories);

  return (
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <span className="dropdown-label">Категория</span>
      <div className={selected ? "dropdown-btn" : "dropdown-btn placeholder"}>
        {options.find((option) => option.id === selected)?.name ||
          "Выберите категорию"}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              className="dropdown-item"
              onClick={() => {
                setSelected(option.id);
                setIsActive(false);
              }}
              key={option.id}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
