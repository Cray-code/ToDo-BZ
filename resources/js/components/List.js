import React, { Component } from 'react';

const List = ({list}) => {

    const divStyle = {
        color: 'red'
    }

    if(list) {
        return(
            <div>
                <h4 style={divStyle}> {list.name} </h4>
                <p> {list.id} </p>
            </div>
        )
    }
    return ('Нажмите на список для просмотра...')
}

export default List;
