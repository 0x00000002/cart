const _settings = {
  siteName: 'Shopping cart'
}

let settings

if (process.env.NODE_ENV === 'production') {
  // The app is a production packaged build
  if (process.env.REACT_APP_TARGET === 'staging') {
    // Use staging settings
    settings = {
      siteName: `${_settings.siteName} (staging)`
    }
  } else {
    settings = {
      siteName: _settings.siteName
    }
  }
} else if (process.env.NODE_ENV === 'development') {
  // The app is in development mode
  settings = {
    siteName: `${_settings.siteName} (development)`
  }
}

settings = settings || _settings

export default settings
