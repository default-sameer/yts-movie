import axios from "axios";

const cancelConfig = {
    request: null,
    cancelToken: null
}

async function axiosGetCancellable(url) {
    if (cancelConfig.request) {
        cancelConfig.request.cancel('Operation Canceled !');
    }
    cancelConfig.request = axios.CancelToken.source();
    cancelConfig.cancelToken = cancelConfig.request.token;
    Object.assign(cancelConfig);
    try {
        const res = await axios.get(url, cancelConfig)
        return res
    } catch (error) {
        if (error.message !== 'Operation Canceled !') {
            throw error;
        }
    }
}

export { axiosGetCancellable }