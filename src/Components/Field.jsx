import React from "react"
import s from "./Field.module.css"
import cn from "classnames"


/* className={cn({[s.ship]:a.some((e)=> {return Number(e)===Number((i+""+j))})})}  */

let tableCellElements=[]
for(let i=0; i<10; i++){
    let cell=[];
    for(let j=0;j<10;j++){
        cell.push(<td key={i+j}  className={cn({[s.ship]:fleet.flat().some(e=>{return e===(Number(i+""+j))})})}  id={Number(i+""+j)}></td>)
    }
    tableCellElements.push(<tr key={i} className={s.d} id={i}>
    {cell}
    </tr>) 
}


const Field =(props)=>{

    return(
        <div>
            <table>
                <tbody>
              {tableCellElements}
          </tbody>
          </table>
        </div>
    )
}

export default Field
/* 
1 вертикальный корабль должен начинаться по форммуле (высота таблицы - длина корабля)
2 горизонтальный корабль должен начинаться по формулк (длина таблицы - длина корабля)
3 1(4х палубный) 2(3х палубных) 3(2х палубных) 4 (1о палубных)
4 нужен массив кораблей
5 нужен массив значений расположения для каждого корабля 
*/

/* 
1 генерирую стартовую позицию
2 определяю направление
3 пушу в массив 
4 проверяю на пересечение
5 добавляю корабль
*/
/* 
let fleet = []
let ships=[[6, 16, 26, 36],
[13, 14, 15],
[65, 75, 85],
[11, 12],
[40, 41],
[62, 72],
[49],
[87],
[60],
[29]]

const createFleet=()=>{

        for(let j=0;j<ships.length;j++){
            let ship=ships; 
                do{
                    ship[j]
                }while(CollisionCheck(ship[j]));
                fleet.push(ship[j])
        }       
}


const CollisionCheck=(ship)=>{
    debugger
        for(let i=0;i<ship.length; i++){
            if(fleet.flat().indexOf(ship[i])<0){
                return invPos(ship[i])
            }
    } false
}

const invPos=(pos)=>{
    let splitPos=String(pos).split("")
    let operands = [1,9,10,11];
    let invPos=[]
    if(Number(splitPos[1])===0||pos===0){
        invPos.push(pos+1,pos-9,pos+10,pos-10,pos+11)
    }else if(Number(splitPos[1])===9||pos===9){
        invPos.push(pos-1,pos+9,pos+10,pos-10,pos-11)
    }else{
        for(let i=0; i<operands.length;i++){
        invPos.push(pos+operands[i], pos-operands[i])
    } 
}
    for(let j=0;j<invPos.length;j++){
            if(fleet.flat().indexOf(invPos[j])>=0){
                return true
        }
    }return false

}

createFleet()  */