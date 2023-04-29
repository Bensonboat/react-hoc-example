const withDataEmptyFeedback = (Component) => (props) => {
  if (!props.data.length) return <div>Data is empty.</div>;
  return <Component {...props} />;
};

export default withDataEmptyFeedback;
