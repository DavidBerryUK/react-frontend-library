import type { Preview } from "@storybook/react";
import "../src/styles/style.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) => {
        // Extract paths to determine hierarchy levels
        const [aRoot] = a.title.split("/");
        const [bRoot] = b.title.split("/");

        // Compare only top-level containers
        if (aRoot !== bRoot) {
          return aRoot.localeCompare(bRoot, undefined, { numeric: true });
        }

        // If within the same container, retain the default order
        return 0;
      },
    },
  },
};

export default preview;
