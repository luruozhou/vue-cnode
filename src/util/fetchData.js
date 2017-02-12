import Vue from 'vue'

export default {
  getTopics (tab, pageNo, pageSize){
    let requestUrl = `/api/v1/topics?tab=${tab}&page=${pageNo}&limit=${pageSize}`
    return fetchData(requestUrl);
  },
  getTopicInfo (tid){
    let requestUrl = `/api/v1/topic/${tid}`;
    return fetchData(requestUrl);
  },
  login(accesstoken){
    let requestUrl = `/api/v1/accesstoken`;
    return fetchData(requestUrl,"post",{accesstoken:accesstoken});
  },
  userInfo(loginname){
    let requestUrl = `/api/v1/user/${loginname}`;
    return fetchData(requestUrl);
  }
}


function fetchData(url, method, data) {
  data = data || {};
  method = method || 'get';
  return Vue.http[method](url, data, {
    emulateJSON: true
  })
    .then(res => {
      if (res.ok === true) {
        return res.body;
      }
      return null;
    })
    .catch(err => {
      console.log(err, 'error');
      return null;
    })
}


