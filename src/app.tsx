import './app.css';

import webpackIcon from './assets/webpack-icon.png';

const App = () => {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <img src={webpackIcon} width="300px" />
    </div>
  );
};

export default App;
