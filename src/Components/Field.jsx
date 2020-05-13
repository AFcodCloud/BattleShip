import React from "react"
import s from "./Field.module.css"
import cn from "classnames"
import { connect } from "react-redux";
import { startGame, shoot, stop} from "../ReduxStore/reducers/logicGameReducer";
import {createFleet, checkShoots, clearFleet} from "./logicGame";



const Field =({message, destroyed, wound, miss, startGame, shoot, play, stop})=>{
let tableCellElements=[]
for(let i=0; i<10; i++){
    let cell=[];
    for(let j=0;j<10;j++){
        cell.push(<td key={i+j}  
                className={cn({[s.destroyed]:destroyed.some(e=>{return e===(Number(i+""+j))})},
                              {[s.wound]:wound.some(e=>{return e===(Number(i+""+j))})},
                             {[s.miss]:miss.some(e=>{return e===(Number(i+""+j))})})}  
                onClick={()=>{ shoot(checkShoots(Number(i+""+j)))}} 
                
                id={Number(i+""+j)}></td>)
    }
    tableCellElements.push(<tr key={i} className={s.d} id={i}>
    {cell}
    </tr>) 
}

const stopGame =()=>{
    stop();
    clearFleet();
}

    return(
        <div>
            <div className={s.message}>{message}</div>
            <table>
                <tbody>
              {tableCellElements}
          </tbody>
          </table>
          {play?<button onClick={stopGame}>STOP</button>:
                <button onClick={()=>{stopGame();createFleet(); startGame()}}>START</button>}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{message:state.logic.message,
          destroyed:state.logic.destroyed,
          wound:state.logic.wound,
          miss:state.logic.miss,
          play:state.logic.play}}



export default connect(mapStateToProps,{startGame, shoot, stop})(Field);
