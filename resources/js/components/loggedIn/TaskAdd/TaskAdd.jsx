import React from "react";

import { withStyles } from '@material-ui/core/styles';
import styles from "./style";

function TaskAdd(props) {

    

    return (
        <div className="create-list">
            
                        Добавить задачу
                    
        </div>
    );
}

export default (withStyles(styles, { withTheme: true })(TaskAdd));
