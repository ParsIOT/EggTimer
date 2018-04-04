export const selectEggStatus = ( status, factor )=>{
    return {
        type : 'SELECT_EGG_STATUS',
        status : status,
        factor : factor
    }
}

export const selectSize = ( size, factor )=>{
    return {

        type : 'SELECT_SIZE',
        size : size,
        factor : factor,
    }
}

export const selectWaterStatus = ( status, factor )=>{
    return {

        type : 'SELECT_WATER_STATUS',
        status : status,
        factor : factor,
    }
}

export const disable = ( item )=>{
    return {
        type : 'DISABLE',
        item :  item
    }
}

export const decCounter = () => {
    return {
        type : 'DECREMENT_COUNTER'
    }
}

export const presetCounter = ( cnt ) => {
    return{
        type : 'PRESET_COUNTER',
        counter : cnt
    }
}

export const calculateTime = () =>{
    return{
        type : 'CALCULATE_TIME'
    }
}

export const started = () =>{
    return{
        type: 'STARTED'
    }
}

export const paused = () =>{
    return{
        type: 'PAUSED'
    }
}

export const stoped = () =>{
    return{
        type: 'STOPED'
    }
}

export const calculateNewTime = () =>{
    return{
        type:'CALCULATE_NEW_TIME',
    }
}

export const changedDuringTiming = ()=>{
    return{
        type:'CHANGE_DURING_TIMING',
    }
}

export const disableWhenStarted = () =>{
    return{
        type:'DISABLE_WHEN_STARTED',
    }
}

export const enableWhenStoped = () =>{
    return{
        type: 'ENABLE_WHEN_STOPED',
    }
}