import { Suspense } from 'react';
import { render } from 'react-dom';
import App from './App';
import './i18n';

render(
    // Suspense нужен для файлов с переводами, когда используется i18next-http-backend
    <Suspense fallback="">
        <App />
    </Suspense>,
    document.getElementById('root'),
);
