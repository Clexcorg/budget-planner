import React from 'react';
import Lottie from '../../assets/libraries/react-lottie';

const defaultOptionsLottie = lottie => {
  return {
    loop: true,
    autoplay: true,
    animationData: require(`../../assets/lotties/${lottie}.json`),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
};

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__container">
          <h1 className="benefits__heading">Set your goals</h1>
          <p className="benefits__copy">
            Long or short. And see how quickly you will be able to achieve them.
            Seriously!
          </p>
          <div className="lottie-container">
            <Lottie
              options={defaultOptionsLottie('success')}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
