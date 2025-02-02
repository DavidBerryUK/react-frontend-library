import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UIFormText from "../../uiLibrary/components-forms/UIFormText/UIFormText";
import UISegment from "../../uiLibrary/components-ui/components/UISegment/UISegment";
import UIText from "../../uiLibrary/components-ui/components/UIText/UIText";
import useControlAndFormattingViewController from "./hooks/UseControlAndFormattingViewController";

const meta: Meta<typeof UIFormText> = {
  title: "4 - Form Formatting/Placement and Interaction",
  component: UIFormText,
  parameters: {
    docs: {
      description: {
        component: "Formatting of controls, including label placement and interaction modes",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ justifyContent: "center", padding: "40px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UIFormText>;

/**
 * Example with mandatory fields
 */
export const PlacementAndInteraction: Story = {
  render: () => {
    const {
      props,
      forename,
      surname,
      placementList,
      selectedPlacement,
      InteractionModesList,
      selectedInteractionMode,
      handleOnPlacementChangedEvent,
      handleOnInteractionModeChangedEvent,
      handleOnForenameChangedEvent,
      handleOnSurnameChangedEvent,
    } = useControlAndFormattingViewController();

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 16 }}>
          <div>
            <UIText caption>Placement</UIText>
            <UISegment primary options={placementList} selected={selectedPlacement} onChange={handleOnPlacementChangedEvent} />
          </div>
          <div>
            <UIText caption>Interaction Mode</UIText>
            <UISegment primary options={InteractionModesList} selected={selectedInteractionMode} onChange={handleOnInteractionModeChangedEvent} />
          </div>
        </div>
        <div className="ui-form">
          <UIFormText value={forename} onChange={handleOnForenameChangedEvent} {...props} />
          <UIFormText value={surname} onChange={handleOnSurnameChangedEvent} {...props} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "This example includes mandatory validation rules for both Forename and Surname fields, ensuring user input meets the required criteria.",
      },
    },
  },
};
