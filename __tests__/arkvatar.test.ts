import * as Arkvatar from '../src/index';

test('Arkvatar can verify a given address without multiple collisions', async () => {
    const data = await Arkvatar.verify("azerty@gmail.com");

    if (data.response.status === 429) {
        expect(data.response.data).toMatchObject({'error': expect.anything()});
    } else {
        expect(data.response.data).toMatchObject({'data': expect.anything()});
    }
});

test('Arkvatar can verify a given address with multiple collisions', async () => {
    const data = await Arkvatar.verify("ALhWkv1uGfujoVdRRiaFzrKzCwJvPkz7hi");

    if (data.response.status === 429) {
        expect(data.response.data).toMatchObject({'error': expect.anything()});
    } else {
        expect(data.response.data).toMatchObject({'data': expect.anything()});
    }
});

test('Arkvatar handling error on fail to verify', async () => {
    const data = await Arkvatar.verify("invalidaddress");
    expect(data.response.data).toMatchObject({'error': expect.anything()});
});

test('Arkvatar can store a new Arkvatar', async () => {
    let number = Math.floor(Math.random() * 666) + 1;
    const data = await Arkvatar.store(`azerty${number}@gmail.com`, "Eth");

    if (data.response.status === 429) {
        expect(data.response.data).toMatchObject({'error': expect.anything()});
    } else {
        expect(data.response.data).toMatchObject({'data': expect.anything()});
    }
});

test('Arkvatar can show an existing Arkvatar', async () => {
    const data = await Arkvatar.show("ALhWkv1uGfujoVdRRiaFzrKzCwJvPkz7hi");

    if (data.response.status === 429) {
        expect(data.response.data).toMatchObject({'error': expect.anything()});
    } else {
        expect(data.response.data).toMatchObject({'url': expect.anything()});
    }
});