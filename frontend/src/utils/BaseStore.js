import {
    observable,
    computed,
    action,
  } from 'mobx';
  
  import BaseProvider from './Provider';
  import { handleErr } from './request';
  
  export class BaseStore {
    @observable initial = true;
    @observable loading = false;
  
    @computed get ready() {
      return !this.initial && !this.loading;
    }
  
    /**
     *
     * @param {Object} config {message: String, ...other_attr }
     * @return {Promise} reject
     */
    createNormalErrorPromise(config) {
      const err = new Error(config.message || 'it\'s loading');
      Object.keys(config)
        .filter(key => (key !== 'message'))
        .forEach((key) => {
          err[key] = config[key];
        });
  
      if (!err.detail) {
        err.detail = '正在加载中, 请稍后。';
      }
  
      return Promise.reject(err).catch(handleErr);
    }
  }
  
  export class ListStore {
    @observable listInitial = true;
    @observable detailInitial = true;
    @observable listLoading = false;
    @observable detailLoading = false;
    listPromise = null;
  
    @observable list = [];
    @observable detail = {};
  
    @observable listErrorStatus = null;
    @observable retrieveErrorStatus = null;
  
    // should override
  
    listUrl = '';
    listOptions = {};
    retrieveOptions = {};
  
    @computed get listReady() {
      return !this.listInitial && !this.listLoading;
    }
  
    @computed get detailReady() {
      return !this.detailInitial && !this.detailLoading;
    }
  
    @action fetchList(payload = {}) {
      let promise;
  
      if (this.listLoading) {
        const err = new Error('it\'s loading');
        err.detail = '正在加载中, 请稍后。';
  
        promise = Promise.reject(err).catch(handleErr);
      } else {
        this.listLoading = true;
        promise = BaseProvider.get(this.listUrl, { ...this.listOptions, ...payload })
          .then((result) => {
            this.listPromise = null;
            this.listLoading = false;
            if (!result.err) {
              this.listInitial = false;
              this.list = result.data;
            }
  
            return result;
          });
        this.listPromise = promise;
      }
  
      return promise;
    }
  
    @action retrieve(lookUp, payload = {}) {
      let promise;
  
      if (this.detailLoading) {
        const err = new Error('it\'s loading');
        err.detail = '正在加载中, 请稍后。';
        promise = Promise.reject(err).catch(handleErr);
      } else {
        this.detailLoading = true;
  
        promise = BaseProvider.get(`${this.listUrl}${lookUp}/`, { ...this.retrieveOptions, ...payload })
          .then((result) => {
            this.detailLoading = false;
            if (!result.err) {
              this.detailInitial = false;
              this.detail = result.data;
            }
  
            return result;
          });
      }
  
      return promise;
    }
  
  
    @action create(payload) {
      return BaseProvider
        .post(`${this.listUrl}`, payload)
        .then((result) => {
          const { err, data } = result;
          if (!err) {
            this.list.push(data);
          }
  
          return result;
        });
    }
  
    @action put = (lookup, payload) => {
      return BaseProvider
        .put(`${this.listUrl}${lookup}/`, payload)
        .then((result) => {
          const { err, data } = result;
          if (!err) {
            this.detail = data;
          }
  
          return result;
        });
    };
  
  
    @action del(lookup) {
      return BaseProvider
        .delete(`${this.listUrl}${lookup}`)
        .then((result) => {
          const { err } = result;
          if (!err) {
            for (const [index, item] of this.list.entries()) {
              if (item.id === lookup) {
                this.list.splice(index, 1);
              }
            }
          }
  
          return result;
        });
    }
  
    @action reset() {
      this.listInitial = true;
      this.detailInitial = true;
      this.listLoading = false;
      this.detailLoading = false;
      this.listPromise = null;
      this.list = [];
      this.detail = {};
      this.listErrorStatus = null;
      this.retrieveErrorStatus = null;
      // TODO cancel the promise of request
    }
  }
  
  