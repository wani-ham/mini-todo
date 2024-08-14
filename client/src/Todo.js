import React from 'react';

export default function Todo({item}) {
    return (
        <>
            <div className="Todo">
                <input 
                    type="checkbox"
                    id={`todo${item.id}`}
                    name={`todo${item.id}`}
                    value={`todo${item.id}`}
                    defaultChecked={item.done}
                ></input>
                <label htmlFor={`todo${item.id}`}>{item.title}</label>
            </div>
            
        </>
    );
}