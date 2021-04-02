import dva from 'dva';
import './index.css';
import filterType from './models/filterType';
import list from './models/list';
import todoList from './models/todoList';
import router from './router'
// import { createBrowserHistory } from 'history'

// 1. Initialize
// const app = dva({
//   history: createBrowserHistory()
// });
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model    redux
app.model(todoList);
app.model(filterType);
app.model(list);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
