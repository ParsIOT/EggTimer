import { enableWhenStoped, disable } from "../actions";





const initialState={
    time:10.0, //210
    newTime:0,
    startedValue : false,
    wasInBackground:false,
    paused : true,
    stoped: true,
    counter:10.0,  //210
    progressNumber:0,
    factorEggStatus:0,
    factorSize:1,
    factorWaterStatus:3,
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
    finishingTime:0,
    longPressed:false,    
    detailId:0,
    timesdic:{'212': 384.0, '213': 348.0, '210': 834.0, '211': 642.0, '010': 768.0, '011': 534.0, '012': 1122.0, '013': 210.0, '111': 594.0, '110': 804.0, '113': 276.0, '112': 576.0, '201': 588.0, '200': 762.0, '203': 318.0, '202': 348.0, '120': 870.0, '121': 642.0, '001': 486.0, '000': 702.0, '021': 576.0, '020': 828.0, '023': 228.0, '022': 1218.0, '102': 528.0, '103': 252.0, '100': 738.0, '101': 546.0, '223': 372.0, '222': 414.0, '221': 696.0, '220': 906.0, '003': 192.0, '002': 1026.0, '122': 624.0, '123': 300.0},
    sizeSet:['بین 30 تا 50 گرم' ,  'بین 50 تا 55 گرم',  'بین 55 تا 60 گرم' ],
    eggStatusSet:['عسلی', 'نیمه پخته', 'پخته'],
    waterStatusSet:['حدود ۴ درجه', 'حدود ۲۷ درجه', 'بین 27 تا 60 درجه', 'بین 60 تا 100 درجه'],
    eggStatusList:['asaly', 'pokhte', 'sangi'],
    eggSizeList :['kouchak', 'motevasset', 'bozorg'],
    waterStatusList:['sard', 'velarm', 'dagh', 'joush'],
    votedBool:false
    
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
                // Math.pow(state.factorSize,(2/3)) * 3.7 * Math.pow(1.038, (1/3))
                // 0.0054 * Math.pow(Math.PI, 2) * Math.pow( (4*Math.PI/3),(2/3))
                // Math.log(0.76 *  (15 - state.factorWaterStatus) / (state.factorEggStatus - state.factorWaterStatus))
                // counter: (state.factorEggStatus * state.factorSize * state.factorWaterStatus)*60,
                counter : state.timesdic[state.factorEggStatus.toString()+state.factorSize .toString()+state.factorWaterStatus.toString() ],
                time :state.timesdic[state.factorEggStatus.toString()+state.factorSize .toString()+state.factorWaterStatus.toString() ],
                newTime :state.timesdic[state.factorEggStatus.toString()+state.factorSize .toString()+state.factorWaterStatus.toString() ],
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
                bozorg : myDisable(state.bozorg),
                motevasset : myDisable(state.motevasset),
                kouchak : myDisable(state.kouchak),
                joush : myDisable(state.joush),
                dagh : myDisable(state.dagh) ,
                velarm : myDisable(state.velarm),
                sard : myDisable(state.sard),
                sangi: myDisable(state.sangi),
                pokhte : myDisable(state.pokhte),
                asaly : myDisable(state.asaly)
            }

        case 'ENABLE_WHEN_STOPED':
            return{
                ...state,
                bozorg : myEnable(state.bozorg),
                motevasset : myEnable(state.motevasset),
                kouchak : myEnable(state.kouchak),
                joush : myEnable(state.joush),
                dagh : myEnable(state.dagh),
                velarm : myEnable(state.velarm),
                sard : myEnable(state.sard),
                sangi: myEnable(state.sangi),
                pokhte : myEnable(state.pokhte),
                asaly : myEnable(state.asaly),
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
                time:  action.time,
                progressNumber : state.progressNumber + ( (action.diff/1000) * (1/action.time))
            }

        case 'SAVE_FINISHING_TIME':
            return{
                ...state,
                finishingTime:action.time
            }

        
        case 'PRESSED_LONG':
            return{
                ...state,
                longPressed:true,
            }
        
        case 'PRESSED_UP':
            return{
                ...state,
                longPressed:false,
            }
        case 'SET_DETAIL_ID':
            return{
                ...state,
                detailId: action.id
            }
        
        case 'SET_PROGRESS_BAR_NUMBER':
            return{
                ...state,
                progressNumber : action.num
            }
        
        case 'ESES':
            return{
                ...state,
                [state.eggStatusList[action.factor]] : state.eggStatusList[action.factor] +2
            }
        
        case 'VOTED':
            return{
                ...state,
                votedBool : action.bool
            }
        
        case 'SET_STATUS':
            return{
                ...state,
                factorEggStatus: action.factorEggStatus,
                factorSize: action.factorSize,
                factorWaterStatus: action.factorWaterStatus,
                sangi: action.sangi,
                pokhte: action.pokhte,
                asaly: action.asaly,
                bozorg: action.bozorg,
                motevasset: action.motevasset,
                kouchak: action.kouchak,
                joush: action.joush,
                dagh: action.dagh,
                velarm: action.velarm,
                sard: action.sard,
            }
        default:
            return state
    }
}


function myEnable( status){
    if (status === 0) return 1
    else if (status === 2) return 3
    else return status
}

function myDisable( status ){
    if (status === 1) return 0
    else if (status === 3) return 2
    else return status
}