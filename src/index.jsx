import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";
import "windi.css";
import C from "./component.jsx";

const App = () => {
  const [count, setCount] = createSignal(0);
  const timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return (
    <div class="text-center pt-10">
      <C />
      <section>{count()}</section>
    </div>
  );
};

render(() => <App />, document.getElementById("app"));
