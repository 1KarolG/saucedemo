import { Configuration } from "../support/configuration";
import { ApiRequestHelper } from "../support/api-request-helper";

describe('Verify Airport Gap service using API tools', () => {
    const apiHandler = new ApiRequestHelper();

    it('Verify GET /airports returns 30 items', () => {
        apiHandler.getRequest(Configuration.baseEndpoointURL + Configuration.airportsEndpoint, Configuration.authToken).then((response) => {
            expect(response.status).to.eq(Configuration.apiOkResponseStatus);
            cy.wrap(response.body).its("data").should('have.length', Configuration.apiResponseDataSize);
        });
    })

    it('Verify GET /airports returns list of expected airport names', () => {
        apiHandler.getRequest(Configuration.baseEndpoointURL + Configuration.airportsEndpoint, Configuration.authToken).then((response) => {
            expect(response.status).to.eq(Configuration.apiOkResponseStatus);
            const responseAirportNames = response.body.data.map((e: { attributes: { name: string; }; }) => e.attributes.name);
            Configuration.expectedAirportNames.forEach(name => {
                expect(responseAirportNames).to.include(name);
            });
        });
    })

    it('Verify POST /airport/distance returns results in kilometers greater than expected', () => {
        apiHandler.postRequest(Configuration.baseEndpoointURL + Configuration.distanceEndpoint, Configuration.requestBody, Configuration.authToken).then((response) => {
            expect(response.status).to.eq(Configuration.apiOkResponseStatus);
            cy.wrap(response.body).its("data").its("attributes").its("kilometers").should('be.greaterThan', Configuration.expectedDistance);
        });
    })
})