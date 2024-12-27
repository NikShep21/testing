import styles from './ColorRightUnswers.module.scss'
interface Props{
    point:number,
    allPoint:number,
}
const ColorRightUnswers = ({point,allPoint}:Props) => {
    function color(point:number, allPoint:number):string{
        if(point / allPoint >=0.7){
            return 'green'
        }
        else if(point / allPoint >=0.5){
            return 'orange'
        }
        else{
            return 'red'
        }
    }
  return (
    <div style={{backgroundColor:color(point,allPoint)}} className={styles.conclusion}>
        {point} из {allPoint}
    </div>
  )
}

export default ColorRightUnswers