import React, {useState} from 'react';
import './AddItemForm.scss'

const AddItemForm = ({onAdd}) => {
    const [label, setLabel] = useState('');

    const onLabelChange = (evt) => {
        setLabel(evt.target.value)
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAdd(label);
        setLabel('')
    }

    return (
        <form
            className="item-add-form d-flex"
            onSubmit={onSubmit}
        >
            <input
                type="text"
                className="form-control"
                onChange={onLabelChange}
                placeholder="What needs to be done"
                value={label}
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >
                Add
            </button>
        </form>
    );
};

export default AddItemForm;

