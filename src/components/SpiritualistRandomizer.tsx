import { default as RandomBasic } from '~/components/Spiritualist/variations/Basic';
import { default as RandomTopLeftTitleNoRank } from '~/components/Spiritualist/variations/TopLeftTitleNoRank';
import getRandom from '~/utils/getRandom';
import { useState } from 'react';

const variations = ['RandomBasic', 'RandomTopLeftTitleNoRank'];

const SpiritualistRandomizer = () => {
  const [counter, setCounter] = useState(0);
  const [variation, setVariation] = useState(getRandom(variations));

  return (
    <>
      {(variation === 'RandomTopLeftTitleNoRank' && (
        <RandomTopLeftTitleNoRank key={counter} />
      )) || <RandomBasic key={counter} />}
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
          setVariation(getRandom(variations));
        }}
        className="border-solid border-4 border-black py-1 px-2 mb-6 rounded text-white bg-black print:hidden"
      >
        Gera-me outro cartão
      </button>
    </>
  );
};

export default SpiritualistRandomizer;
