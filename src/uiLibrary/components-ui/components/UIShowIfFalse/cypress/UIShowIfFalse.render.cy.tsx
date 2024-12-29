import React from "react";
import TestColorSwatch from "../../../../storybook/TestColorSwatch";
import UIShowIfFalse from "../UIShowIfFalse";
import "../../../../../index.css";

describe("UIShowIf (Render)", () => {
  //
  // ensure child control is visible
  //
  it("ensure child control is visible", () => {
    cy.mount(
      <UIShowIfFalse value={true}>
        <TestColorSwatch />
      </UIShowIfFalse>,
    );
    cy.get("#sample-child-control").should("exist");
  });

  //
  // ensure child controls are hidden
  //
  it("ensure child control is hidden with default value", () => {
    cy.mount(
      <UIShowIfFalse>
        <TestColorSwatch />
      </UIShowIfFalse>,
    );
    cy.get("#sample-child-control").should("not.exist");
  });

  it("ensure child control is hidden with explicit value", () => {
    cy.mount(
      <UIShowIfFalse value={false}>
        <TestColorSwatch />
      </UIShowIfFalse>,
    );
    cy.get("#sample-child-control").should("not.exist");
  });
});
