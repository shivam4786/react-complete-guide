import React from 'react';
import './Person.css';

const person = (props) => {
    console.log(props);
    return (
        <div className="Person">
            <p onClick={props.click}>
                Im
                {props.name}
                and
                {props.age}
                years old
            </p>
            {/* <p>{propsRecieved.children}</p> */}
            <input type="text" onChange={props.nameChange} value={props.name} />
        </div>
    );
};

export default person;
