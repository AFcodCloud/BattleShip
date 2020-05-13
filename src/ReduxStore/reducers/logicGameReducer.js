
let initialState={
    play:false,
    destroyed:[2],
    wound:[2],
    miss:[3],
    message:"press start to enter to battle",
    shootsCounter:0
  }
  
  
  const logicGameReducer = (state=initialState, action) =>{
       switch (action.type){
         case "START_GAME":
            return {...state, play:true, message:"go"}                     
         case "STOP":
            return {...state, play:false, destroyed:[],
                wound:[], miss:[], 
                message:"press start to enter to battle", shootsCounter:0}                     
         case "MESSAGE":
            if(state.play){
             return {...state, message:action.payload}
            }else {return state }
         case "WOUND":
             if(state.play){
             return {...state, wound:[...action.payload], 
                     message:"wound!!!", shootsCounter:state.shootsCounter+1}
                    }else {return state }
         case "DESTROYED":
             if(state.play){
             return {...state, destroyed:[...action.payload], 
                     message:"destroyed!!!", shootsCounter:state.shootsCounter+1}
                    }else {return state }
                    
         case "MISS":
            if(state.play){
             return {...state, miss:[...action.payload], 
                     message:"miss...", shootsCounter:state.shootsCounter+1}
                    }else{return state}
                    
         case "WIN":
             return {...state, destroyed:[...action.payload], 
                     message:`you won in ${state.shootsCounter+1} moves`, play:false}
                                      
        default: return state;}
  }
  
  //ActionCreators////////////////////////
  
    export  const startGame = () =>{
      return{type:"START_GAME"}
    };
    export const shoot = ({type, payload}) =>{
        return{type, payload}
    }
    export const stop = () =>{
        return{type:"STOP"}
    }
  
  export default logicGameReducer;