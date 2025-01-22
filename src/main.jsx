import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import '@coreui/coreui/dist/css/coreui.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


createRoot(document.getElementById('root')).render(
    <App />
)
