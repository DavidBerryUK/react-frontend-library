import React from "react";
import type { Meta } from "@storybook/react";
import UILayoutGrid from "../UILayoutGrid";
import UILayoutContainer from "../../UILayoutContainer/UILayoutContainer";
import UIGridCell from "../UIGridCell";
import UIText from "../../UIText/UIText";

const meta = {
  title: "1 - UI/UILayoutGrid (Spans)",
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
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 1
      </UILayoutContainer>
    </UILayoutGrid>
  );
};

/**
 * Basic 1 x 3 grid
 */
export const BasicGrid1x3: React.FC = () => {
  return (
    <UILayoutGrid columns3 colGap4>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 1
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 2
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 3
      </UILayoutContainer>
    </UILayoutGrid>
  );
};

/**
 * Basic 1 x 6 grid
 */
export const BasicGrid1x6: React.FC = () => {
  return (
    <UILayoutGrid columns6 colGap4>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 1
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 2
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 3
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 4
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 5
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 6
      </UILayoutContainer>
    </UILayoutGrid>
  );
};

/**
 * Basic 1 x 6 grid
 */
export const BasicGrid2x6: React.FC = () => {
  return (
    <UILayoutGrid columns6 colGap3 rowGap2>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 1
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 2
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 3
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 4
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 5
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 6
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 7
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 8
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 9
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 10
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 11
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 12
      </UILayoutContainer>
    </UILayoutGrid>
  );
};

/**
 * Column Spans
 */
export const ColumnSpan: React.FC = () => {
  return (
    <UILayoutGrid columns6 colGap3 rowGap2>
      <UILayoutContainer green rounded3 margin2 fill>
        Cell 1
      </UILayoutContainer>
      <UIGridCell colSpan2>
        <UILayoutContainer lime rounded3 margin2 fill>
          span 2
        </UILayoutContainer>
      </UIGridCell>
      <UILayoutContainer indigo rounded3 margin2 fill>
        Cell 4
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 5
      </UILayoutContainer>
      <UILayoutContainer fuchsia rounded3 margin2 fill>
        Cell 6
      </UILayoutContainer>
      <UILayoutContainer teal rounded3 margin2 fill>
        Cell 7
      </UILayoutContainer>
      <UILayoutContainer stone rounded3 margin2 fill>
        Cell 8
      </UILayoutContainer>
      <UIGridCell columnSpan={3}>
        <UILayoutContainer orange rounded3 margin2 fill>
          span 3
        </UILayoutContainer>
      </UIGridCell>
      <UILayoutContainer sky rounded3 margin2 fill>
        Cell 12
      </UILayoutContainer>
    </UILayoutGrid>
  );
};

/**
 * Row and Column Spans
 */
export const RowAndColumnSpans: React.FC = () => {
  return (
    <UILayoutGrid columns6 colGap3 rowGap2>
      <UIGridCell colSpan3>
        <UILayoutContainer cyan rounded3 margin2 fill>
          Cell 1 + 2 + 3
        </UILayoutContainer>
      </UIGridCell>
      <UILayoutContainer slate rounded3 margin2 fill>
        Cell 4
      </UILayoutContainer>
      <UIGridCell rowSpan4>
        <UILayoutContainer red rounded3 margin2 fill>
          <UIText subHeading>Cell 5 spans all four rows of the grid, displacing the other cells</UIText>
        </UILayoutContainer>
      </UIGridCell>
      <UILayoutContainer orange rounded3 margin2 fill>
        Cell 6
      </UILayoutContainer>
      <UILayoutContainer amber rounded3 margin2 fill>
        Cell 7
      </UILayoutContainer>
      <UIGridCell colSpan2>
        <UILayoutContainer yellow rounded3 margin2 fill>
          Cell 8 + 9
        </UILayoutContainer>
      </UIGridCell>
      <UILayoutContainer lime rounded3 margin2 fill>
        Cell 10
      </UILayoutContainer>
      <UILayoutContainer green rounded3 margin2 fill>
        Cell 12
      </UILayoutContainer>
      <UILayoutContainer emerald rounded3 margin2 fill>
        Cell 13
      </UILayoutContainer>
      <UILayoutContainer teal rounded3 margin2 fill>
        Cell 14
      </UILayoutContainer>
      <UILayoutContainer cyan rounded3 margin2 fill>
        Cell 15
      </UILayoutContainer>
      <UILayoutContainer sky rounded3 margin2 fill>
        Cell 16
      </UILayoutContainer>
      <UILayoutContainer blue rounded3 margin2 fill>
        Cell 18
      </UILayoutContainer>
      <UIGridCell colSpan2>
        <UILayoutContainer indigo rounded3 margin2 fill>
          Cell 19 + 20
        </UILayoutContainer>
      </UIGridCell>
      <UIGridCell colSpan2>
        <UILayoutContainer violet rounded3 margin2 fill>
          Cell 21 + 22
        </UILayoutContainer>
      </UIGridCell>
      <UILayoutContainer purple rounded3 margin2 fill>
        Cell 24
      </UILayoutContainer>
    </UILayoutGrid>
  );
};
