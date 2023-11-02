import { _GET, _POST, _PATCH, _DELETE } from "./request";

class User {

    _authenticate = () => _GET('/api/user/authenticate')
    _create = (data) => _POST('/api/user/login', data)
    _delete = (_id) => _DELETE(`/api/user/delete-account/${_id}`)

}

class Prompt {

    _create = (data) => _POST('/api/prompt/new', data);
    _getAll = () => _GET('/api/prompt');
    _getUserPosts = (_id) => _GET(`/api/user/${_id}/posts`) 
    _getOne = (_id) => _GET(`/api/prompt/${_id}`);
    _update = (_id, data) => _PATCH(`/api/prompt/${_id}`, data);
    _delete = (_id) => _DELETE(`/api/prompt/${_id}`)

}

export const Api = {
    _user : new User(),
    _prompt : new Prompt()
}