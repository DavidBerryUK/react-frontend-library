import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";

export default class FactoryCarLists {
  /**
   * Get a list of all available car Makers
   * @returns A list of makes as an OptionModel<number> array
   */
  public static GetMakes(): Array<OptionModel<number>> {
    return this.makeAndModels.map((make) => new OptionModel<number>(`${make.Id}`, make.name, make.Id));
  }

  /**
   * Get a list of car models for a given make
   * @returns A list of car models as an OptionModel<number> array
   */
  public static GetModelsForMake(makeId: number): Array<OptionModel<number>> {
    const make = this.makeAndModels.find((make) => make.Id === makeId);
    if (!make) return [];
    return make.models.map((model) => new OptionModel<number>(`${model.Id}`, model.name, model.Id));
  }

  /**
   * Get a list of colors for a car model
   * @returns A list of colors as an OptionModel<number> array
   */
  public static getColorsForModel(modelId: number): Array<OptionModel<number>> {
    // Find the model by iterating through all makes
    const model = this.makeAndModels.flatMap((make) => make.models).find((model) => model.Id === modelId);

    if (!model) return [];

    // Map colour IDs to OptionModel using the colors array
    return model.colours
      .map((colorId) => this.colors.find((color) => color.colorId === colorId))
      .filter((color) => color !== undefined) // Ensure color exists
      .map((color) => new OptionModel<number>(`${color!.colorId}`, color!.name, color!.colorId));
  }

  private static colors = [
    { colorId: 1, name: "Red" },
    { colorId: 2, name: "Blue" },
    { colorId: 3, name: "Black" },
    { colorId: 4, name: "White" },
    { colorId: 5, name: "Silver" },
    { colorId: 6, name: "Gray" },
  ];

  private static makeAndModels = [
    {
      Id: 100,
      name: "Toyota",
      models: [
        { Id: 101, name: "Camry", colours: [1, 2, 3] },
        { Id: 102, name: "Corolla", colours: [3, 4, 5] },
        { Id: 103, name: "RAV4", colours: [1, 2, 5] },
        { Id: 104, name: "Highlander", colours: [4, 5, 6] },
        { Id: 105, name: "Tacoma", colours: [2, 3, 6] },
        { Id: 106, name: "Tundra", colours: [1, 4, 6] },
        { Id: 107, name: "Prius", colours: [2, 3, 5] },
        { Id: 108, name: "Supra", colours: [1, 2] },
        { Id: 109, name: "Sienna", colours: [3, 4, 5] },
        { Id: 110, name: "4Runner", colours: [1, 2, 4] },
        { Id: 111, name: "Avalon", colours: [1, 4, 6] },
        { Id: 112, name: "C-HR", colours: [1, 5, 6] },
      ],
    },
    {
      Id: 200,
      name: "Honda",
      models: [
        { Id: 201, name: "Civic", colours: [1, 2, 4] },
        { Id: 202, name: "Accord", colours: [3, 5, 6] },
        { Id: 203, name: "CR-V", colours: [1, 4, 5] },
        { Id: 204, name: "Pilot", colours: [2, 4, 6] },
        { Id: 205, name: "Fit", colours: [1, 3, 6] },
        { Id: 206, name: "HR-V", colours: [1, 5] },
        { Id: 207, name: "Passport", colours: [2, 3, 5] },
        { Id: 208, name: "Odyssey", colours: [4, 5, 6] },
        { Id: 209, name: "Insight", colours: [1, 4, 6] },
        { Id: 210, name: "Ridgeline", colours: [3, 5, 6] },
        { Id: 211, name: "Element", colours: [2, 4] },
        { Id: 212, name: "Prelude", colours: [1, 5, 6] },
      ],
    },
    {
      Id: 300,
      name: "Ford",
      models: [
        { Id: 301, name: "Focus", colours: [1, 2, 3] },
        { Id: 302, name: "Fusion", colours: [3, 4, 6] },
        { Id: 303, name: "Escape", colours: [1, 4, 5] },
        { Id: 304, name: "Explorer", colours: [2, 4, 5] },
        { Id: 305, name: "F-150", colours: [1, 3, 5] },
        { Id: 306, name: "Mustang", colours: [2, 5, 6] },
        { Id: 307, name: "Edge", colours: [1, 3, 6] },
        { Id: 308, name: "Ranger", colours: [2, 4] },
        { Id: 309, name: "Bronco", colours: [1, 3, 5] },
        { Id: 310, name: "Expedition", colours: [2, 5, 6] },
        { Id: 311, name: "Taurus", colours: [1, 4, 6] },
        { Id: 312, name: "Fiesta", colours: [1, 3, 5] },
      ],
    },
    {
      Id: 400,
      name: "Chevrolet",
      models: [
        { Id: 401, name: "Malibu", colours: [1, 2, 4] },
        { Id: 402, name: "Impala", colours: [3, 5, 6] },
        { Id: 403, name: "Equinox", colours: [1, 4, 5] },
        { Id: 404, name: "Traverse", colours: [2, 4, 6] },
        { Id: 405, name: "Silverado", colours: [1, 3, 6] },
        { Id: 406, name: "Colorado", colours: [1, 5] },
        { Id: 407, name: "Tahoe", colours: [2, 3, 5] },
        { Id: 408, name: "Suburban", colours: [4, 5, 6] },
        { Id: 409, name: "Blazer", colours: [1, 4, 6] },
        { Id: 410, name: "Camaro", colours: [3, 5, 6] },
        { Id: 411, name: "Corvette", colours: [2, 4] },
        { Id: 412, name: "Trailblazer", colours: [1, 5, 6] },
      ],
    },
    {
      Id: 500,
      name: "BMW",
      models: [
        { Id: 501, name: "3 Series", colours: [1, 2, 3] },
        { Id: 502, name: "5 Series", colours: [3, 4, 6] },
        { Id: 503, name: "7 Series", colours: [1, 4, 5] },
        { Id: 504, name: "X1", colours: [2, 4, 5] },
        { Id: 505, name: "X3", colours: [1, 3, 5] },
        { Id: 506, name: "X5", colours: [2, 5, 6] },
        { Id: 507, name: "X7", colours: [1, 3, 6] },
        { Id: 508, name: "M3", colours: [2, 4] },
        { Id: 509, name: "M5", colours: [1, 3, 5] },
        { Id: 510, name: "M8", colours: [2, 5, 6] },
        { Id: 511, name: "Z4", colours: [1, 4, 6] },
        { Id: 512, name: "i8", colours: [1, 3, 5] },
      ],
    },
    {
      Id: 600,
      name: "Mercedes",
      models: [
        { Id: 601, name: "A-Class", colours: [1, 2, 4] },
        { Id: 602, name: "C-Class", colours: [3, 5, 6] },
        { Id: 603, name: "E-Class", colours: [1, 4, 5] },
        { Id: 604, name: "S-Class", colours: [2, 4, 6] },
        { Id: 605, name: "GLA", colours: [1, 3, 6] },
        { Id: 606, name: "GLC", colours: [1, 5] },
        { Id: 607, name: "GLE", colours: [2, 3, 5] },
        { Id: 608, name: "GLS", colours: [4, 5, 6] },
        { Id: 609, name: "AMG GT", colours: [1, 4, 6] },
        { Id: 610, name: "CLA", colours: [3, 5, 6] },
        { Id: 611, name: "SL", colours: [2, 4] },
        { Id: 612, name: "V-Class", colours: [1, 5, 6] },
      ],
    },
  ];
}
