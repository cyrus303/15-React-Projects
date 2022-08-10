import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  const { tours, removeTour } = props;

  const tourElement = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
  });

  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>{tourElement}</div>
    </section>
  );
};

export default Tours;
