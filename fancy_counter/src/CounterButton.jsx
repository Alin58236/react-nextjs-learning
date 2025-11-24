import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

const CounterButton = ({ setNumber, char }) => {
  const incrementCounter = (event) => {
    setNumber((prev) => (prev < 5 ? prev + 1 : prev));
    event.currentTarget.blur(); // pentru a elimina focus-ul de pe buton dupa click
  };

  const decrementCounter = (event) => {
    setNumber((prev) => (prev > -5 ? prev - 1 : prev));
    event.currentTarget.blur(); // pentru a elimina focus-ul de pe buton dupa click
  };

  return char === "+" ? (
    <button className="count-btn" onClick={incrementCounter}>
      <PlusIcon className="count-btn-icon" />
    </button>
  ) : (
    <button className="count-btn" onClick={decrementCounter}>
      <MinusIcon className="count-btn-icon" />
    </button>
  );

  /* Neaparat de chemat set number prin body-ul unui arrow function

          onClick={() => setNumber(prev => prev + 1)}
          
     Daca se cheama direct onClick={setNumber(prev => prev + 1)}
     atunci se apeleaza imediat la renderizare si nu la click

          Loop infinit -> crash

  */
};

export default CounterButton;
