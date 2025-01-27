import ILayoutContainerProps from "../../../../interfaces/controls/ILayoutContainerProperties";
import React from "react";
import type { Meta } from "@storybook/react";
import UILayoutContainer from "../UILayoutContainer";
import UILayoutFlex from "../../UILayoutFlex/UILayoutFlex";
import UILayoutGrid from "../../UILayoutGrid/UILayoutGrid";
import UIText from "../../UIText/UIText";

const meta = {
  title: "1 - UI/UILayoutContainer",
  component: UILayoutContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Layout container with padding, margins, rounded edges and background colour`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UILayoutContainer>;

export default meta;

const backgroundStyle: ILayoutContainerProps = {
  emerald: true,
  shade200: true,
  rounded2: true,
};

export const Default: React.FC = () => {
  return <UILayoutContainer>Sample Contents</UILayoutContainer>;
};

export const PaddingGlobal: React.FC = () => {
  return (
    <>
      <UIText subHeading>Padding Global</UIText>
      <UILayoutGrid columns1 colGap4 rowGap4 middleCenter>
        <UILayoutContainer padding1>Global - Padding 1</UILayoutContainer>
        <UILayoutContainer padding2>Global - Padding 2</UILayoutContainer>
        <UILayoutContainer padding3>Global - Padding 3</UILayoutContainer>
        <UILayoutContainer padding4>Global - Padding 4</UILayoutContainer>
        <UILayoutContainer padding5>Global - Padding 5</UILayoutContainer>
        <UILayoutContainer padding6>Global - Padding 6</UILayoutContainer>
        <UILayoutContainer padding7>Global - Padding 7</UILayoutContainer>
        <UILayoutContainer padding8>Global - Padding 8</UILayoutContainer>
      </UILayoutGrid>
    </>
  );
};

export const PaddingTargeted: React.FC = () => {
  return (
    <>
      <UIText subHeading>Padding Targeted</UIText>
      <UILayoutGrid columns4 colGap4 rowGap4 middleCenter>
        <UIText subHeading>Left</UIText>
        <UIText subHeading>Right</UIText>
        <UIText subHeading>Top</UIText>
        <UIText subHeading>Bottom</UIText>
        <UILayoutContainer paddingLeft1>Padding 1</UILayoutContainer>
        <UILayoutContainer paddingRight1>Padding 1</UILayoutContainer>
        <UILayoutContainer paddingTop1>Padding 1</UILayoutContainer>
        <UILayoutContainer paddingBottom1>Padding 1</UILayoutContainer>

        <UILayoutContainer paddingLeft2>Padding 2</UILayoutContainer>
        <UILayoutContainer paddingRight2>Padding 2</UILayoutContainer>
        <UILayoutContainer paddingTop2>Padding 2</UILayoutContainer>
        <UILayoutContainer paddingBottom2>Padding 2</UILayoutContainer>

        <UILayoutContainer paddingLeft3>Padding 3</UILayoutContainer>
        <UILayoutContainer paddingRight3>Padding 3</UILayoutContainer>
        <UILayoutContainer paddingTop3>Padding 3</UILayoutContainer>
        <UILayoutContainer paddingBottom3>Padding 3</UILayoutContainer>

        <UILayoutContainer paddingLeft4>Padding 4</UILayoutContainer>
        <UILayoutContainer paddingRight4>Padding 4</UILayoutContainer>
        <UILayoutContainer paddingTop4>Padding 4</UILayoutContainer>
        <UILayoutContainer paddingBottom4>Padding 4</UILayoutContainer>

        <UILayoutContainer paddingLeft5>Padding 5</UILayoutContainer>
        <UILayoutContainer paddingRight5>Padding 5</UILayoutContainer>
        <UILayoutContainer paddingTop5>Padding 5</UILayoutContainer>
        <UILayoutContainer paddingBottom5>Padding 5</UILayoutContainer>

        <UILayoutContainer paddingLeft6>Padding 6</UILayoutContainer>
        <UILayoutContainer paddingRight6>Padding 6</UILayoutContainer>
        <UILayoutContainer paddingTop6>Padding 6</UILayoutContainer>
        <UILayoutContainer paddingBottom6>Padding 6</UILayoutContainer>

        <UILayoutContainer paddingLeft7>Padding 7</UILayoutContainer>
        <UILayoutContainer paddingRight7>Padding 7</UILayoutContainer>
        <UILayoutContainer paddingTop7>Padding 7</UILayoutContainer>
        <UILayoutContainer paddingBottom7>Padding 7</UILayoutContainer>

        <UILayoutContainer paddingLeft8>Padding 8</UILayoutContainer>
        <UILayoutContainer paddingRight8>Padding 8</UILayoutContainer>
        <UILayoutContainer paddingTop8>Padding 8</UILayoutContainer>
        <UILayoutContainer paddingBottom8>Padding 8</UILayoutContainer>
      </UILayoutGrid>
    </>
  );
};

export const MarginGlobal: React.FC = () => {
  return (
    <>
      <UIText subHeading>Margin Global</UIText>
      <UILayoutGrid columns1 colGap4 rowGap4 middleCenter>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer margin1>Global - Margin 1</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer margin2>Global - Margin 2</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer margin3>Global - Margin 3</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer margin4>Global - Margin 4</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer margin5>Global - Margin 5</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer margin6>Global - Margin 6</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer margin7>Global - Margin 7</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer margin8>Global - Margin 8</UILayoutContainer>
        </UILayoutContainer>
      </UILayoutGrid>
    </>
  );
};

export const MarginTargeted: React.FC = () => {
  return (
    <>
      <UIText subHeading>Margin Targeted</UIText>
      <UILayoutGrid columns4 colGap4 rowGap4 middleCenter>
        <UIText subHeading>Left</UIText>
        <UIText subHeading>Right</UIText>
        <UIText subHeading>Top</UIText>
        <UIText subHeading>Bottom</UIText>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginLeft1>Margin 1</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginRight1>Margin 1</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginTop1>Margin 1</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginBottom1>Margin 1</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginLeft2>Margin 2</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginRight2>Margin 2</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginTop2>Margin 2</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginBottom2>Margin 2</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginLeft3>Margin 3</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginRight3>Margin 3</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginTop3>Margin 3</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginBottom3>Margin 3</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginLeft4>Margin 4</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginRight4>Margin 4</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginTop4>Margin 4</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginBottom4>Margin 4</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginLeft5>Margin 5</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginRight5>Margin 5</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginTop5>Margin 5</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginBottom5>Margin 5</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginLeft6>Margin 6</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginRight6>Margin 6</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginTop6>Margin 6</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginBottom6>Margin 6</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginLeft7>Margin 7</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginRight7>Margin 7</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginTop7>Margin 7</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginBottom7>Margin 7</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginLeft8>Margin 8</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginRight8>Margin 8</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginTop8>Margin 8</UILayoutContainer>
        </UILayoutContainer>
        <UILayoutContainer {...backgroundStyle}>
          <UILayoutContainer marginBottom8>Margin 8</UILayoutContainer>
        </UILayoutContainer>
      </UILayoutGrid>
    </>
  );
};

export const Rounded: React.FC = () => {
  return (
    <>
      <UIText subHeading>Rounded</UIText>
      <UILayoutGrid columns1 colGap4 rowGap4 middleCenter>
        <UILayoutContainer rounded1 padding3>
          Rounded 1
        </UILayoutContainer>
        <UILayoutContainer rounded2 padding3>
          Rounded 2
        </UILayoutContainer>
        <UILayoutContainer rounded3 padding3>
          Rounded 3
        </UILayoutContainer>
        <UILayoutContainer rounded4 padding3>
          Rounded 4
        </UILayoutContainer>
        <UILayoutContainer rounded5 padding3>
          Rounded 5
        </UILayoutContainer>
        <UILayoutContainer roudned6 padding3>
          Rounded 6
        </UILayoutContainer>
        <UILayoutContainer roudned7 padding3>
          Rounded 7
        </UILayoutContainer>
        <UILayoutContainer roudned8 padding3>
          Rounded 8
        </UILayoutContainer>
      </UILayoutGrid>
    </>
  );
};

export const Colours: React.FC = () => {
  return (
    <UILayoutFlex dirColumn gap6>
      <UILayoutFlex colGap2 rowGap2 alignCenter justifyCenter wrap>
        <UILayoutContainer padding3 slate></UILayoutContainer>
        <UILayoutContainer padding3 gray></UILayoutContainer>
        <UILayoutContainer padding3 zinc></UILayoutContainer>
        <UILayoutContainer padding3 neutral></UILayoutContainer>
        <UILayoutContainer padding3 stone></UILayoutContainer>
        <UILayoutContainer padding3 red></UILayoutContainer>
        <UILayoutContainer padding3 orange></UILayoutContainer>
        <UILayoutContainer padding3 amber></UILayoutContainer>
        <UILayoutContainer padding3 yellow></UILayoutContainer>
        <UILayoutContainer padding3 lime></UILayoutContainer>
        <UILayoutContainer padding3 green></UILayoutContainer>
        <UILayoutContainer padding3 emerald></UILayoutContainer>
        <UILayoutContainer padding3 teal></UILayoutContainer>
        <UILayoutContainer padding3 cyan></UILayoutContainer>
        <UILayoutContainer padding3 sky></UILayoutContainer>
        <UILayoutContainer padding3 blue></UILayoutContainer>
        <UILayoutContainer padding3 indigo></UILayoutContainer>
        <UILayoutContainer padding3 violet></UILayoutContainer>
        <UILayoutContainer padding3 purple></UILayoutContainer>
        <UILayoutContainer padding3 fuchsia></UILayoutContainer>
        <UILayoutContainer padding3 pink></UILayoutContainer>
        <UILayoutContainer padding3 rose></UILayoutContainer>
      </UILayoutFlex>

      <UILayoutFlex colGap2 rowGap2 alignCenter justifyCenter wrap>
        <UILayoutContainer padding3 green shade50></UILayoutContainer>
        <UILayoutContainer padding3 green shade100></UILayoutContainer>
        <UILayoutContainer padding3 green shade150></UILayoutContainer>
        <UILayoutContainer padding3 green shade200></UILayoutContainer>
        <UILayoutContainer padding3 green shade250></UILayoutContainer>
        <UILayoutContainer padding3 green shade300></UILayoutContainer>
        <UILayoutContainer padding3 green shade350></UILayoutContainer>
        <UILayoutContainer padding3 green shade400></UILayoutContainer>
        <UILayoutContainer padding3 green shade450></UILayoutContainer>
        <UILayoutContainer padding3 green shade500></UILayoutContainer>
        <UILayoutContainer padding3 green shade550></UILayoutContainer>
        <UILayoutContainer padding3 green shade600></UILayoutContainer>
        <UILayoutContainer padding3 green shade650></UILayoutContainer>
        <UILayoutContainer padding3 green shade700></UILayoutContainer>
        <UILayoutContainer padding3 green shade750></UILayoutContainer>
        <UILayoutContainer padding3 green shade800></UILayoutContainer>
        <UILayoutContainer padding3 green shade850></UILayoutContainer>
        <UILayoutContainer padding3 green shade900></UILayoutContainer>
        <UILayoutContainer padding3 green shade950></UILayoutContainer>
      </UILayoutFlex>

      <UILayoutFlex colGap2 rowGap2 alignCenter justifyCenter wrap>
        <UILayoutContainer padding3 purple shade50></UILayoutContainer>
        <UILayoutContainer padding3 purple shade100></UILayoutContainer>
        <UILayoutContainer padding3 purple shade150></UILayoutContainer>
        <UILayoutContainer padding3 purple shade200></UILayoutContainer>
        <UILayoutContainer padding3 purple shade250></UILayoutContainer>
        <UILayoutContainer padding3 purple shade300></UILayoutContainer>
        <UILayoutContainer padding3 purple shade350></UILayoutContainer>
        <UILayoutContainer padding3 purple shade400></UILayoutContainer>
        <UILayoutContainer padding3 purple shade450></UILayoutContainer>
        <UILayoutContainer padding3 purple shade500></UILayoutContainer>
        <UILayoutContainer padding3 purple shade550></UILayoutContainer>
        <UILayoutContainer padding3 purple shade600></UILayoutContainer>
        <UILayoutContainer padding3 purple shade650></UILayoutContainer>
        <UILayoutContainer padding3 purple shade700></UILayoutContainer>
        <UILayoutContainer padding3 purple shade750></UILayoutContainer>
        <UILayoutContainer padding3 purple shade800></UILayoutContainer>
        <UILayoutContainer padding3 purple shade850></UILayoutContainer>
        <UILayoutContainer padding3 purple shade900></UILayoutContainer>
        <UILayoutContainer padding3 purple shade950></UILayoutContainer>
      </UILayoutFlex>
    </UILayoutFlex>
  );
};
