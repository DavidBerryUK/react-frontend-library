import { useEffect, useState } from "react";
import "./styles/Style.scss";

const UIPaletteSwatch: React.FC = () => {
  const colours = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];
  const shades = ["50", "100", "150", "200", "250", "300", "350", "400", "450", "500", "550", "600", "650", "700", "750", "800", "850", "900", "950"];

  const [hexValues, setHexValues] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Wait for the DOM to render before calculating hex values
    const calculateHexValues = () => {
      const newHexValues: { [key: string]: string } = {};

      colours.forEach((color) => {
        shades.forEach((shade) => {
          const className = `bg-${color}-${shade}`;
          const tempDiv = document.createElement("div");
          tempDiv.className = className;
          document.body.appendChild(tempDiv);

          const computedStyle = getComputedStyle(tempDiv);
          const rgbValue = computedStyle.backgroundColor;
          newHexValues[`${color}-${shade}`] = rgbToHex(rgbValue);

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
    <div className="ui-palette">
      {colours.map((color) => (
        <div key={color} className="ui-swatch">
          <div className={`header bg-${color}-300`}>{color}</div>
          <div className="body">
            {shades.map((shade, index) => (
              <div key={index}>
                <div className={`well bg-${color}-${shade}`}></div>
                <div className="colour-info">
                  <div>{shade}</div>
                  <div>{hexValues[`${color}-${shade}`]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UIPaletteSwatch;
