import Candy from "./Candy"

const VendingMachine = (props) => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <div>
      <h2>Candy</h2>
      <Candy candy={{name: "Bruno", size: "large", quantity: "30"}}/>
      <Candy candy={{name: "Skittles", size: "large", quantity: "25"}}/>
      </div>
    </div>
  )
}

export default VendingMachine

