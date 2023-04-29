import "./App.css";
import {
  TodoListWithCompositionFeedback,
  TodoListWithAllConditionalFeedback,
} from "./TodoList";

const TODO = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false },
];

const fetchData1 = () => {
  return { data: null, isLoading: true };
};

const fetchData2 = () => {
  return { data: [], isLoading: false };
};

const fetchData3 = () => {
  return { data: TODO, isLoading: false };
};

function App() {
  const { data: data1, isLoading: isLoading1 } = fetchData1();
  const { data: data2, isLoading: isLoading2 } = fetchData2();
  const { data: data3, isLoading: isLoading3 } = fetchData3();

  return (
    <>
      {/* Here we test different ways of rendering HOCs with different dataset */}
      <h4>List1:</h4>
      <TodoListWithAllConditionalFeedback data={data1} isLoading={isLoading1} />
      <hr />
      <h4>List2:</h4>
      <TodoListWithCompositionFeedback data={data2} isLoading={isLoading2} />
      <hr />
      <h4>List3:</h4>
      <TodoListWithCompositionFeedback data={data3} isLoading={isLoading3} />
    </>
  );
}

export default App;
