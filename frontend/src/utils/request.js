export function handleErr(err) {
    if (!err.response) {
      err.detail = err.message; // eslint-disable-line
    } else {
      // 目前是有next直接跳，之后页面全部都react化了应该统一管理一下跳转
      // 但是我想了一下不能这样，因为可能在跳转之前要做一些逻辑，最好把这个跳转逻辑抽象出来，方便的依赖注入
      if (err.response.statusText === 'FOUND') {
        if (err.response.data) {
          location.href = err.response.data.next;
          return {};
        }
      }
      // end
  
      const data = err.response.data;
      err.status = err.response.status; // eslint-disable-line
      if (data) {
        err.data = data; // eslint-disable-line
        err.detail = data.error || data.message || data.detail; // eslint-disable-line
      } else {
        err.detail = err.response.statusText; // eslint-disable-line
      }
    }
  
    return { err };
  }
  
  export function handleRes(res) {
    return { data: res.data, originRes: res };
  }
  
  export function request(promise) {
    return promise
      .then(handleRes)
      .catch(handleErr);
  }
  
  export function mock(data = {}, time = 500) {
    return new Promise(resolve => setTimeout(() => resolve(data), time));
  }
  