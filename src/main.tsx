
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

createRoot(document.getElementById('root')!).render(
  <FluentProvider theme={webLightTheme} >
    <App />
  </FluentProvider>,
)
