import { enableWhenStoped, disable } from "../actions";





const initialState={
    time:702.0, //210
    newTime:0,
    startedValue : false,
    wasInBackground:false,
    paused : true,
    stoped: true,
    counter:702.0,  //210
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
    velarm:3,
    sard:1,
    finishingTime:0,
    longPressed:false,    
    detailId:0,
    // timesdic:{'212': 384.0, '213': 348.0, '210': 834.0, '211': 642.0, '010': 768.0, '011': 534.0, '012': 1122.0, '013': 210.0, '111': 594.0, '110': 804.0, '113': 276.0, '112': 576.0, '201': 588.0, '200': 762.0, '203': 318.0, '202': 348.0, '120': 870.0, '121': 642.0, '001': 486.0, '000': 702.0, '021': 576.0, '020': 828.0, '023': 228.0, '022': 1218.0, '102': 528.0, '103': 252.0, '100': 738.0, '101': 546.0, '223': 372.0, '222': 414.0, '221': 696.0, '220': 906.0, '003': 192.0, '002': 1026.0, '122': 624.0, '123': 300.0},
    // timesdic:{'0220': 280,'1220':340 , '2220': 415 ,'0120': 265,'1120':325 , '2120': 390 ,'0020': 250,'1020':305 , '2020': 370 ,'0200': 700,'1200':760 , '2200': 835 ,'0100': 685,'1100':745 , '2100': 810 ,'0000': 670,'1000':725 , '2000': 790 , '0210': 580,'1210':640 , '2210': 715 ,'0110': 565,'1110':625 , '2110': 690 , '0010': 550,'1010':605 , '2010': 670 ,'0101': 720, '1101':840 , '2101':960,'0111': 590, '1111':710 , '2111':830,        '0121': 300, '1121':420 , '2121':540,        '0001': 690, '1001':810 , '2001':930,        '0011': 560, '1011':680 , '2011':800,        '0021': 270, '1021':390 , '2021':510,        '0201': 750, '1201':870 , '2201':990,        '0211': 620, '1211':740 , '2211':860,        '0221': 330, '1221':450 , '2221':570
// },
timesdic:{
            '0101': 720, '1101':840 , '2101':960,
            '0111': 590, '1111':710 , '2111':830,
            '0121': 300, '1121':420 , '2121':540,

            '0001': 690, '1001':810 , '2001':930,
            '0011': 560, '1011':680 , '2011':800,
            '0021': 270, '1021':390 , '2021':510,

            '0201': 750, '1201':870 , '2201':990,
            '0211': 620, '1211':740 , '2211':860,
            '0221': 330, '1221':450 , '2221':570,

            '0100': 810, '1100':930 , '2100':1050,
            '0110': 680, '1110':780 , '2110':920,
            '0120': 390, '1120':510 , '2120':630,

            '0000': 780, '1000':900 , '2000':1020,
            '0010': 650, '1010':770 , '2010':890,
            '0020': 360, '1020':480 , '2020':600,

            '0200': 840, '1200':960 , '2200':1080,
            '0210': 710, '1210':830 , '2210':950,
            '0220': 410, '1220':540 , '2220':660,},

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