module.exports = {
  apps : [{
    name: 'WeatherApp',
    script: './src/routes/index.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      PORT: '5000',
      NODE_ENV: 'development',
	    APP_HOST:'http://localhost:8080',
	    LINE_NOTIFY_CHANNEL_ID:'VVjuNUyBMTjsJoeILW8U8J',
      LINE_NOTIFY_CHANNEL_SECRET:'VPR0tEF6x1tgKbpGUgnlQVIIakfVslhmmC01aFq7O5T',
      LINE_NOTIFY_CALLBACK_URL:'http://localhost:5000/line-notify/callback',
      LINE_NOTIFY_STATE:'bm90aWZ5U3RhdGUxMjM=',
      REACT_APP_OPEN_WEATHER_API_KEY:'3233ca4eab5a56eec61f123cbc34275a',
    },
    env_production: {
	    PORT: '5000',
      NODE_ENV: 'production',
      APP_HOST:'http://localhost:8080',
      LINE_NOTIFY_CHANNEL_ID:'VVjuNUyBMTjsJoeILW8U8J',
      LINE_NOTIFY_CHANNEL_SECRET:'VPR0tEF6x1tgKbpGUgnlQVIIakfVslhmmC01aFq7O5T',
      LINE_NOTIFY_CALLBACK_URL:'http://localhost:5000/line-notify/callback',
      LINE_NOTIFY_STATE:'bm90aWZ5U3RhdGUxMjM=',
      REACT_APP_OPEN_WEATHER_API_KEY:'3233ca4eab5a56eec61f123cbc34275a',
    }
  }],

  deploy : {
    production : {
      user : 'Soma-dev0808',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:Soma-dev0808/weather-app.git',
      path : '/var/www/production',
      'post-deploy' : 'cd api && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
