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
