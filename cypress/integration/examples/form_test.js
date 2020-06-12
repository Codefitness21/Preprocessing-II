
describe('Test our form inputs', function () {
it ('visits the Fun Bus app', function() {

    cy.visit("https://codefitness21.github.io/Preprocessing-II/")
});

it("second test", function () {
    cy.get(`[data-cy="name"]`).type("Fun Bus").should("have.value", "Emi")	
});

it("Second it Test", function () {});

})	