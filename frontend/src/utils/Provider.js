import axios from 'axios';
import { computed } from 'mobx';
import UserStore from '../auth/stores/UserStore';

import { request as handlePromise } from './request';

const BaseProvider = {

  @computed get provider() {
    return axios.create({
      withCredentials: true,
      headers: {
        'X-CSRFToken': UserStore.CSRFToken,
      },
    });
  },

  getInstance() {
    return this.provider;
  },

  request(...args) {
    return handlePromise(this.provider.request(...args));
  },

  get(...args) {
    return handlePromise(this.provider.get(...args));
  },

  post(...args) {
    return handlePromise(this.provider.post(...args));
  },

  put(...args) {
    return handlePromise(this.provider.put(...args));
  },

  patch(...args) {
    return handlePromise(this.provider.patch(...args));
  },

  delete(...args) {
    return handlePromise(this.provider.delete(...args));
  },

  options(...args) {
    return handlePromise(this.provider.options(...args));
  },

  head(...args) {
    return handlePromise(this.provider.head(...args));
  },

};

export default BaseProvider;
