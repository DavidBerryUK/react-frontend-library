import { useMemo, useState } from "react";
import FieldModel from "../../../uiLibrary/models/fields/FieldModel";
import EnumFieldDataType from "../../../uiLibrary/enums/EnumFieldDataType";
import NumberUtility from "../../../utilities/NumberUtility";

const useLayoutExampleViewController = () => {
  const [forename, setForename] = useState<FieldModel>(FieldModel.create("forename", "Forename", EnumFieldDataType.string, "Brian"));
  const [surname, setSurname] = useState<FieldModel>(FieldModel.create("surname", "Surname", EnumFieldDataType.string, "Smith"));
  const [phone, setPhone] = useState<FieldModel>(FieldModel.create("phone", "Telephone No.", EnumFieldDataType.string, ""));
  const [email, setEmail] = useState<FieldModel>(FieldModel.create("email", "Email Address.", EnumFieldDataType.string, ""));
  const [price, setPrice] = useState<FieldModel>(FieldModel.create("price", "Unit Price.", EnumFieldDataType.number, ""));
  const [quantity, setQuantity] = useState<FieldModel>(FieldModel.create("quantity", "Quantity.", EnumFieldDataType.number, ""));
  const [discount, setDiscount] = useState<FieldModel>(FieldModel.create("discount", "Discount.", EnumFieldDataType.number, ""));
  const [total, setTotal] = useState<FieldModel>(FieldModel.create("total", "Total.", EnumFieldDataType.number, ""));

  const handleForenameUpdatedEvent = (value: FieldModel) => {
    setForename(value);
  };
  const handleSurnameUpdatedEvent = (value: FieldModel) => {
    setSurname(value);
  };
  const handlePhoneUpdatedEvent = (value: FieldModel) => {
    setPhone(value);
  };
  const handleEmailUpdatedEvent = (value: FieldModel) => {
    setEmail(value);
  };
  const handlePriceUpdatedEvent = (value: FieldModel) => {
    setPrice(value);
  };
  const handleQuantityUpdatedEvent = (value: FieldModel) => {
    setQuantity(value);
  };
  const handleDiscountUpdatedEvent = (value: FieldModel) => {
    setDiscount(value);
  };

  useMemo(() => {
    var priceSubTotal = (price.valueAsNumber ?? 0) * (quantity.valueAsNumber ?? 0);
    var discountSubTotal = (priceSubTotal * (discount.valueAsNumber ?? 0)) / 100;
    var finalTotal = NumberUtility.format2dp(priceSubTotal - discountSubTotal);

    setTotal(total.cloneWithValue(finalTotal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price.value, quantity.value, discount.value]);

  return {
    state: { forename, surname, phone, email, price, quantity, discount, total },
    handlers: {
      forname: handleForenameUpdatedEvent,
      surname: handleSurnameUpdatedEvent,
      phone: handlePhoneUpdatedEvent,
      email: handleEmailUpdatedEvent,
      price: handlePriceUpdatedEvent,
      quantity: handleQuantityUpdatedEvent,
      discount: handleDiscountUpdatedEvent,
    },
  };
};

export default useLayoutExampleViewController;
