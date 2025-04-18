import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";

import { DataProviderFuncComp } from './context.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DataProviderFuncComp>
            <App />
        </DataProviderFuncComp>
    </BrowserRouter>
)
