import React from "react"
import s from "./Field.module.css"
import cn from "classnames"







let tableCellElements=[]
for(let i=0; i<10; i++){
    let cell=[];
    for(let j=0;j<10;j++){
        cell.push(<td key={i+j} /* className={cn({[s.ship]:a.some((e)=> {return Number(e)===Number((i+""+j))})})} */ id={i+""+j}></td>)
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
