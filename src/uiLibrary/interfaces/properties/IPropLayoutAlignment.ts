import EnumGridAlign from "../../enums/EnumGridAlign";

export default interface IPropLayoutAlignment {
  alignment?: EnumGridAlign;
  default?: boolean;
  topLeft?: boolean;
  topCenter?: boolean;
  topRight?: boolean;
  middleLeft?: boolean;
  middleCenter?: boolean;
  middleEnd?: boolean;
  bottomLeft?: boolean;
  bottomCenter?: boolean;
  bottomRight?: boolean;
}
