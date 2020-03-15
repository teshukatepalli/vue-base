import APIFetch from '@/helpers/APIFetch';

export class Auth {
    static apiTokenAuthPost(data) {
      return APIFetch.post('/api-token-auth/', data);
    }

    static passwordResetPost(data) {
      return APIFetch.post('/password-reset/', data);
    }

    static passwordResetConfirmPost(data) {
      return APIFetch.post('/password-reset-confirm/', data);
    }

    static resetTokenCheckGet(params){
      return APIFetch.get('/reset-token-check/', {params});
    }
}