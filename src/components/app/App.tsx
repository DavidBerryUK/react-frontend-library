import AppRoutes from "../../routing/AppRoutes";
import React, { Suspense } from "react";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <AppRoutes />
    </Suspense>
  );
};

export default App;
