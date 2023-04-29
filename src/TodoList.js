import TodoItem from "./TodoItem";
import withConditionalFeedback from "./withConditionalFeedback";
import withDataEmptyFeedback from "./withDataEmptyFeedback";
import withLoadingFeedback from "./withLoadingFeedback";
import withNoDataFeedback from "./withNoDataFeedback";

// Note by Benson: we can still put the logic inside the BaseTodoList component,
// Just CAN'T reuse the same conditional logic somewhere else.
// So if the BaseTodoList is not using somewhere, I'll choose to put the conditional logic inside of it!

const BaseTodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const TodoListWithAllConditionalFeedback =
  withConditionalFeedback(BaseTodoList);

const TodoListWithCompositionFeedback = withLoadingFeedback(
  withNoDataFeedback(withDataEmptyFeedback(BaseTodoList))
);

export { TodoListWithAllConditionalFeedback, TodoListWithCompositionFeedback };
