import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Quiz from './container/Quiz/Quiz';


class App extends React.Component {
  render() {
    return(
      <Layout>
        <Quiz />
      </Layout>
    );
  }
};

export default App;
