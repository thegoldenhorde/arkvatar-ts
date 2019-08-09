const got = require('got');

export class Arkvatar {
    static async verify(data: String): Promise<void> {
        try {
            let options = {
                json: true,
                headers: {
                    'Content-type': 'application/json'
                },
                body: {
                    identifier: data
                }
            };

            const resp = await got.post('https://arkvatar.com/api/verify', options);
            return resp.body;
        } catch (error) {
            return error.response.body;
        }
    }

    static async show(data: String): Promise<void> {
        try {
            let options = {
                json: true,
                headers: {
                    'Content-type': 'application/json'
                }
            };

            const resp = await got(`https://arkvatar.com/api/${data}`, options);
            return resp.body;
        } catch (error) {
            return error.response.body;
        }
    }

    static async store(data: String, type: String): Promise<void> {
        try {
            let options = {
                json: true,
                headers: {
                    'Content-type': 'application/json'
                },
                body: {
                    type: type,
                    identifier: data
                }
            };

            const resp = await got.post('https://arkvatar.com/api/store', options);
            return resp.body;
        } catch (error) {
            return error.response.body;
        }
    }
}