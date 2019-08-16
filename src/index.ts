import axios from 'axios'

export async function verify(data: string): Promise<any> {
  try {
    return await axios.post('https://arkvatar.com/api/verify',{
        identifier: data,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    return error;
  }
}

export async function show(data: string): Promise<any> {
  try {
    return await axios.get(`https://arkvatar.com/api/${data}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    return error;
  }
}

export async function store(data: string, identifierType: string): Promise<any> {
  try {
    return await axios.post('https://arkvatar.com/api/store', {
      identifier: data,
      type: identifierType,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    return error;
  }
}
