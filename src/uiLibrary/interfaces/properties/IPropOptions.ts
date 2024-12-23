import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";

export default interface IPropOptions {
  options: Array<OptionModel<any>>;
  selected: OptionModel<any>;
}
