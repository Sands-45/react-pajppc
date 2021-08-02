import React from 'react';
import ReactDOM from 'react-dom';

const MainContent = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error fugiat
      sint odio nihil, sapiente officiis incidunt sequi dolorem qui esse facere,
      vero eveniet adipisci nam non reiciendis natus ipsa. Sequi id expedita
      obcaecati porro, incidunt minus est earum voluptatum maiores doloremque
      inventore in. Quo necessitatibus commodi quod ipsa laborum voluptatibus.
    </p>
  );
};

const Body = () => {
  return (
    <div className="container bg-primary">
      <h1>Hi There</h1>
      <h3>This Is Sands & I'm using React</h3>
      <MainContent />
    </div>
  );
};

ReactDOM.render(Body(), document.getElementById('root'));
