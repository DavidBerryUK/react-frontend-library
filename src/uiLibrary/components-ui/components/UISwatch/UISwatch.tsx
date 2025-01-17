import { useEffect, useState } from "react";
import EnumPaletteColor from "../../../enums/EnumPaletteColor";
import EnumPaletteShade from "../../../enums/EnumPaletteShade";
import UIText from "../UIText/UIText";

interface IProperties {
  color: EnumPaletteColor;
}

const UISwatch: React.FC<IProperties> = ({ color }) => {
  const shades: string[] = Object.values(EnumPaletteShade);

  const [hexValues, setHexValues] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Wait for the DOM to render before calculating hex values
    const calculateHexValues = () => {
      const newHexValues: { [key: string]: string } = {};

      shades.forEach((shade) => {
        shades.forEach((shade) => {
          const className = `bg-${color}-${shade}`;
          const tempDiv = document.createElement("div");
          tempDiv.className = className;
          document.body.appendChild(tempDiv);
          const computedStyle = getComputedStyle(tempDiv);
          const rgbValue = computedStyle.backgroundColor;
          newHexValues[shade] = rgbToHex(rgbValue);
          document.body.removeChild(tempDiv);
        });
      });

      setHexValues(newHexValues);
    };

    const rgbToHex = (rgb: string) => {
      const result = rgb.match(/\d+/g)?.map(Number);
      if (!result || result.length < 3) return "#000000";
      var text =
        "#" +
        result
          .slice(0, 3)
          .map((x) => x.toString(16).padStart(2, "0"))
          .join("")
          .toUpperCase();

      return text.toUpperCase();
    };

    calculateHexValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ui-swatch">
      <div className={`header bg-${color}-300`}>{color}</div>
      <div className="body">
        {shades.map((shade, index) => (
          <div key={index}>
            <div className={`well bg-${color}-${shade}`}></div>
            <div className="colour-info">
              <UIText smallCaption>{shade}</UIText>
              <UIText smallCaption>{hexValues[shade]}</UIText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UISwatch;
