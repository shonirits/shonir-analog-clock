Package.describe({
    name: 'sac:shonir-analog-clock', // https://atmospherejs.com/twbs/bootstrap
    summary: 'Multiple Timezone Simple Analog Clock Using HTML , CSS And Javascript',
    version: '1.0.0',
    git: 'https://github.com/shonirits/shonir-analog-clock.git'
  })
  
  Package.onUse(api => {
    api.versionsFrom('METEOR@1.0')
    api.addFiles([
      'shonir-analog-clock/0.1/js/shonir_analog_clock.css',
      'shonir-analog-clock/0.1/js/shonir_analog_clock.js'
    ], 'client')
  })