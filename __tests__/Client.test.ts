import { Client } from '../src/api/Client';

test('My Client Say Hello Dramatically', () => {
    return Client.dramaticWelcome().then(data => expect(data).toBe(2));
});