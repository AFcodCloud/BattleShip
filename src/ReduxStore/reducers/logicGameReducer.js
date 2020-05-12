
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
         case "STOP":
            return {...state, play:false, fleet:[],
                hit:[], miss:[], 
                message:"press start to enter to battle", shootsCounter:0}                     
         case "MESSAGE":
            if(state.play){
             return {...state, message:action.payload}
            }else {return state }
         case "HIT":
             if(state.play){
             return {...state, hit:[...state.hit, action.payload], 
                     message:"hit", shootsCounter:state.shootsCounter+1}
                    }else {return state }
                    
         case "MISS":
            if(state.play){
             return {...state, miss:[...state.miss, action.payload], 
                     message:"miss", shootsCounter:state.shootsCounter+1}
                    }else{return state}
                    
         case "WIN":
             return {...state, hit:[...state.hit, action.payload], 
                     message:`you won in ${state.shootsCounter+1} moves`, play:false}
                                      
        default: return state;}
  }
  
  //ActionCreators////////////////////////
  
    export  const startGame = (fleet) =>{
      return{type:"START_GAME", fleet}
    };
    export const shoot = ({type, payload}) =>{
        return{type, payload}
    }
    export const stop = () =>{
        return{type:"STOP"}
    }
  
  export default logicGameReducer;