import React from "react";
import type { Meta } from "@storybook/react";
import UILayoutGrid from "../UILayoutGrid";
import UIGridCell from "../UIGridCell";
import UIAlert from "../../UIAlert/UIAlert";

const meta = {
  title: "1 - UI/UILayoutGrid",
  component: UILayoutGrid,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "UILayoutGrid, enables layout of controls in grids",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", margin: "40px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "800px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof UILayoutGrid>;

export default meta;

/**
 * Basic 1 x 1 grid
 */
export const BasicGrid1x1: React.FC = () => {
  return (
    <UILayoutGrid>
      <UIAlert info lighter>
        Cell 1
      </UIAlert>
    </UILayoutGrid>
  );
};

/**
 * Basic 1 x 3 grid
 */
export const BasicGrid1x3: React.FC = () => {
  return (
    <UILayoutGrid columns3 colGap4>
      <UIAlert info lighter>
        Cell 1
      </UIAlert>
      <UIAlert info lighter>
        Cell 2
      </UIAlert>
      <UIAlert info lighter>
        Cell 3
      </UIAlert>
    </UILayoutGrid>
  );
};

/**
 * Basic 1 x 6 grid
 */
export const BasicGrid1x6: React.FC = () => {
  return (
    <UILayoutGrid columns6 colGap4>
      <UIAlert info lighter>
        Cell 1
      </UIAlert>
      <UIAlert info lighter>
        Cell 2
      </UIAlert>
      <UIAlert info lighter>
        Cell 3
      </UIAlert>
      <UIAlert info lighter>
        Cell 4
      </UIAlert>
      <UIAlert info lighter>
        Cell 5
      </UIAlert>
      <UIAlert info lighter>
        Cell 6
      </UIAlert>
    </UILayoutGrid>
  );
};

/**
 * Basic 1 x 6 grid
 */
export const BasicGrid2x6: React.FC = () => {
  return (
    <UILayoutGrid columns6 colGap3 rowGap2>
      <UIAlert info lighter>
        Cell 1
      </UIAlert>
      <UIAlert info lighter>
        Cell 2
      </UIAlert>
      <UIAlert info lighter>
        Cell 3
      </UIAlert>
      <UIAlert info lighter>
        Cell 4
      </UIAlert>
      <UIAlert info lighter>
        Cell 5
      </UIAlert>
      <UIAlert info lighter>
        Cell 6
      </UIAlert>
      <UIAlert info lighter>
        Cell 7
      </UIAlert>
      <UIAlert info lighter>
        Cell 8
      </UIAlert>
      <UIAlert info lighter>
        Cell 9
      </UIAlert>
      <UIAlert info lighter>
        Cell 10
      </UIAlert>
      <UIAlert info lighter>
        Cell 11
      </UIAlert>
      <UIAlert info lighter>
        Cell 12
      </UIAlert>
    </UILayoutGrid>
  );
};

/**
 * Column Spans
 */
export const BasicGridWithColumnSpan: React.FC = () => {
  return (
    <UILayoutGrid columns6 colGap3 rowGap2>
      <UIAlert info lighter>
        Cell 1
      </UIAlert>
      <UIGridCell colSpan2>
        <UIAlert success lighter>
          span 2
        </UIAlert>
      </UIGridCell>
      <UIAlert info lighter>
        Cell 4
      </UIAlert>
      <UIAlert info lighter>
        Cell 5
      </UIAlert>
      <UIAlert info lighter>
        Cell 6
      </UIAlert>
      <UIAlert info lighter>
        Cell 7
      </UIAlert>
      <UIAlert info lighter>
        Cell 8
      </UIAlert>
      <UIGridCell columnSpan={3}>
        <UIAlert success lighter>
          span 3
        </UIAlert>
      </UIGridCell>
      <UIAlert info lighter>
        Cell 12
      </UIAlert>
    </UILayoutGrid>
  );
};

/**
 * Row and Column Spans
 */
export const GridWithRowAndColumnSpans: React.FC = () => {
  return (
    <UILayoutGrid columns6 colGap3 rowGap2>
      <UIGridCell colSpan3>
        <UIAlert warning lighter>
          Cell 1 + 2 + 3
        </UIAlert>
      </UIGridCell>
      <UIAlert info lighter>
        Cell 4
      </UIAlert>
      <UIGridCell rowSpan4>
        <UIAlert warning lighter>
          Cell 5 spans all four rows of the grid, displacing the other cells and maintaining layout.
        </UIAlert>
      </UIGridCell>
      <UIAlert info lighter>
        Cell 6
      </UIAlert>
      <UIAlert info lighter>
        Cell 7
      </UIAlert>
      <UIGridCell colSpan2>
        <UIAlert warning lighter>
          Cell 8 + 9
        </UIAlert>
      </UIGridCell>
      <UIAlert info lighter>
        Cell 10
      </UIAlert>

      <UIAlert info lighter>
        Cell 12
      </UIAlert>

      <UIAlert info lighter>
        Cell 13
      </UIAlert>
      <UIAlert info lighter>
        Cell 14
      </UIAlert>
      <UIAlert info lighter>
        Cell 15
      </UIAlert>
      <UIAlert info lighter>
        Cell 16
      </UIAlert>

      <UIAlert info lighter>
        Cell 18
      </UIAlert>
      <UIGridCell colSpan2>
        <UIAlert warning lighter>
          Cell 19 + 20
        </UIAlert>
      </UIGridCell>
      <UIGridCell colSpan2>
        <UIAlert warning lighter>
          Cell 21 + 22
        </UIAlert>
      </UIGridCell>

      <UIAlert info lighter>
        Cell 24
      </UIAlert>
    </UILayoutGrid>
  );
};
