import { Arkvatar } from '../src/arkvatar';

test('Arkvatar can verify a given address without multiple collisions', async () => {
    return Arkvatar.verify("0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e").then(data => expect(data).toMatchObject({"data": expect.anything()}));
});

test('Arkvatar can verify a given address with multiple collisions', async () => {
    return Arkvatar.verify("ALhWkv1uGfujoVdRRiaFzrKzCwJvPkz7hi").then(data => expect(data).toMatchObject({"data": expect.anything()}));
});

test('Arkvatar can fail to verify and handle an error', async () => {
    return Arkvatar.verify("invalidaddress").then(data => expect(data).toMatchObject({"error": expect.anything()}));
});

test('Arkvatar can store a new Arkvatar', async () => {
    let number = Math.floor(Math.random() * 666) + 1;
    return Arkvatar.store(`azerty${number}@gmail.com`, "Email").then(data => expect(data).toMatchObject({"error": expect.anything()}));
});

test('Arkvatar can get an existing Arkvatar', async () => {
    return Arkvatar.show("ALhWkv1uGfujoVdRRiaFzrKzCwJvPkz7hi").then(data => expect(data).toMatchObject({"url": expect.anything()}));
});