export function changeMassive(massive:(null|number)[],cur:number,value:number){
    const newMassive = [...massive]
    newMassive[cur] = value
    return newMassive
}