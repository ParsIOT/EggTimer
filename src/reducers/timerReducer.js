const initialState={
    time:160,
    newTime:0,
    started : false,
    paused : true,
    stoped: true,
    counter:50,
    factorEggStatus:50,
    factorSize:3,
    factorWaterStatus:20,
    sangi:1,
    pokhte:1,
    asaly:3,
    bozorg:1,
    motevasset:3,
    kouchak:1,
    joush:1,
    dagh:1,
    velarm:3,
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
                [action.status] : 3,
                factorEggStatus : action.factor
            }
        case 'SELECT_SIZE':
            return{
                ...state,
                bozorg:1,
                motevasset:1,
                kouchak:1,
                [action.size] : 3,
                factorSize : action.factor
            }

        case 'SELECT_WATER_STATUS':
            return{
                ...state,
                joush:1,
                dagh:1,
                velarm:1,
                sard:1,
                [action.status] : 3,
                factorWaterStatus : action.factor
            }

        case 'DISABLE':
            return{
                ...state,
               [action.item] : 0
            }

        case 'DECREMENT_COUNTER':
            return{
                ...state,
                counter : state.counter-1
            }

        case 'PRESET_COUNTER':
            return{
                ...state,
                counter : action.counter
            }

        case 'CALCULATE_TIME':
            return{
                ...state,
                counter: (state.factorEggStatus * state.factorSize * state.factorWaterStatus)/100,
                time : (state.factorEggStatus * state.factorSize * state.factorWaterStatus)/100,
                newTime : (state.factorEggStatus * state.factorSize * state.factorWaterStatus)/100,
            }

        case 'STARTED':
            return{
                ...state,
                started : true,
            }
        
        case 'PAUSED':
            return{
                ...state,
                paused : true,
            }

        case 'STOPED':
            return{
                ...state,
                stoped : true,
            }

        case 'CALCULATE_NEW_TIME':
            return{
                ...state,
                newTime: (state.factorEggStatus * state.factorSize * state.factorWaterStatus)/100,
                counter : (state.factorEggStatus * state.factorSize * state.factorWaterStatus)/100
            }

        case 'DISABLE_WHEN_STARTED':
            return{
                ...state,
                bozorg : state.bozorg - 1,
                motevasset : state.motevasset - 1,
                kouchak : state.kouchak - 1 ,
                joush : state.joush - 1 ,
                dagh : state.dagh -1 ,
                velarm : state.velarm -1,
                sard : state.sard -1
            }

        case 'ENABLE_WHEN_STOPED':
            return{
                ...state,
                bozorg : state.bozorg + 1,
                motevasset : state.motevasset + 1,
                kouchak : state.kouchak + 1 ,
                joush : state.joush + 1 ,
                dagh : state.dagh + 1 ,
                velarm : state.velarm +1,
                sard : state.sard + 1
            }
           
        default:
            return state
    }
}