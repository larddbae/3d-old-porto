const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Adelard</span>
        👋
        <br />
        These are my Educational History.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          SDIT Ar Rahmah <br /> Where my curiosity took root, sparking a lifelong passion for creativity.
        </p>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          MTsN 1 Lumajang <br /> Developed the logical thinking and discipline essential for problem-solving.
        </p>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        SMKN 1 Lumajang <br/> Laid the technical groundwork for my career in Software Engineering and web development.
      </p>
    </div>
    );
  }

  return null;
};

export default HomeInfo;