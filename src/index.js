import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import 'antd/dist/antd.css';
import {ConfigProvider} from 'antd';
import fa_IR from 'antd/lib/locale-provider/fa_IR';

ReactDOM.render(
	<ConfigProvider locale={fa_IR} direction="rtl">
		<App />
	</ConfigProvider>,
	document.getElementById('root'),
);

serviceWorker.unregister();
