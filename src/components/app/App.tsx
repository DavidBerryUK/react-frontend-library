import AppRoutes from "../../routing/AppRoutes";
import React, { Suspense } from "react";
import { UiContextProvider } from "../../uiLibrary/context/UiContext";

const App: React.FC = () => {
  return (
    <UiContextProvider>
      <Suspense fallback={<div>loading</div>}>
        <AppRoutes />
      </Suspense>
    </UiContextProvider>
  );
};

export default App;
