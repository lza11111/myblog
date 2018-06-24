import { observable, action, runInAction, extendObservable } from 'mobx';
import { getCookie } from 'utils/cookies';
import BaseProvider from 'utils/Provider';
import { BaseStore } from 'utils/BaseStore';
import { handleErr } from 'utils/request';

class UserStore extends BaseStore {
  constructor() {
    super();
    const initialStore = window.__INITIAL_AUTH_STORE__ || {};
    extendObservable(this, {
      detail: {
        auth: false,
        loading: false,
        is_superuser: false,
        is_staff: false,
        ...initialStore.detail,
      },
      gk: { ...initialStore.gk },
    });
  }

  @observable CSRFToken = getCookie('csrftoken');
  @action refreshCSRFToken() {
    this.CSRFToken = getCookie('csrftoken');
  }

  // TODO login/logout
  // refresh CSRFToken after login/logout
  /* eslint-disable */

  @action fetch = async () => {
    if (this.detail.loading) {
      return
    }
    this.detail.loading = true;
    const { data, err } = await BaseProvider.get('/api/accounts/profile/');

    runInAction('update detail', () => {
      if (!err) {
        this.detail = {
          ...data,
          auth: true
        };
      }
      this.detail.loading = false
    });

    return { data, err };
  };

}
const store = new UserStore();

export default store;
