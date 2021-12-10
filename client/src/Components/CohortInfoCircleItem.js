import React from 'react';

function CohortInfoCircleItem({handleSetOpenModal, id, icon, color, rotation, isOpen, transitionDelay}) {
    return (
        <div
            onClick={() => handleSetOpenModal(id)}
            id={id}
            className="menu-item"
            style={{
                backgroundColor: color,
                transform: `rotate(${rotation}deg) translate(${isOpen ? 175 : 0}%)`,
                transitionDelay: `${isOpen ? transitionDelay : 0}ms`
            }}
        >
            <span style={{transform: `rotate(${-rotation}deg)`}}>
                {icon}
            </span>
        </div>
    );
}

export default CohortInfoCircleItem;