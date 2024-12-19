import UIShowIfTrue from "../UIShowIfTrue";
import "../../../../../index.css";
import TestColorSwatch from "../../../../storybook/TestColorSwatch";

describe("UIShowIf (Render)", () => {
  //
  // ensure child control is visible
  //
  it("ensure child control is visible", () => {
    cy.mount(
      <UIShowIfTrue value={true}>
        <TestColorSwatch />
      </UIShowIfTrue>,
    );
    cy.get("#sample-child-control").should("exist");
  });

  //
  // ensure child controls are hidden
  //
  it("ensure child control is hidden with default value", () => {
    cy.mount(
      <UIShowIfTrue>
        <TestColorSwatch />
      </UIShowIfTrue>,
    );
    cy.get("#sample-child-control").should("not.exist");
  });

  it("ensure child control is hidden with explicit value", () => {
    cy.mount(
      <UIShowIfTrue value={false}>
        <TestColorSwatch />
      </UIShowIfTrue>,
    );
    cy.get("#sample-child-control").should("not.exist");
  });
});
