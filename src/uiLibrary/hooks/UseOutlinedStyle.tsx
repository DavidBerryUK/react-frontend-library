import IPropOutline from "../interfaces/properties/IPropOutline";

const useStyleOutlined = (prefix: string, size: IPropOutline): string => {
  var value = "";
  if (size.outlined) {
    value = "outlined";
  }
  return `${prefix}-${value}`;
};

export default useStyleOutlined;
