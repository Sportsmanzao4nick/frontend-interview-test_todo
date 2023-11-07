import React from "react";
import {useLocation} from "react-router-dom";

interface ModalTextareaProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalTextarea: React.FC<ModalTextareaProps> = ({
  description,
  setDescription,
}) => {
    const {pathname} = useLocation();
    const isCategories = pathname.includes("tasks");

    const text = `Введите имя ${isCategories ? "задачи" : "категории"}`;
  return (
    <div className="modaltextarea-wrapper">
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        id="modaltextarea"
        className="modaltextarea"
        placeholder={text}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
