import React from "react"
import s from "./Field.module.css"
import cn from "classnames"
import { connect } from "react-redux";
import { startGame, shoot } from "../ReduxStore/reducers/logicGameReducer";
import createFleet from "./logicGame";



const Field =({message, fleet, startGame, shoot, play})=>{

let tableCellElements=[]
for(let i=0; i<10; i++){
    let cell=[];
    for(let j=0;j<10;j++){
        cell.push(<td key={i+j}  
                className={cn({[s.ship]:fleet.flat().some(e=>{return e===(Number(i+""+j))})})}  
                onClick={()=>{ shoot(Number(i+""+j))}} 
                
                id={Number(i+""+j)}></td>)
    }
    tableCellElements.push(<tr key={i} className={s.d} id={i}>
    {cell}
    </tr>) 
}

    return(
        <div>
            <div className={s.message}>{message}</div>
            <table>
                <tbody>
              {tableCellElements}
          </tbody>
          </table>
          <button onClick={()=>{startGame(createFleet())}}>START</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{message:state.logic.message,
          fleet:state.logic.fleet,
          play:state.logic.play}}



export default connect(mapStateToProps,{startGame, shoot})(Field);
