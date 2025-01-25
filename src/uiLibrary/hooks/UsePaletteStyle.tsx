import EnumPaletteColor from "../enums/EnumPaletteColor";
import EnumPaletteShade from "../enums/EnumPaletteShade";
import IPropPaletteColour from "../interfaces/properties/IPropPaletteColour";
import IPropPaletteShade from "../interfaces/properties/IPropPaletteShade";

const UsePaletteStyle = (style: IPropPaletteColour & IPropPaletteShade): string => {
  const color =
    (style.slate && EnumPaletteColor.slate) ||
    (style.gray && EnumPaletteColor.gray) ||
    (style.zinc && EnumPaletteColor.zinc) ||
    (style.neutral && EnumPaletteColor.neutral) ||
    (style.stone && EnumPaletteColor.stone) ||
    (style.red && EnumPaletteColor.red) ||
    (style.orange && EnumPaletteColor.orange) ||
    (style.amber && EnumPaletteColor.amber) ||
    (style.yellow && EnumPaletteColor.yellow) ||
    (style.lime && EnumPaletteColor.lime) ||
    (style.green && EnumPaletteColor.green) ||
    (style.emerald && EnumPaletteColor.emerald) ||
    (style.teal && EnumPaletteColor.teal) ||
    (style.cyan && EnumPaletteColor.cyan) ||
    (style.sky && EnumPaletteColor.sky) ||
    (style.blue && EnumPaletteColor.blue) ||
    (style.indigo && EnumPaletteColor.indigo) ||
    (style.violet && EnumPaletteColor.violet) ||
    (style.purple && EnumPaletteColor.purple) ||
    (style.fuchsia && EnumPaletteColor.fuchsia) ||
    (style.pink && EnumPaletteColor.pink) ||
    (style.rose && EnumPaletteColor.rose) ||
    null;

  const shade =
    (style.shade50 && EnumPaletteShade.shade50) ||
    (style.shade100 && EnumPaletteShade.shade100) ||
    (style.shade150 && EnumPaletteShade.shade150) ||
    (style.shade200 && EnumPaletteShade.shade200) ||
    (style.shade250 && EnumPaletteShade.shade250) ||
    (style.shade300 && EnumPaletteShade.shade300) ||
    (style.shade350 && EnumPaletteShade.shade350) ||
    (style.shade400 && EnumPaletteShade.shade400) ||
    (style.shade450 && EnumPaletteShade.shade450) ||
    (style.shade500 && EnumPaletteShade.shade500) ||
    (style.shade550 && EnumPaletteShade.shade550) ||
    (style.shade600 && EnumPaletteShade.shade600) ||
    (style.shade650 && EnumPaletteShade.shade650) ||
    (style.shade700 && EnumPaletteShade.shade700) ||
    (style.shade750 && EnumPaletteShade.shade750) ||
    (style.shade800 && EnumPaletteShade.shade800) ||
    (style.shade850 && EnumPaletteShade.shade850) ||
    (style.shade900 && EnumPaletteShade.shade900) ||
    (style.shade950 && EnumPaletteShade.shade950) ||
    null;

  if (color !== null && shade !== null) {
    return `bg-${color}-${shade}`;
  }

  if (color === null && shade === null) {
    return `bg-${EnumPaletteColor.slate}-${EnumPaletteShade.shade100}`;
  }

  if (color === null) {
    return `bg-${EnumPaletteColor.slate}-${shade}`;
  }

  if (shade === null) {
    return `bg-${color}-${EnumPaletteShade.shade500}`;
  }

  return "";
};

export default UsePaletteStyle;
