export const selectEggTemp=(status, factor)=>{
    return {
        type : 'SELECT_EGG_TEMP',
        status : status,
        factor : factor
    }
}

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

export const calculateProgressNumber = ()=>{
    return{
        type:'CALCULATE_PROGRESS_NUMBER'
    }
}

export const calculateLastProgressNumber = ()=>{
    return{
        type:'CALCULATE_LAST_PROGRESS_NUMBER'
    }
}

export const inBackground = () =>{
    return{
        type:'IN_BACKGROUND'
    }
}

export const inForeground = ()=>{
    return{
        type:'IN_FOREGROUND'
    }
}

export const setCounter = (lastcounter, diff, time) =>{
    return{
        type:'SET_COUNTER',
        lastcounter : lastcounter,
        diff : diff,
        time : time,
    }
}

export const saveFinishingTime = (time)=>{
    return{
        type:'SAVE_FINISHING_TIME',
        time : time
    }
}


export const pressedLong = () =>{
    return{
        type:'PRESSED_LONG'
    }
}

export const pressedUp = () =>{
    return{
        type:'PRESSED_UP'
    }
}

export const setDetailId = (id) =>{
    return {
        type:'SET_DETAIL_ID',
        id : id
    }
}

export const setProgressNumber = (num)=>{
    return{
        type:'SET_PROGRESS_BAR_NUMBER',
        num : num
    }
}

export const ESES = (factor) =>{
    return{
        type:'ESES',
        factor : factor
    }
}

export const voted = (bool) =>{
    return{
        type:'VOTED',
        bool : bool
    }
}


export const set_status = (statuses)=>{
    // console.warn(statuses)
    return{
        type:'SET_STATUS',
        factorEggStatus: statuses.factorEggStatus,
        factorSize: statuses.factorSize,
        factorWaterStatus: statuses.factorWaterStatus,
        sangi: statuses.sangi,
        pokhte: statuses.pokhte,
        asaly: statuses.asaly,
        bozorg: statuses.bozorg,
        motevasset: statuses.motevasset,
        kouchak: statuses.kouchak,
        joush: statuses.joush,
        dagh: statuses.dagh,
        velarm: statuses.velarm,
        sard: statuses.sard,
        room : statuses.room,
        fridge : statuses.fridge,
        factorEggTemp : statuses.factorEggTemp
    }
}