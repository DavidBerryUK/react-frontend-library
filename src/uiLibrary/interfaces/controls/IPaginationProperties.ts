import IPropColor from "../properties/IPropColor";

type IPaginationProperties = IPropColor & {
  page: number;
  pageCount: number;
  onPageChanged?: (page: number) => void;
};

export default IPaginationProperties;
