/// <reference types="cypress" />

describe("todo app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have empty todo list by default", () => {
    cy.get("#todo-list li").should("have.length", 0);
  });

  it("should have input field", () => {
    cy.get("#new-todo").should("exist");
  });

  it("should create new todos", () => {
    cy.get("#new-todo").type("Learn CSS");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("Learn Java");
    cy.get("#add-todo").click();
    cy.get("#todo-list li").should("have.length", 2);
    cy.get("#todo-list li").should("have.class", "");
  });

  it("should have filters", () => {
    cy.get("#filter-all").should("exist");
    cy.get("#filter-done").should("exist");
    cy.get("#filter-open").should("exist");
  });

  it("should filter todos", () => {
    cy.get("#new-todo").type("Learn CSS");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("Learn Java");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("Learn Cypress");
    cy.get("#add-todo").click();
    cy.get('[type="checkbox"]').check();
    cy.get("#filter-done").click();
    cy.get("#todo-list li").should("have.length", 3);
    cy.get("#filter-open").click();
    cy.get("#todo-list li").should("not.be.visible");
    cy.get("#filter-all").click();
    cy.get("#todo-list li").should("have.length", 3);
  });
  it.only("check delete button", () => {
    cy.get("#new-todo").type("Learn CSS");
    cy.get("#add-todo").click();
    cy.get('[type="checkbox"]').check();
    cy.get("#delete-todos").click();
    cy.get("#todo-list li").should("have.length", 0);
  });
  it.only("duplicate check", () => {
    cy.get("#new-todo").type("Learn CSS");
    cy.get("#add-todo").click();
    cy.get("#new-todo").type("Learn CSS");
    cy.get("#add-todo").click();
    cy.get("#todo-list li").should("have.length", 1);
  });
});
