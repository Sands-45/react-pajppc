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

class MiddleSection extends React.Component {
  render() {
    return (
      <div className="container bg-dark text-light">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          aspernatur ullam corporis dignissimos eum id odio accusamus
          repellendus eos enim.
        </p>
      </div>
    );
  }
}

const Body = () => {
  return (
    <div className="container position-relative bg-primary">
      <h1 className="font-monospace">Hi There</h1>
      <h3 className="font-monospace">This Is Sands & I'm using React</h3>
      <MainContent />
      <MiddleSection />
    </div>
  );
};

ReactDOM.render(Body(), document.getElementById('root'));
