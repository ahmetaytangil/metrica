import {create} from "./create";

export const get = (path, _success, _catch, _finally) => {
    create()
        .get(path)
        .then(result => {
            if (result.status === 200) {
                _success(result.data)
            }
        })
        .catch(e => _catch(e.response.data.message))
        .finally(() => _finally)
}