const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
//it could be just a React.Fragment to wrap the components, instead of a customized Wrapper, but it's up to you