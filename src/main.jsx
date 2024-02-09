import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { preload } from 'swr'
import { getPosts,PostUrlEndpoint as postCacheKey} from './api/postApi.jsx'

preload(postCacheKey, getPosts)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Dave Gray is the best: https://github.com/gitdagray/react-swr