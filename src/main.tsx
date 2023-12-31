import { StrictMode } from 'react'

import App from './app/app'
import {QueryClient, QueryClientProvider} from 'react-query'
import {createRoot} from 'react-dom/client'
import {ReactQueryDevtools} from 'react-query/devtools'
import {BrowserRouter} from 'react-router-dom'
import {setupStore} from '@draco/store'
import {Provider} from "react-redux";


const container = document.getElementById('root') || document.createElement('div')
const root = createRoot(container)

const queryClient = new QueryClient()

const store = setupStore()

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)
