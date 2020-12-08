import "./App.css";
import Test from "./components/Test/Test.jsx"

function App() {
  const hello = "Hello World!";
  const array = [{ a: 1 }, { a: 2 }];
  let bool = true;
  return (
    <div className="App">
      {hello}
      {array.map((item) => {
        return item.a;
        // console.log(item)
      })}

      {bool ? hello : ""}

      <Test name = {"Nikita"} />
    </div>
  );
}

export default App;
