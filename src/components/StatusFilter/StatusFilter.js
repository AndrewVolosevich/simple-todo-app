import React, {useMemo} from 'react';
import './StatusFilter.scss';

const StatusFilter = ({ filter, onFilterChange }) => {
    const buttons = useMemo(() => {
        return [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'done', label: 'Done'},
        ]
    }, [])

    const btns = buttons.map(({ name, label }) => {
        const isActive = filter === name;
        const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary';
        return (
            <button
                type="button"
                className={`btn ${btnClass}`}
                key={ name }
                onClick={ () => onFilterChange(name) }
            >
                { label }
            </button>
        )
    })

    return (
        <div className="btn-group item-status-filter">
            { btns }
        </div>
    );
};

export default StatusFilter;
