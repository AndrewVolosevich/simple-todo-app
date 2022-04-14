import React, {useMemo, useState} from 'react';
import './App.scss';
import {createTodoItem} from "./utils";
import Header from "../Header/Header";
import Search from "../Search/Search";
import StatusFilter from "../StatusFilter/StatusFilter";
import ToDoList from "../ToDoList/ToDoList";
import AddItemForm from "../AddItemForm/AddItemForm";

const App = () => {
    const [toDoData, setToDoData] = useState([
        createTodoItem('sarcasm'),
        createTodoItem('drink coffee'),
        createTodoItem('sarcasm again'),
        createTodoItem('fix bug'),
    ]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('active');

    const doneCount = toDoData.filter((el) => { return el.done === true; }).length;
    const todoCount = toDoData.length - doneCount;

    const deleteItem = (id) => {
        setToDoData((todoData) => {
            return todoData.filter(data => data.id !== id);
        });
    };

    const addItem = (text) => {
        if (text) {
            setToDoData((todoData ) => [...todoData, createTodoItem(text)]);
        }
    };

    const onToggleImportant = (id) => {
        setToDoData(( todoData ) => {
            return todoData.map(data => {
                if (data.id === id) {
                    return {...data, important: !data.important}
                } else {
                    return data
                }
            })
        });
    };

    const onToggleDone = (id) => {
        setToDoData(toDoData => {
            return toDoData.map(data => {
                if (data.id === id) {
                    return {...data, done: !data.done}
                } else {
                    return data
                }
            })
        })
    };

    const searchItems = useMemo(() => {
        if (term.length === 0) {
            return toDoData;
        }

        return toDoData.filter((item) => {
            return item.label.toLowerCase().indexOf(term) > -1;
        });
    }, [toDoData, term]);

    const visibleItems = useMemo(() => {
        switch (filter) {
            case 'active':
                return searchItems.filter((item) => { return item.done === false; });

            case 'done':
                return searchItems.filter((item) => { return item.done === true; });

            default:
                return searchItems;
        }
    }, [searchItems, filter])

    return (
        <div className="todo-app">
            <Header toDo={todoCount} done={doneCount} />
            <div className="top-panel d-flex">
                <Search
                    term={term}
                    onSearchChange={setTerm}
                />
                <StatusFilter
                    onFilterChange={setFilter}
                    filter={filter}
                />
            </div>

            <ToDoList
                todos={visibleItems}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
            />
            <AddItemForm
                onAdd={addItem}
            />
        </div>
    );
}

export default App;


