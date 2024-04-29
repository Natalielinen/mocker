import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('Базовая конфигурация реакт приложения')}</h2>
            <p>{t('Что используется')}</p>
            <ul>
                <li>{t('typescript')}</li>
                <li>{t('webpack')}</li>
                <li>{t('react')}</li>
                <li>{t('eslint')}</li>
                <li>{t('i18next')}</li>
                <li>{t('sass')}</li>
                <li>{t('jest')}</li>
            </ul>
        </div>
    );
}

export default App;
