

export type Todo = {
    title: string;
    id: number;
    completed: boolean;
    userId: number;
}

export type Note = {
    title:string;
    id: number;
    completed: boolean;
};

export type Contact = {
    name: {
        first: string;
        last: string;
    },
    login: {
        uuid:string;
    },
    email: string;
    picture: {
        thumbnail: string;
        medium: string;
        large: string;
    }
}