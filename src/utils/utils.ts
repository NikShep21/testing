export function changeMassive(massive:(null|number)[],cur:number,value:number){
    let newMassive = [...massive]
    newMassive[cur] = value
    return newMassive
}