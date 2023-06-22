import * as request from "../../../utils/requests/getAuth.request";

describe(`Compare, count, and verify the number of objects where the property above appears`, () => {
  let responseBody;
  let category;
  let httpstatus;
  let jsonresponse

  before(() => {
    request.getEntries().should((response) => {
      chai.expect(response.status).to.eq(200); 
      responseBody = response.body;
      httpstatus = response.status;
      jsonresponse = JSON.stringify(responseBody)
      //category = responseBody[`Category`];
    });
  });

  context(`Verify that the response contains “Category: Authentication & Authorization”`, () => {
    it('Given that I have access to the API', () => {});
    it('When I send the request', () => {});
    it('Then the HTTP status should be 200', () => {
      chai.expect(httpstatus).to.eq(200);
    });
    it('And the response body should contain "Category: Authentication & Authorization"', () => {
      cy.log(jsonresponse);
      chai.expect(jsonresponse).to.contain("Category: Authentication & Authorization");
    });
  });

  context(`Count and Print the Quantity of Matches`, () => {
    it('Given that I have access to the API', () => {});
    it('When I send the request', () => {});
    it('Then the HTTP status should be 200', () => {
      chai.expect(httpstatus).to.eq(200);
    });
    it('And the response body should contain "Category: Authentication & Authorization"', () => {
      cy.log(jsonresponse);
      chai.expect(jsonresponse).to.contain("Category: Authentication & Authorization");
    });
    it('And the number of matches should be printed in the console', () => {
      const count = count(jsonresponse, 'Category')['Category: Authentication & Authorization'];
      cy.console.log(count);
    });
  });
});