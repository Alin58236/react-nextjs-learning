
import CounterButton from './CounterButton'

const CountButtons = ({setNumber}) => {

  return (
    <div className="button-container">
          <CounterButton char="-" setNumber={setNumber}/>
          <CounterButton char="+" setNumber={setNumber}/>
    </div>
  )
}

export default CountButtons