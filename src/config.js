const config = {
    development: {
      env: 'development',
      API_URL: process.env.VUE_APP_API_URL || 'set api url',
    },
    production: {
      env: 'production',
      API_URL: process.env.VUE_APP_API_URL || 'set api url',
    }
  }
  
  export default config[process.env.NODE_ENV || 'development' ];