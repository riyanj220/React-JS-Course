import { Todo } from "../../Types.";

export const getTodos = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const jsonResp = await resp.json();

    return jsonResp as Todo[];
}