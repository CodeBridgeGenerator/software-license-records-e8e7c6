const assert = require('assert');
const app = require('../../src/app');

describe('\'software\' service', () => {
  it('registered the service', () => {
    const service = app.service('software');

    assert.ok(service, 'Registered the service (software)');
  });
});
