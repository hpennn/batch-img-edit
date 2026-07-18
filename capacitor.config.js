export default {
  appId: 'cn.zhinenti.batchimgedit',
  appName: '批量图片编辑',
  webDir: '.',
  server: { androidScheme: 'https' },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#9333ea',
      showSpinner: false
    }
  }
};
