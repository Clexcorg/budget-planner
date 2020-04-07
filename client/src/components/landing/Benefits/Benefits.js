import React from 'react';
import Lottie from 'containers/Lottie/Lottie';
import './Benefits.scss';

const Benefits = () => {
  const lottieSuccess = require('assets/lotties/success.json');

  return (
    <section className="benefits">
      <div className="container">
        <h1>Set your goals</h1>
        <p>
          Long or short. And see how quickly you will be able to achieve them.
          Seriously!
        </p>
      </div>
      <Lottie animationData={lottieSuccess} name={"lottieSuccess"}/>
    </section>
  );
};

export default Benefits;
