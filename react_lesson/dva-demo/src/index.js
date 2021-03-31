import dva from 'dva';
import './index.css';
import count from './models/count'
import list from './models/list'
import router from './router'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model    redux
app.model(count);
app.model(list);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
