import { FC } from "react";
import { Todo } from "../Types.";
import { TodoItem } from "./TodoItem";


type UseEffectLessonProps = {
    todoArray: Todo[]
}

export const UseEffectLesson:FC<UseEffectLessonProps> = ({
    todoArray
}) => {

    return(
        <>
            <ul>
                {
                    todoArray.map((todo) => {
                        return <TodoItem item={todo} key={todo.id} />
                    })
                }
            </ul>
        </>
    );
}