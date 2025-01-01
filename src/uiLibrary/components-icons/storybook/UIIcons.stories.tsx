import FactoryOptionLists from "../../../storyExamples/factories/FactoryOptionLists";
import IIconProps from "../interfaces/IIconProps";
import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UILayoutGrid from "../../components-ui/components/UILayoutGrid/UILayoutGrid";
import UISegment from "../../components-ui/components/UISegment/UISegment";
import UIText from "../../components-ui/components/UIText/UIText";

import UIIconAlertCrossCircle from "../UIIconAlertCrossCircle";
import UIIconAlertCrossCircleSolid from "../UIIconAlertCrossCircleSolid";
import UIIconAlertExclamationCircle from "../UIIconAlertExclamationCircle";
import UIIconAlertExclamationCircleSolid from "../UIIconAlertExclamationCircleSolid";
import UIIconAlertExclamationOctagon from "../UIIconAlertExclamationOctagon";
import UIIconAlertExclamationOctagonSolid from "../UIIconAlertExclamationOctagonSolid";
import UIIconAlertExclamationTriangle from "../UIIconAlertExclamationTriangle";
import UIIconAlertExclamationTriangleSolid from "../UIIconAlertExclamationTriangleSolid";
import UIIconAlertInfoCircle from "../UIIconAlertInfoCircle";
import UIIconAlertInfoCircleSolid from "../UIIconAlertInfoCircleSolid";
import UIIconAlertQuestionCircle from "../UIIconAlertQuestionCircle";
import UIIconAlertQuestionCircleOctagon from "../UIIconAlertQuestionCircleOctagon";
import UIIconAlertQuestionCircleOctagonSolid from "../UIIconAlertQuestionCircleOctagonSolid";
import UIIconAlertQuestionCircleSolid from "../UIIconAlertQuestionCircleSolid";
import UIIconAlertSuccessCircle from "../UIIconAlertSuccessCircle";
import UIIconAlertSuccessCircleSolid from "../UIIconAlertSuccessCircleSolid";
import UIIconArrowDown from "../UIIconArrowDown";
import UIIconArrowLeft from "../UIIconArrowLeft";
import UIIconArrowRight from "../UIIconArrowRight";
import UIIconArrowUp from "../UIIconArrowUp";
import UIIconBars from "../UIIconBars";
import UIIconBell from "../UIIconBell";
import UIIconBellActive from "../UIIconBellActive";
import UIIconBellActiveSolid from "../UIIconBellActiveSolid";
import UIIconBellRing from "../UIIconBellRing";
import UIIconBellRingSolid from "../UIIconBellRingSolid";
import UIIconBellSolid from "../UIIconBellSolid";
import UIIconBookmark from "../UIIconBookmark";
import UIIconBookmarkSolid from "../UIIconBookmarkSolid";
import UIIconCalendar from "../UIIconCalendar";
import UIIconCalendarSolid from "../UIIconCalendarSolid";
import UIIconCaretDown from "../UIIconCaretDown";
import UIIconCaretDownSolid from "../UIIconCaretDownSolid";
import UIIconCaretLeft from "../UIIconCaretLeft";
import UIIconCaretLeftSolid from "../UIIconCaretLeftSolid";
import UIIconCaretRight from "../UIIconCaretRight";
import UIIconCaretRightSolid from "../UIIconCaretRightSolid";
import UIIconCaretUp from "../UIIconCaretUp";
import UIIconCaretUpSolid from "../UIIconCaretUpSolid";
import UIIconChevronDoubleDown from "../UIIconChevronDoubleDown";
import UIIconChevronDoubleLeft from "../UIIconChevronDoubleLeft";
import UIIconChevronDoubleRight from "../UIIconChevronDoubleRight";
import UIIconChevronDoubleUp from "../UIIconChevronDoubleUp";
import UIIconChevronFirst from "../UIIconChevronFirst";
import UIIconChevronFirstSolid from "../UIIconChevronFirstSolid";
import UIIconChevronLargeDown from "../UIIconChevronLargeDown";
import UIIconChevronLargeLeft from "../UIIconChevronLargeLeft";
import UIIconChevronLargeRight from "../UIIconChevronLargeRight";
import UIIconChevronLargeUp from "../UIIconChevronLargeUp";
import UIIconChevronLast from "../UIIconChevronLast";
import UIIconChevronLastSolid from "../UIIconChevronLastSolid";
import UIIconChevronSingleDown from "../UIIconChevronSingleDown";
import UIIconChevronSingleLeft from "../UIIconChevronSingleLeft";
import UIIconChevronSingleRight from "../UIIconChevronSingleRight";
import UIIconChevronSingleUp from "../UIIconChevronSingleUp";
import UIIconCloudUp from "../UIIconCloudUp";
import UIIconCloudUpSolid from "../UIIconCloudUpSolid";
import UIIconCog from "../UIIconCog";
import UIIconCogSolid from "../UIIconCogSolid";
import UIIconCross from "../UIIconCross";
import UIIconCrossCircle from "../UIIconCrossCircle";
import UIIconCrossCircleSolid from "../UIIconCrossCircleSolid";
import UIIconDownload from "../UIIconDownload";
import UIIconDownloadSolid from "../UIIconDownloadSolid";
import UIIconEdit from "../UIIconEdit";
import UIIconEditSolid from "../UIIconEditSolid";
import UIIconFile from "../UIIconFile";
import UIIconFileSolid from "../UIIconFileSolid";
import UIIconFileTick from "../UIIconFileTick";
import UIIconFileTickSolid from "../UIIconFileTickSolid";
import UIIconFilter from "../UIIconFilter";
import UIIconFilterSolid from "../UIIconFilterSolid";
import UIIconFlag from "../UIIconFlag";
import UIIconFlagSolid from "../UIIconFlagSolid";
import UIIconHome from "../UIIconHome";
import UIIconHomeSolid from "../UIIconHomeSolid";
import UIIconList from "../UIIconList";
import UIIconListRectangle from "../UIIconListRectangle";
import UIIconListRectangleSolid from "../UIIconListRectangleSolid";
import UIIconMail from "../UIIconMail";
import UIIconMailOpen from "../UIIconMailOpen";
import UIIconMailOpenSolid from "../UIIconMailOpenSolid";
import UIIconMailSolid from "../UIIconMailSolid";
import UIIconMessage from "../UIIconMessage";
import UIIconMessages from "../UIIconMessages";
import UIIconMessageSolid from "../UIIconMessageSolid";
import UIIconMessagesSolid from "../UIIconMessagesSolid";
import UIIconMinusCircle from "../UIIconMinusCircle";
import UIIconMinusCircleSolid from "../UIIconMinusCircleSolid";
import UIIconPlusCircle from "../UIIconPlusCircle";
import UIIconPlusCircleSolid from "../UIIconPlusCircleSolid";
import UIIconSave from "../UIIconSave";
import UIIconSaveSolid from "../UIIconSaveSolid";
import UIIconSearch from "../UIIconSearch";
import UIIconSearchSolid from "../UIIconSearchSolid";
import UIIconSort from "../UIIconSort";
import UIIconSortArrows from "../UIIconSortArrows";
import UIIconSortLines from "../UIIconSortLines";
import UIIconSortSolid from "../UIIconSortSolid";
import UIIconStar from "../UIIconStar";
import UIIconStarSolid from "../UIIconStarSolid";
import UIIconStop from "../UIIconStop";
import UIIconStopSolid from "../UIIconStopSolid";
import UIIconTelephone from "../UIIconTelephone";
import UIIconTelephoneSolid from "../UIIconTelephoneSolid";
import UIIconTick from "../UIIconTick";
import UIIconTickBadge from "../UIIconTickBadge";
import UIIconTickBadgeSolid from "../UIIconTickBadgeSolid";
import UIIconTickCircle from "../UIIconTickCircle";
import UIIconTickCircleSolid from "../UIIconTickCircleSolid";
import UIIconTrash from "../UIIconTrash";
import UIIconTrashSolid from "../UIIconTrashSolid";
import UIIconTruck from "../UIIconTruck";
import UIIconTruckSolid from "../UIIconTruckSolid";
import UIIconUpload from "../UIIconUpload";
import UIIconUploadSolid from "../UIIconUploadSolid";
import UIIconUser from "../UIIconUser";
import UIIconUserCircle from "../UIIconUserCircle";
import UIIconUserCircleSolid from "../UIIconUserCircleSolid";
import UIIconUsers from "../UIIconUsers";
import UIIconUserSolid from "../UIIconUserSolid";
import UIIconUsersSolid from "../UIIconUsersSolid";
import EnumColor from "../../enums/EnumColor";
import IPropColor from "../../interfaces/properties/IPropColor";
import IPropShade from "../../interfaces/properties/IPropShade";

