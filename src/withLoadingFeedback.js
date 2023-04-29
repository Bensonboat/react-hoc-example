const withLoadingFeedback = (Component) => (props) => {
  if (props.isLoading) return <div>Loading data.</div>;
  return <Component {...props} />;
};

export default withLoadingFeedback;
