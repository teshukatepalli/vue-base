import {API} from '@/api';
import { storeAuthData, removeAuthData, currentUserId } from '@/helpers/Auth';

const state = {
//   isLoggedIn: false,
//   email: '',
//   data: {},
//   error: ''
};

const mutations = {
//   login(state, {email, data}){
//     state.isLoggedIn = true;
//     state.email = email;
//     state.data = data;
//   },
//   login_error(state, err)
//   {
//     state.error = err;
//   },
//   logout(state){
//     state.isLoggedIn = false;
//     state.email = '';
//     state.data = {};
//   },

  // Set skipcheck in user permissions
//   setSkipCheck(state, skipcheck){
//     state.data.permissions.skipcheck = {
//       ...state.data.permissions.skipcheck,
//       ...skipcheck
//     }
//   }
};

const actions = {
//   logout(context){
//     context.commit('logout');
//     removeAuthData();
//   },

//   async login(context, { email, password }){
//     try{
//       let { data } = await API.Auth.apiTokenAuthPost({ email, password });
//       context.commit('login', { email, data: data.user });
//       storeAuthData(data);
//     } catch (e) {
//       let error;
//       if(e.response.status == 403) {
//         error = e.response.data.detail;
//       }
//       context.commit('login_error', error)
//     }
//   },

  // If the user is previously logged in, do auto login
//   async autoLogin(context){
//     if(!currentUserId()){
//       return;
//     }

//     try{
//       let { data } = await API.User.get(currentUserId())
//       context.commit('login', { email: data.username, data: data });
//     } catch(e){
      // Remove stale auth data, as auto login has failed
//       removeAuthData();
//     }
//   },

}

export default {
  state,
  mutations,
  actions
}