import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './pages/routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import ContextProvider from './pages/provider/ContextProvider.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router}></RouterProvider>
          </QueryClientProvider>
      </ContextProvider>
  </React.StrictMode>,
)
