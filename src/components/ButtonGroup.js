import React from 'react';
import '../App.css';
import { setTechnology } from '../actions';
import { store } from '../store'


const dispatchBtnClick = (e) => {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
    // console.log(store)
}

const ButtonGroup = ({ technologies }) => {
    return (
        <div className='btn-container'>
            {technologies.map((tech, i) => {
                return (
                    <button
                        data-tech={tech}
                        key={`btn-${i}`}
                        className='hello-btn'
                        onClick={dispatchBtnClick}>
                        {tech}
                    </button>)
            })}
        </div>
    )
}

export default ButtonGroup;