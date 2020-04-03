import axios from 'axios'

const CONFIG = {
  TIMEOUT: 20000,
  METHODS: ['get', 'put', 'post', 'delete']
}

const defaultFn = {
  generator (config) {
    return axios(config)
  },

  transformRequest ({ url, method, headers, data, timeout, withCredentials }) {
    const config = {
      url,
      method,
      timeout,
      withCredentials,
      headers: {
        'X-Request-With': 'XMLHttpRequest',
        'Content-type': 'application/json; charset=utf-8',
        ...headers
      }
    }
    if (method === 'get' || method === 'delete') {
      config.params = data
    } else {
      config.data = data
    }
    return config
  },

  transformResponse (response) {
    return response.data
      ? response.data
      : {
        code: response.status || '-1',
        data: response.statusText || 'error',
        msg: response.statusText || 'error'
      }
  },

  checkFail ({ code }) {
    return code !== 0
  }
}

const install = (Vue, options = {}) => {
  const {
    timeout: _timeout = CONFIG.TIMEOUT,
    methods = CONFIG.METHODS,
    target = Vue.prototype,
    // The following fields are common to all methods
    headers = {},
    generator = defaultFn.generator,
    transformRequest = defaultFn.transformRequest,
    transformResponse = defaultFn.transformResponse,
    checkFail = defaultFn.checkFail,
    failFn,
    successFn
  } = options

  methods.forEach((method) => {
    target[method] = (url, data, options = {}) => {
      const {
        timeout = _timeout,
        headers: _headers = {}, // Headers unique to each method
        withCredentials = false,
        context = this
      } = options

      const config = transformRequest({
        url, method, data, timeout, withCredentials, headers: { ...headers, ..._headers }
      }, context)

      return Promise.resolve(generator(config, context)).then((response = {}) => {
        const res = transformResponse(response)
        if (checkFail(res)) {
          failFn && failFn(url, res)
          return Promise.reject(res)
        } else {
          successFn && successFn(url, res)
          return res
        }
      })
    }
  })

}

axios.interceptors.request.use(config => config, error => Promise.reject(error))
axios.interceptors.response.use(response => response, error => Promise.resolve(error.response || error))

export default {
  axios,
  install
}
