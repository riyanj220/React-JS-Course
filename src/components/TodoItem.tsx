import { FC } from "react";
import { Todo } from "../Types.";



type TodoItemProps = {
    item: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({item}) => {
    return (
        <li id={`todo_item_${item.id}`}>
            {item.title}
        </li>
    );
};