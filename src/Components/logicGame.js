const fieldSize=10;
const shipModels=[4,3,2,1]
let fleet=[]

const createShip=(lengthShip)=>{
    let direction=Math.floor(Math.random()*2)//1-вертикальный 0-горизонтальный
    let row,column;//переменные для стартовой позиции корабля
    let ship=[];
    if(direction===1){
        row=Math.floor(Math.random()*fieldSize)
        column=Math.floor(Math.random()*(fieldSize-lengthShip))
    }else{
        row=Math.floor(Math.random()*(fieldSize-lengthShip))
        column=Math.floor(Math.random()*fieldSize)
    }
    for(let i=0; i<lengthShip; i++){
        if(direction===1){
            ship.push(Number(row+""+(column+i)))
        }else{
            ship.push(Number((row+i)+""+column))
        }
    }return ship;
}

const createFleet=()=>{ //функция для наполнения поля кораблями
    for (let i=0;i<shipModels.length;i++){//первый цикл для прохода по моделям кораблей
        for(let j=0;j<i+1;j++){//второй цикл для создания колличества кораблей конкретной модели
            let ship; 
                do{
                    ship=createShip(shipModels[i])//функция для создания корабля принимет в аргументе колличество палуб
                }while(CollisionCheck(ship));//функция для проверки на столкновения между кораблями на поле возвращает true или false 
                fleet.push(ship) //если collisionCheck возвращает false корабль добавляется в массив
        }
    }
}


const CollisionCheck=(ship)=>{//проверка на столкновения принмает массив значений сгенерированных позиций корабля
    let result;
        for(let i=0;i<ship.length; i++){//цикл для прохода по каждой позиции 
            if(fleet.flat().indexOf(ship[i])<0){//если значение не найдено то
               result= invPos(ship[i])//присвоить переменной result результат проверки на соседние позиции для избежания прилипания кораблей друг к другу
               if(result){return true}//если result = true прервать цикл вернув true для создания нового корабля
            }else{return true}//если значение найдено то прерват цикл для создания нового корабля 
    } 
    return false; //если совпадения не найдены то вернуть false добавить корабль
}

const invPos=(pos)=>{//функция для проверки окружающих позиция (нужна чтобы избегать склеивание кораблей на поле)
    let splitPos=String(pos).split("")
    let operands = [1,9,10,11];
    let invPos=[]
    if(Number(splitPos[1])===0||pos===0){//если позиция находтся у левого борта поля нужно убрать некоторые проверки из окружающих клеток
        invPos.push(pos+1,pos-9,pos+10,pos-10,pos+11)
    }else if(Number(splitPos[1])===9||pos===9){//также убрать некоторые проверки для позиций у правого борта поля
        invPos.push(pos-1,pos+9,pos+10,pos-10,pos-11)
    }else{
        for(let i=0; i<operands.length;i++){//если позции расположены не у левого и правого бортов нужно проверить все 8 позиций окружения
        invPos.push(pos+operands[i], pos-operands[i])
    } 
}
    for(let j=0;j<invPos.length;j++){//цикл для прохода по окружению каждой позици
            if(fleet.flat().indexOf(invPos[j])>=0){//поиск в массиве кораблей совпадений по окружению
                return true//прервать если в окружении имеется совпадение вернуться к созданию нового корабля
        }
    }
return false;
}



