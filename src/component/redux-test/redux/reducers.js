/**
 * Created by YIZHI-SHIXI on 2019/5/31.
 */

/*包含N个reducer函数的模块*/

import {INCREMENT,DECREMENT} from './action-type'
export function counter(state = 0,action) {

    console.log('counter()',state,action)
    switch (action.type){
        case INCREMENT :
            return state+action.data
        case DECREMENT :
            return state-action.data
        default :
            return state
    }
}