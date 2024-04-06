import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl lg:max-w-lg font-bold'>
          Chaussures de  
          <span className='text-coral-red'> super </span>
          <span className='text-coral-red'> qualité </span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Assurant un confort et un style de premier ordre,
          nos chaussures méticuleusement fabriquées sont conçues pour rehausser votre expérience,
          en vous offrant une qualité, une innovation et une touche d'élégance inégalées.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Notre souci du détail et de l'excellence garantit votre satisfaction.
        </p>
        <div className='mt-11'>
          <Button label='Voir les détails' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='détail du produit'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
