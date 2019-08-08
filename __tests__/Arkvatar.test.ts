import { Arkvatar } from '../src/api/Arkvatar';

const nock = require('nock');

test('Arkvatar can verify a given address without multiple collisions', () => {
    return Arkvatar.verify("ARVNmpr14oh1X3Ee31TVF4vQr2QmfXvbwE").then(data => expect(data).toBe(Promise));
});