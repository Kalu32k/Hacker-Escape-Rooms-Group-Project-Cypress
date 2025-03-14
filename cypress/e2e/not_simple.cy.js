describe("Simple test", () => {
  it("Check website title", () => {
    cy.visit("https://nishune.github.io/Hacker-Escape-Rooms-Group-Project/");
    cy.contains("h1", "Hacker Escape Rooms");
  });

  it("Search for play online link", () => {
    cy.visit("https://nishune.github.io/Hacker-Escape-Rooms-Group-Project/");
    cy.viewport(1920, 1080);
    cy.get("a").contains("Play online").click();
  });

  it("Search for play on-site link", () => {
    cy.visit("https://nishune.github.io/Hacker-Escape-Rooms-Group-Project/");
    cy.viewport(1920, 1080);
    cy.get("a").contains("Play on-site").click();
  });

  it("Filter button", () => {
    cy.visit("https://nishune.github.io/Hacker-Escape-Rooms-Group-Project/");
    cy.viewport(1920, 1080);
    cy.get("a").contains("Play on-site").click();
    cy.get("button").contains("Filter challenges").click();
  });

  it('Click "Web" tag in filter', () => {
    cy.visit("https://nishune.github.io/Hacker-Escape-Rooms-Group-Project/");
    cy.viewport(1920, 1080);
    cy.get("a").contains("Play on-site").click();
    cy.get("button").contains("Filter challenges").click();
    cy.get("h5").contains("By tags");
    cy.get("button").contains("Web").click();
  });

  it("Search for the story link", () => {
    cy.visit("https://nishune.github.io/Hacker-Escape-Rooms-Group-Project/");
    cy.viewport(1920, 1080);
    cy.get("a").contains("The story").click();
  });

  it("Search for contact us link", () => {
    cy.visit("https://nishune.github.io/Hacker-Escape-Rooms-Group-Project/");
    cy.viewport(1920, 1080);
    cy.get("a").contains("Contact us").click();
  });

  it("Book a room", () => {
    cy.visit("https://nishune.github.io/Hacker-Escape-Rooms-Group-Project/");
    cy.viewport(1920, 1080);
    cy.get("button").contains("Book this room").click();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Format the date as YYYY-MM-DD
    const formattedTomorrow = tomorrow.toISOString().split("T")[0];

    cy.get('input[type="date"]').type(formattedTomorrow);
    cy.get("button").contains("Search available times").click();
    cy.get("#name-text").type("Test Person");
    cy.get("#email-text").type("Test@Pers.on");
    cy.get("#phone-number").type("0701234567");
    cy.get("button").contains("Submit").click();
    cy.get(".modalTitle").contains("Thank you!");
    cy.get("a").contains("Back to challenges").click();
  });

  it("Fail on no date to book a room", () => {
    cy.visit("https://nishune.github.io/Hacker-Escape-Rooms-Group-Project/");
    cy.viewport(1920, 1080);
    cy.get("button").contains("Book this room").click();
    cy.get("button").contains("Search available times").click();
    cy.get(".modal__date_error_text")
      .should("be.visible")
      .contains("No date selected");
  });

  it("Fail on wrong date to book a room", () => {
    cy.visit("https://nishune.github.io/Hacker-Escape-Rooms-Group-Project/");
    cy.viewport(1920, 1080);
    cy.get("button").contains("Book this room").click();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() - 2);

    // Format the date as YYYY-MM-DD
    const formattedTomorrow = tomorrow.toISOString().split("T")[0];

    cy.get('input[type="date"]').type(formattedTomorrow);
    cy.get("button").contains("Search available times").click();
    cy.get(".modal__date_error_text")
      .should("be.visible")
      .contains("Invalid date selected");
  });
});
