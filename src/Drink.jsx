const Drink = (props) => {
  return (
    <div>{props.drink.name}: {props.drink.carbonated === 1 ? "carbonated" : "non-carbonated"}
    </div> 
  )
}

export default Drink