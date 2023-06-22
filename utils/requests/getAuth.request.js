const url = "https://api.publicapis.org/entries"

function getEntries() {
  return cy.request({
    method: "GET",
    url: `${url}`,
    headers: {},
    body: {}
  })
}

export { getEntries }