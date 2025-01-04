import React from "react";
import type { Meta } from "@storybook/react";
import UILayoutFlex from "../UILayoutFlex";
import UIAlert from "../../UIAlert/UIAlert";
import UIText from "../../UIText/UIText";
import "./style.scss";

const meta = {
  title: "1 - UI/UILayoutFlex",
  component: UILayoutFlex,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "UILayoutFlex, enables layout of controls with alignments",
      },
    },
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
} satisfies Meta<typeof UILayoutFlex>;

export default meta;

/**
 * Flex Direction Row
 */
export const FlexDirectionRow: React.FC = () => {
  return (
    <div>
      <UILayoutFlex className="demo-container" dirRow gap2>
        <DemoBlocks blocks={3} />
      </UILayoutFlex>
    </div>
  );
};

/**
 * Flex Direction Column
 */
export const FlexDirectionColumn: React.FC = () => {
  return (
    <div>
      <UILayoutFlex className="demo-container" dirColumn gap2>
        <DemoBlocks blocks={3} />
      </UILayoutFlex>
    </div>
  );
};

/**
 * Flex Gap - allows gaps between rows and columns
 */
export const Gap: React.FC = () => {
  const gaps = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <UIAlert success lighter borderedTop>
        The gap parameter provides ability to add spacing between rows and columns. Gaps range is from 1 to 12.
      </UIAlert>
      {gaps.map((gap) => (
        <React.Fragment key={gap}>
          <UIText caption>{`Gap ${gap}`}</UIText>
          <UILayoutFlex className="demo-container" dirRow gap={gap}>
            <DemoBlocks blocks={15} />
          </UILayoutFlex>
        </React.Fragment>
      ))}
    </>
  );
};

export const RowColumnGap: React.FC = () => {
  return (
    <>
      <UIAlert success lighter borderedTop>
        The gaps for rows and columns can be specified individually. This example has a row gap of 6 to increased line spacing, and a column gap of 2
      </UIAlert>
      <>
        <UILayoutFlex className="demo-container" colGap2 rowGap6>
          <DemoBlocks blocks={20} />
        </UILayoutFlex>
      </>
    </>
  );
};

export const JustifyColumns: React.FC = () => {
  return (
    <>
      <UIAlert success lighter borderedTop>
        Columns can be justified is different formats
      </UIAlert>
      <>
        <UIText>Justify Start</UIText>
        <UILayoutFlex className="demo-container wide" gap2 justifyStart>
          <DemoBlocks blocks={4} />
        </UILayoutFlex>
      </>
      <UIText>Justify Center</UIText>
      <UILayoutFlex className="demo-container wide" gap2 justifyCenter>
        <DemoBlocks blocks={4} />
      </UILayoutFlex>

      <UIText>Justify End</UIText>
      <UILayoutFlex className="demo-container wide" gap2 justifyEnd>
        <DemoBlocks blocks={4} />
      </UILayoutFlex>

      <UIText>Justify Between</UIText>
      <UILayoutFlex className="demo-container wide" gap2 justifyBetween>
        <DemoBlocks blocks={4} />
      </UILayoutFlex>

      <UIText>Justify Around</UIText>
      <UILayoutFlex className="demo-container wide" gap2 justifyAround>
        <DemoBlocks blocks={4} />
      </UILayoutFlex>

      <UIText>Justify Evenly</UIText>
      <UILayoutFlex className="demo-container wide" gap2 justifyEvenly>
        <DemoBlocks blocks={4} />
      </UILayoutFlex>
    </>
  );
};

export const AlignItems: React.FC = () => {
  return (
    <>
      <UIAlert success lighter borderedTop>
        Items can be aligned is different formats
      </UIAlert>
      <>
        <UIText>Align Start</UIText>
        <UILayoutFlex className="demo-container tall wide" gap2 alignStart>
          <DemoBlocks blocks={4} />
        </UILayoutFlex>
      </>
      <UIText>Align Center</UIText>
      <UILayoutFlex className="demo-container tall wide" gap2 alignCenter>
        <DemoBlocks blocks={4} />
      </UILayoutFlex>

      <UIText>Align End</UIText>
      <UILayoutFlex className="demo-container tall wide" gap2 alignEnd>
        <DemoBlocks blocks={4} />
      </UILayoutFlex>

      <UIText>Align Baseline</UIText>
      <UILayoutFlex className="demo-container tall wide" gap2 alignBaseline>
        <DemoBlocks blocks={4} />
      </UILayoutFlex>

      <UIText>Align Stretch</UIText>
      <UILayoutFlex className="demo-container tall wide" gap2 alignStretch>
        <DemoBlocks blocks={4} />
      </UILayoutFlex>
    </>
  );
};

//********************************************************/
// Helper Components
//********************************************************/
const DemoBlocks: React.FC<{ blocks: number }> = ({ blocks }) => {
  const narrative = [
    "One",
    "Two",
    "Three",
    "Four", // Added "Four" as it was missing
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
  ];

  // Clamp the number of blocks between 0 and 20
  const clampedBlocks = Math.min(Math.max(blocks, 0), narrative.length);

  // Slice the array to get the required items
  const items = narrative.slice(0, clampedBlocks);

  return (
    <>
      {items.map((item, index) => (
        <UIAlert key={index} default>
          {item}
        </UIAlert>
      ))}
    </>
  );
};
