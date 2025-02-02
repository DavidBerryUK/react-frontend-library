export default class NumberUtility {
  static format2dp(num: number | undefined): string {
    if (num === undefined) {
      return "";
    }
    const value = num.toFixed(2);
    return value;
  }
}
