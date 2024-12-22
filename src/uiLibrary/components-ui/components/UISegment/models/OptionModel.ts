export default class OptionModel<T> {
  key: string;
  text: string;
  data?: T;

  constructor(key: string, text: string, data?: T) {
    this.key = key;
    this.text = text;
    this.data = data;
  }
}
