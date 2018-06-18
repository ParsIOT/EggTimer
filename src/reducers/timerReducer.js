import { enableWhenStoped, disable } from "../actions";





const initialState={
    time:900.0, //210
    newTime:0,
    startedValue : false,
    wasInBackground:false,
    paused : true,
    stoped: true,
    counter:900.0,  //210
    progressNumber:0,
    factorEggStatus:0,
    factorSize:0,
    factorWaterStatus:0,
    factorEggTemp:0,
    room:1,
    fridge:3,
    sangi:1,
    pokhte:1,
    asaly:3,
    bozorg:1,
    motevasset:1,
    kouchak:3,
    joush:1,
    dagh:1,
    velarm:1,
    sard:3,
    finishingTime:0,
    longPressed:false,    
    detailId:0,
timesdic:{
        '0101': 840, '1101':960 , '2101':1080,
        '0111': 720, '1111':840 , '2111':960,
        '0121': 590, '1121':710 , '2121':830,

        '0001': 810, '1001':930 , '2001':1050,
        '0011': 690, '1011':810 , '2011':930,
        '0021': 560, '1021':680 , '2021':800,

        '0201': 870, '1201':990 , '2201':1110,
        '0211': 750, '1211':870 , '2211':990,
        '0221': 620, '1221':740 , '2221':860,

        '0100': 930, '1100':1050 , '2100':1170,
        '0110': 810, '1110':930 , '2110':1050,
        '0120': 680, '1120':800 , '2120':920,

        '0000': 900, '1000':1020 , '2000':1140,
        '0010': 780, '1010':900 , '2010':1020,
        '0020': 650, '1020':770 , '2020':890, 

        '0200': 960, '1200':1080 , '2200':1200,
        '0210': 840, '1210':960 , '2210':1080,
        '0220': 710, '1220':830 , '2220':950,
},

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
        case 'SELECT_EGG_TEMP':
            return{
                ...state,
                room:1,
                fridge:1,
                [action.status] : 3,
                factorEggTemp: action.factor
            }

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
                counter : state.timesdic[state.factorEggStatus.toString()+state.factorSize .toString()+state.factorWaterStatus.toString()+state.factorEggTemp.toString() ],
                time :state.timesdic[state.factorEggStatus.toString()+state.factorSize .toString()+state.factorWaterStatus.toString()+state.factorEggTemp.toString() ],
                newTime :state.timesdic[state.factorEggStatus.toString()+state.factorSize .toString()+state.factorWaterStatus.toString()+state.factorEggTemp.toString() ],
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
                asaly : myDisable(state.asaly),
                room : myDisable(state.room),
                fridge : myDisable(state.fridge),
            }

        case 'ENABLE_WHEN_STOPED':
        // console.warn(state.room, state.fridge)
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
                room : myEnable(state.room),
                fridge : myEnable(state.fridge),
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
                fridge: action.fridge,
                room : action.room,
                factorEggTemp : action.factorEggTemp
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