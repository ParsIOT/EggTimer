const initialState={
    time:60,
    newTime:0,
    startedValue : false,
    wasInBackground:false,
    paused : true,
    stoped: true,
    counter:60,
    progressNumber:0,
    factorEggStatus:1,
    factorSize:1,
    factorWaterStatus:1,
    sangi:1,
    pokhte:1,
    asaly:3,
    bozorg:1,
    motevasset:3,
    kouchak:1,
    joush:3,
    dagh:1,
    velarm:1,
    sard:1,
    finishingTime:0
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
                counter : state.counter-1,
            }

        case 'PRESET_COUNTER':
            return{
                ...state,
                counter : action.counter
            }

        case 'CALCULATE_TIME':
            return{
                ...state,
                counter: (state.factorEggStatus * state.factorSize * state.factorWaterStatus)*60,
                time : (state.factorEggStatus * state.factorSize * state.factorWaterStatus)*60,
                newTime : (state.factorEggStatus * state.factorSize * state.factorWaterStatus)*60,
                progressNumber : 0,
            }

        case 'STARTED':
            return{
                ...state,
                startedValue : true,
            }
        
        case 'PAUSED':
            return{
                ...state,
                paused : true,
                startedValue:false
            }

        case 'STOPED':
            return{
                ...state,
                stoped : true,
                startedValue : false,
                progressNumber : 0,
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
                sard : state.sard -1,
                sangi: state.sangi -1,
                pokhte : state.pokhte -1,
                asaly : state.asaly -1,
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
                sard : state.sard + 1,
                sangi: state.sangi +1,
                pokhte : state.pokhte +1,
                asaly : state.asaly +1,
            }

        case 'CALCULATE_PROGRESS_NUMBER':
            return{
                ...state,
                progressNumber : (state.progressNumber + 1/state.time)
            }

        case 'CALCULATE_LAST_PROGRESS_NUMBER':
            return{
                ...state,
                progressNumber : Math.round((state.progressNumber +  (20/state.time) )* 10) / 10
            }
        case 'IN_BACKGROUND':
            return{
                ...state,
                wasInBackground:true
            }
        case 'IN_FOREGROUND':
            return{
                ...state,
                wasInBackground:false
            }
        case 'SET_COUNTER':
            return{
                ...state,
                counter : Math.round(action.lastcounter-action.diff/1000),
                progressNumber : state.progressNumber + ( (action.diff/1000) * (1/state.time))
            }

        case 'SAVE_FINISHING_TIME':
            return{
                ...state,
                finishingTime:action.time
            }
        
        
        
           
        default:
            return state
    }
}