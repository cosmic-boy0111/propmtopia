import { _GET, _POST } from "./request";

class User {

    _authenticate = () => _GET('/api/user/authenticate')
    _create = (data) => _POST('/api/user/login', data)
    _delete = (data) => _POST('/api/user/delete-account', data)

}

class Prompt {

    _create = (data) => _POST('/api/prompt/new', data);
    _getAll = () => _GET('/api/prompt');
    _getUserPosts = (_id) => _GET(`/api/user/${_id}/posts`) 

}

export const Api = {
    _user : new User(),
    _prompt : new Prompt()
}