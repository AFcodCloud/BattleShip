const fieldSize=10;
const shipModels=[4,3,2,1]
let fleet=[]

 const createShip=(lengthShip)=>{
    let direction=Math.floor(Math.random()*2)
    let row,column;
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

export const createFleet=()=>{ 
    for (let i=0;i<shipModels.length;i++){
        for(let j=0;j<i+1;j++){
            let ship; 
                do{
                    ship=createShip(shipModels[i])
                }while(CollisionCheck(ship)); 
                fleet.push(ship) 
        }
    }return fleet
}


const CollisionCheck=(ship)=>{
    let result;
        for(let i=0;i<ship.length; i++){
            if(fleet.flat().indexOf(ship[i])<0){
               result= invPos(ship[i])
               if(result){return true}
            }else{return true}
    } 
    return false; 
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
    }
return false;
}

///////////////GAME PROCESS

export const clearFleet=()=>{
    fleet=[]; hit=[]; miss=[];
}

let hit = [], miss=[];

export const checkShoots = (cell)=>{
   if(fleet.length>0){
    if(fleet.flat().includes(cell)){
                if(!hit.includes(cell)){
                    hit.push(cell)
                        if(hit.length<fleet.flat().length){
                            return{type:"HIT", payload:cell}
                        }else{
                            fleet=[];hit=[]; miss=[];
                            return {type:"WIN", payload:cell}}
                
                }else{return {type:"MESSAGE", payload:"he was already shoot"}}
    
        }else{  
                if(!miss.includes(cell)){
                    miss.push(cell)
                    return{type:"MISS", payload:cell}
                }else{
                    return {type:"MESSAGE", payload:"there’s still nothing there"}}
            }
        }else{
            return {type:"MESSAGE", payload:"press on start"}}
}



