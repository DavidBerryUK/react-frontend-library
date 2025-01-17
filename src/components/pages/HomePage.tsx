import React from "react";
import UISwatch from "../../uiLibrary/components-ui/components/UISwatch/UISwatch";
import EnumPaletteColor from "../../uiLibrary/enums/EnumPaletteColor";
import UILayoutFlex from "../../uiLibrary/components-ui/components/UILayoutFlex/UILayoutFlex";

const HomePage: React.FC = () => {
  return (
    <UILayoutFlex gap4>
      <UISwatch color={EnumPaletteColor.teal} />
      <UISwatch color={EnumPaletteColor.pink} />
      <UISwatch color={EnumPaletteColor.slate} />
    </UILayoutFlex>
  );
};

export default HomePage;
