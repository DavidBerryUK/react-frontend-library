import EnumThemeVariant from "../../components-ui/enums/EnumThemeVariant";
import IButtonConfig from "./sections/IButtonConfig";
import ISolidColorConfig from "./sections/ISolidColorConfig";
import ITextFieldConfig from "./sections/ITextFieldConfig";

export default interface IStyleConfig {
  theme: EnumThemeVariant;

  // Generic - Button

  textField: ITextFieldConfig;
  button: IButtonConfig;
  solid: ISolidColorConfig;
}
