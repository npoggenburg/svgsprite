// require all svg files for svg sprite building
require.context('./icons', true, /\.svg$/);

import './css/normalize.css';
import './css/components/icon.css';
