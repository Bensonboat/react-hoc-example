const withConditionalFeedback = (Component) => (props) => {
  console.log(props, "props in HOC");
  if (props.isLoading) return <div>Loading data.</div>;
  if (!props.data) return <div>No data loaded yet.</div>;
  if (!props.data.length) return <div>Data is empty.</div>;

  return <Component {...props} />;
};

export default withConditionalFeedback;
