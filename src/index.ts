import got from 'got';

export async function verify(data: string): Promise<void> {
  try {
    const resp = await got.post('https://arkvatar.com/api/verify', {
      body: {
        identifier: data,
      },
      headers: {
        'Content-type': 'application/json',
      },
      json: true,
    });
    return resp.body;
  } catch (error) {
    return error.response.body;
  }
}

export async function show(data: string): Promise<void> {
  try {
    const resp = await got(`https://arkvatar.com/api/${data}`, {
      headers: {
        'Content-type': 'application/json',
      },
      json: true,
    });
    return resp.body;
  } catch (error) {
    return error.response.body;
  }
}

export async function store(data: string, identifierType: string): Promise<void> {
  try {
    const resp = await got.post('https://arkvatar.com/api/store', {
      body: {
        identifier: data,
        type: identifierType,
      },
      headers: {
        'Content-type': 'application/json',
      },
      json: true,
    });
    return resp.body;
  } catch (error) {
    return error.response.body;
  }
}
