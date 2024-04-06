import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Offre 
          <span className='text-coral-red'> Spécial </span>
        </h2>
        <p className='mt-4 info-text'>
          Embarquez pour un voyage shopping qui redéfinit votre expérience avec des offres imbattables.
          Des sélections de premier ordre aux économies incroyables, nous offrons une valeur inégalée qui nous distingue.
        </p>
        <p className='mt-6 info-text'>
          Naviguez dans un univers de possibilités conçu pour répondre à vos désirs uniques, en dépassant les attentes les plus élevées.
          Votre voyage avec nous n'est rien de moins qu'exceptionnel.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Acheter maintenant' iconURL={arrowRight} />
          <Button
            label='En savoir plus'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
