/* VENDOR */
import React from "react";

/* APPLICATION */
import { ListItem } from "../components/Lists/ListItem";
import { selectAllCategories } from "../store/reducers/categoriesSlice";
import {useAppSelector} from "../store/hooks";

export const Categories = () => {
  const categories = useAppSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <ListItem key={category.id} item={category} />
      ))}
    </ul>
  );
};