const meta = {
  title: "2 - Icons/UIIcons",
  component: UIIconPlusCircleSolid,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Icons from https://flowbite.com/icons/ IconSize:32px StrokeWidth:2px and https://icons.getbootstrap.com/ <br> Any SVG can be added as an icon",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIIconPlusCircleSolid>;

export default meta;

const icons = GetIcons();

export const Default: React.FC = () => {
  return (
    <UILayoutGrid columns4 colGap4>
      <UIIconTickCircle />
      <UIIconTickCircleSolid />
      <UIIconCrossCircle />
      <UIIconTickCircleSolid />
    </UILayoutGrid>
  );
};

export const Themes: React.FC = () => {
  return (
    <div>
      <UIText subHeading>Themes</UIText>
      <UILayoutGrid columns8 colGap4 rowGap4 middleCenter>
        <div></div>
        <UIText caption>Default</UIText>
        <UIText caption>Primary</UIText>
        <UIText caption>Secondary</UIText>
        <UIText caption>Success</UIText>
        <UIText caption>Info</UIText>
        <UIText caption>Warning</UIText>
        <UIText caption>Danger</UIText>
        <UIText caption>Lighter</UIText>
        <UIIconTickCircleSolid lighter default />
        <UIIconTickCircleSolid lighter primary />
        <UIIconTickCircleSolid lighter secondary />
        <UIIconTickCircleSolid lighter success />
        <UIIconTickCircleSolid lighter info />
        <UIIconTickCircleSolid lighter warning />
        <UIIconTickCircleSolid lighter danger />
        <UIText caption>Normal</UIText>
        <UIIconTickCircleSolid default />
        <UIIconTickCircleSolid primary />
        <UIIconTickCircleSolid secondary />
        <UIIconTickCircleSolid success />
        <UIIconTickCircleSolid info />
        <UIIconTickCircleSolid warning />
        <UIIconTickCircleSolid danger />
        <UIText caption>Darker</UIText>
        <UIIconTickCircleSolid darker default />
        <UIIconTickCircleSolid darker primary />
        <UIIconTickCircleSolid darker secondary />
        <UIIconTickCircleSolid darker success />
        <UIIconTickCircleSolid darker info />
        <UIIconTickCircleSolid darker warning />
        <UIIconTickCircleSolid darker danger />
      </UILayoutGrid>
    </div>
  );
};

export const Sizes: React.FC = () => {
  return (
    <div>
      <UIText subHeading>Sizes</UIText>
      <UILayoutGrid columns7 colGap4 rowGap4 middleCenter>
        <div>
          <UIText bold>Extra Small</UIText>
          <UIText caption>(12px)</UIText>
        </div>
        <div>
          <UIText bold>Small</UIText>
          <UIText caption>(16px)</UIText>
        </div>
        <div>
          <UIText bold>Smaller</UIText>
          <UIText caption>(28px)</UIText>
        </div>
        <div>
          <UIText bold>Regular</UIText>
          <UIText caption>(32px)</UIText>
        </div>
        <div>
          <UIText bold>Larger</UIText>
          <UIText caption>(40px)</UIText>
        </div>
        <div>
          <UIText bold>Large</UIText>
          <UIText caption>(48px)</UIText>
        </div>
        <div>
          <UIText bold>Extra Large</UIText>
          <UIText caption>(64px)</UIText>
        </div>
        <UIIconStarSolid extraSmall color="#55efc4" />
        <UIIconStarSolid small color="#a29bfe" />
        <UIIconStarSolid smaller color="#b2bec3" />
        <UIIconStarSolid regular color="#fdcb6e" />
        <UIIconStarSolid larger color="#d63031" />
        <UIIconStarSolid large color="#0984e3" />
        <UIIconStarSolid extraLarge color="#00b894" />
      </UILayoutGrid>
    </div>
  );
};

export const Coloured: React.FC = () => {
  return (
    <UILayoutGrid columns8 colGap4 rowGap4 middleCenter>
      <UIIconTickCircle color="red" />
      <UIIconTickCircleSolid color="green" />
      <UIIconCrossCircle color="#0984e3" />
      <UIIconTickCircleSolid color="#fab1a0" />
    </UILayoutGrid>
  );
};

export const ColouredIconsGallery: StoryObj = {
  render: () => {
    const colours = getColours();
    return (
      <UILayoutGrid columns2 colGap8>
        <UILayoutGrid columns5 colGap3 rowGap3>
          {colours.map((colour) => (
            <div key={colour} className="h-10 w-10">
              <UIIconAlertCrossCircleSolid color={colour} />
            </div>
          ))}
        </UILayoutGrid>
        <UILayoutGrid columns5 colGap3 rowGap3>
          {colours.map((colour) => (
            <div key={colour} className="h-10 w-10">
              <UIIconTickCircle color={colour} />
            </div>
          ))}
        </UILayoutGrid>
      </UILayoutGrid>
    );
  },
};

export const Gallery: StoryObj = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredIcons, setFilteredIcons] = useState(icons);

    const [colourOptions] = useState<Array<OptionModel<EnumColor>>>(FactoryOptionLists.GetVariantList());
    const [selectedColour, setSelectedColour] = useState<OptionModel<EnumColor>>(colourOptions[0]);

    const [sizeOptions] = useState<Array<OptionModel<string>>>(getSizeOptions());
    const [selectedSize, setSelectedSize] = useState<OptionModel<string>>(sizeOptions[3]);

    const [shadeOptions] = useState<Array<OptionModel<string>>>(getShadeOptions());
    const [selectedShade, setSelectedShade] = useState<OptionModel<string>>(shadeOptions[1]);

    const [iconProp, setIconProp] = useState<IPropColor & IPropShade>({});

    // Function to handle search input
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value.toLowerCase();
      setSearchTerm(searchValue);
      setFilteredIcons(icons.filter((icon) => icon.name.toLowerCase().includes(searchValue)));
    };

    const handleColourSelectedEvent = (option: OptionModel<EnumColor>) => {
      setSelectedColour(option);
      setIconProp(convertOptionsToProps(option, selectedSize, selectedShade));
    };

    const handleSizeSelectedEvent = (option: OptionModel<string>) => {
      setSelectedSize(option);
      setIconProp(convertOptionsToProps(selectedColour, option, selectedShade));
    };

    const handleShadeSelectedEvent = (option: OptionModel<string>) => {
      setSelectedShade(option);
      setIconProp(convertOptionsToProps(selectedColour, selectedSize, option));
    };

    return (
      <div className="sb-icon-gallery">
        <div className="sb-icon-toolbar">
          <UISegment options={colourOptions} selected={selectedColour} onChange={handleColourSelectedEvent} />
          <UISegment options={shadeOptions} selected={selectedShade} onChange={handleShadeSelectedEvent} />
          <UISegment options={sizeOptions} selected={selectedSize} onChange={handleSizeSelectedEvent} />
          <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search icons..." />
        </div>

        <div className="sb-icon-grid">
          {filteredIcons.map(({ name, component }, index) => {
            const styledComponent = React.cloneElement(component, iconProp);

            return (
              <div key={index} className="sb-icon-cell">
                <div className="popup-message">{`<${name}/>`}</div>
                <div className="flex justify-center pb-1 pt-1">{styledComponent}</div>
                <div className="sb-icon-title">{FriendlyName(name)}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

function convertOptionsToProps(colourOption: OptionModel<EnumColor>, sizeOption: OptionModel<string>, shadeOption: OptionModel<string>): IIconProps {
  var prop: IIconProps = {};

  console.log("convert options to props");

  switch (shadeOption.key) {
    case "l":
      prop.lighter = true;
      break;

    case "d":
      prop.darker = true;
      break;
  }

  // Using a switch statement for colourOption.text
  switch (colourOption.data) {
    case EnumColor.default:
      prop.default = true;
      break;
    case EnumColor.success:
      prop.success = true;
      break;
    case EnumColor.primary:
      prop.primary = true;
      break;
    case EnumColor.secondary:
      prop.secondary = true;
      break;
    case EnumColor.info:
      prop.info = true;
      break;
    case EnumColor.warning:
      prop.warning = true;
      break;
    case EnumColor.danger:
      prop.danger = true;
      break;
  }

  // Using a switch statement for sizeOptions (unchanged)
  switch (sizeOption.text) {
    case "Extra Small":
      prop.extraSmall = true;
      break;
    case "Small":
      prop.small = true;
      break;
    case "Smaller":
      prop.smaller = true;
      break;
    case "Regular":
      prop.regular = true;
      break;
    case "Larger":
      prop.larger = true;
      break;
    case "Large":
      prop.large = true;
      break;
    case "Extra Large":
      prop.extraLarge = true;
      break;
  }
  return prop;
}

function getColours(): Array<string> {
  return [
    "#55efc4",
    "#81ecec",
    "#74b9ff",
    "#a29bfe",
    "#dfe6e9",
    "#00b894",
    "#00cec9",
    "#0984e3",
    "#6c5ce7",
    "#b2bec3",
    "#ffeaa7",
    "#fab1a0",
    "#ff7675",
    "#fd79a8",
    "#636e72",
    "#fdcb6e",
    "#e17055",
    "#d63031",
    "#e84393",
    "#2d3436",
  ];
}

function GetIcons(): Array<{
  name: string;
  component: React.JSX.Element;
}> {
  const icons = [
    UIIconAlertCrossCircle,
    UIIconAlertCrossCircleSolid,
    UIIconAlertExclamationCircle,
    UIIconAlertExclamationCircleSolid,
    UIIconAlertExclamationTriangle,
    UIIconAlertExclamationOctagon,
    UIIconAlertExclamationOctagonSolid,
    UIIconAlertExclamationTriangleSolid,
    UIIconAlertInfoCircle,
    UIIconAlertInfoCircleSolid,
    UIIconAlertQuestionCircle,
    UIIconAlertQuestionCircleOctagon,
    UIIconAlertQuestionCircleOctagonSolid,
    UIIconAlertQuestionCircleSolid,
    UIIconAlertSuccessCircle,
    UIIconAlertSuccessCircleSolid,
    UIIconArrowDown,
    UIIconArrowLeft,
    UIIconArrowRight,
    UIIconArrowUp,
    UIIconBars,
    UIIconBell,
    UIIconBellActive,
    UIIconBellActiveSolid,
    UIIconBellRing,
    UIIconBellRingSolid,
    UIIconBellSolid,
    UIIconBookmark,
    UIIconBookmarkSolid,
    UIIconCalendar,
    UIIconCalendarSolid,
    UIIconCaretDown,
    UIIconCaretDownSolid,
    UIIconCaretLeft,
    UIIconCaretLeftSolid,
    UIIconCaretRight,
    UIIconCaretRightSolid,
    UIIconCaretUp,
    UIIconCaretUpSolid,
    UIIconChevronDoubleDown,
    UIIconChevronDoubleLeft,
    UIIconChevronDoubleRight,
    UIIconChevronDoubleUp,
    UIIconChevronFirst,
    UIIconChevronFirstSolid,
    UIIconChevronLargeDown,
    UIIconChevronLargeLeft,
    UIIconChevronLargeRight,
    UIIconChevronLargeUp,
    UIIconChevronLast,
    UIIconChevronLastSolid,
    UIIconChevronSingleDown,
    UIIconChevronSingleLeft,
    UIIconChevronSingleRight,
    UIIconChevronSingleUp,
    UIIconCloudUp,
    UIIconCloudUpSolid,
    UIIconCog,
    UIIconCogSolid,
    UIIconCross,
    UIIconCrossCircle,
    UIIconCrossCircleSolid,
    UIIconDownload,
    UIIconDownloadSolid,
    UIIconEdit,
    UIIconEditSolid,
    UIIconFile,
    UIIconFileSolid,
    UIIconFileTick,
    UIIconFileTickSolid,
    UIIconFilter,
    UIIconFilterSolid,
    UIIconFlag,
    UIIconFlagSolid,
    UIIconHome,
    UIIconHomeSolid,
    UIIconList,
    UIIconListRectangle,
    UIIconListRectangleSolid,
    UIIconMail,
    UIIconMailOpen,
    UIIconMailOpenSolid,
    UIIconMailSolid,
    UIIconMessage,
    UIIconMessages,
    UIIconMessageSolid,
    UIIconMessagesSolid,
    UIIconMinusCircle,
    UIIconMinusCircleSolid,
    UIIconPlusCircle,
    UIIconPlusCircleSolid,
    UIIconSave,
    UIIconSaveSolid,
    UIIconSearch,
    UIIconSearchSolid,
    UIIconSort,
    UIIconSortArrows,
    UIIconSortLines,
    UIIconSortSolid,
    UIIconStar,
    UIIconStarSolid,
    UIIconStop,
    UIIconStopSolid,
    UIIconTelephone,
    UIIconTelephoneSolid,
    UIIconTick,
    UIIconTickBadge,
    UIIconTickBadgeSolid,
    UIIconTickCircle,
    UIIconTickCircleSolid,
    UIIconTrash,
    UIIconTrashSolid,
    UIIconTruck,
    UIIconTruckSolid,
    UIIconUpload,
    UIIconUploadSolid,
    UIIconUser,
    UIIconUserCircle,
    UIIconUserCircleSolid,
    UIIconUsers,
    UIIconUserSolid,
    UIIconUsersSolid,
  ].map((IconComponent) => ({
    name: IconComponent.displayName || IconComponent.name,
    component: <IconComponent />,
  }));

  return icons;
}

function FriendlyName(value: string): string {
  return value
    .replace("UIIcon", "")
    .replace(/([A-Z])/g, " $1") // Insert a space before each uppercase letter
    .trim();
}

function getShadeOptions(): Array<OptionModel<string>> {
  return [new OptionModel<string>("d", "Darker"), new OptionModel<string>("r", "Regular"), new OptionModel<string>("l", "Lighter")];
}

function getSizeOptions(): Array<OptionModel<string>> {
  return [
    new OptionModel<string>("xs", "Extra Small"),
    new OptionModel<string>("sm", "Small"),
    new OptionModel<string>("s", "Smaller"),
    new OptionModel<string>("r", "Regular"),
    new OptionModel<string>("l", "Larger"),
    new OptionModel<string>("el", "Large"),
    new OptionModel<string>("2xl", "Extra Large"),
  ];
}
