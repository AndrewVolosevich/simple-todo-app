export const createTodoItem = (label, maxId) => {
    return {
        label,
        important: false,
        done: false,
        id: new Date() + Math.random(),
    };
};