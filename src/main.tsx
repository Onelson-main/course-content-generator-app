import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Router from './router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { colors } from './core/style';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      progressStyle={{ backgroundColor: colors.ACCENT }}
      toastStyle={{ zIndex: 1999, textAlign: 'center', marginBottom: 60 }}

    />
  </React.StrictMode>,
)


declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": {
        name: string,
        size?: number | "small" | "large",
        color?: string,
        "aria-hidden"?: boolean,
        "aria-label"?: "string",
        onClick?: any,//() => {},
        style: any

      }
    }
  }
}