import AppContext from "./AppContext";
import React from "react";

const StoreProvider = (extraProps = () => ({})) => Component => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    render() {
      return (
        <AppContext.Consumer>
          {store => {
            return (
              <Component
                {...this.props}
                {...extraProps(store, this.props)}
                store={store}
              />
            );
          }}
        </AppContext.Consumer>
      );
    }
  };
};

export default StoreProvider;
