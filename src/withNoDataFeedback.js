const withNoDataFeedback = (Component) => (props) => {
  if (!props.data) return <div>No data loaded yet.</div>;
  return <Component {...props} />;
};

export default withNoDataFeedback;
