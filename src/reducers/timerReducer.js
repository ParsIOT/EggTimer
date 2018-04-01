const initialState={
    time:160,
    factorEggStatus:50,
    factorSize:2,
    factorWaterStatus:20,
    sangi:1,
    pokhte:1,
    asaly:2,
    bozorg:1,
    motevasset:2,
    kouchak:1,
    joush:1,
    dagh:1,
    velarm:2,
    sard:1,
}

export default (state=initialState, action)=>{
    switch (action.type){
        case 'SELECT_EGG_STATUS':
            return{
                ...state,
                sangi:1,
                pokhte:1,
                asaly:1,
                [action.status] : 2,
                factorEggStatus : action.factor
            }
        case 'SELECT_SIZE':
            return{
                ...state,
                bozorg:1,
                motevasset:1,
                kouchak:1,
                [action.size] : 2,
                factorSize : action.factor
            }

        case 'SELECT_WATER_STATUS':
            return{
                ...state,
                joush:1,
                dagh:1,
                velarm:1,
                sard:1,
                [action.status] : 2,
                factorWaterStatus : action.factor
            }

        case 'DISABLE':
            return{
                ...state,
               [action.item] : 0
            }
           
        default:
            return state
    }
}