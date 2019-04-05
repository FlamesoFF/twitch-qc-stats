new class RestWorker {
    constructor() {
        self.onmessage = async (message) => {
            const {method, type, url} = message.data;

            switch (method) {
                case 'GET':
                    try {
                        const data = await this.getData(url);

                        if (data.code !== 404) {
                            self.postMessage({
                                type,
                                data
                            });
                        } else {
                            self.postMessage({
                                type,
                                error: data
                            });
                        }
                    } catch (error) {
                        error = JSON.parse(JSON.stringify(error));

                        self.postMessage({
                            type,
                            error
                        });
                    }
                    break;
            }
        }

        // TEST
        // setInterval(() => {
        //     fetch('https://stats.quake.com/api/v2/Player/Stats?name=flamesoff');
        // }, 100);
    }

    async getData(url) {
        let response;
        let data;

        response = await fetch(url);
        data = await response.json();

        return data;
    }
}