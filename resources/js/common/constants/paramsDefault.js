import moment from 'moment';

export const dfltTaskParam = {
    TASK_TERM_ID : 2,
    TASK_REPEAT_ID : 1,
    TASK_DESCRIPTION : 'Описание не задано',
    TASK_LIST_ID : 0,
    TASK_IS_COMPLETE : 0,
    TASK_FAVORITES : 0,
    TASK_IS_ALERT : 0,
    TASK_DEADLINE: moment().add(1, 'days').format('L'),
    TASK_CRONTIME: moment().add(1, 'days').format('L')
};



        // 'DESCRIPTION',
        // 'DEADLINE',
        // 'IS_ALERT',
        // 'IS_COMPLETE',
        // 'LIST_ID',
        // 'TERM_ID',
        // 'REPEAT_ID',
        // 'CRONtIME',
        // 'FAVORITES'