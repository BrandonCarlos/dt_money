import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';//mirajs ajuda a criar API FAKE
import { App } from './App';//Temos que IMPORTAR de FATO = { App }

createServer({
  routes() {
    this.namespace = 'api';//irá capturar todas as CHAMADAS que tem /api/
    this.get('/transactions', () => {//mesma coisa -> /api/transactions
      return [
        {//vamos devolver um VETOR
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'amount',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
