import React, { Dispatch, Reducer } from "react";
import NotificationManager from "../components-ui/components/UINotification/services/NotificationManager";

export interface IUiContextDispatchCommand {
  execute(state: UiContextProps): UiContextProps;
}

// Interface defining data structure stored in this context
//
export interface UiContextProps {
  notificationManager: NotificationManager;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the IUiContextDispatchCommand interface
export interface InitContextProps {
  state: UiContextProps;
  dispatch: Dispatch<IUiContextDispatchCommand>;
}

// Setup the initial state of this context by creating new models
//
const initialState: UiContextProps = {
  notificationManager: new NotificationManager(),
};

// The reducer updates the actual data held in the context.
// All updates are done by passing in strongly typed command classes that are held in the actions holder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
//
const reducer: Reducer<UiContextProps, IUiContextDispatchCommand> = (state, command) => {
  //
  // each command updates the context state
  // helping to keep the context cleaner
  //
  return command.execute(state);
};

// Create the actual context
//
const UiContext = React.createContext({} as InitContextProps);

// Provide function to 'provide' the context to the application,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
export function UiContextProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <UiContext.Provider value={value}>{props.children}</UiContext.Provider>;
}

// Export the context
//
export const UiContextConsumer = UiContext.Consumer;
export default UiContext;

// Helper Function to access context
//
export const useUiContext = () => {
  const context = React.useContext(UiContext);
  return { uiState: context.state, uiDispatch: context.dispatch };
};
