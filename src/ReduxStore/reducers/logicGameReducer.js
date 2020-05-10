
let initialState={
    play:false,
    fleet:[],
    hit:[],
    miss:[],
    message:"press start to enter to battle",
    shootsCounter:0
  }
  
  
  const logicGameReducer = (state=initialState, action) =>{
       switch (action.type){
         case "START_GAME":
            return {...state, play:true, fleet:action.fleet, message:"go"}                     
         case "SHOOT":
                    if(state.play){
                        if (state.fleet.flat().includes(action.cell)){
                            
                            return {...state, hit:[...state.hit, action.cell],
                                message:"hit", shootsCounter:state.shootsCounter+=1 }  
                    
                        }else{return {...state, miss:[...state.miss, action.cell], 
                                message:"miss",shootsCounter:state.shootsCounter+=1} } }  
                                      
        default:
      return state;}
  }
  
  //ActionCreators////////////////////////
  
    export  const startGame = (fleet) =>{
      return{type:"START_GAME", fleet}
    };
    export const shoot = (cell) =>{
        return{type:"SHOOT", cell}
    }
  
  export default logicGameReducer;