const fieldSize=9;
const ShipsCount=10;
let ships=[]

let createShip=(lengthShip)=>{
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
            ship.push(row+""+(column+i))
        }else{
            ship.push((row+i)+""+column)
        }
    }return ship;
}


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

