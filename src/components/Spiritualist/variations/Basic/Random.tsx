import { Error, Loading } from '~/components/Spiritualist/variations/Basic';
import Spiritualist from '~/components/Spiritualist/variations/Basic/template';
import useSpiritualistData from '~/hooks/useSpiritualistData';

function RandomSpiritualist() {
  const [error, spiritualist] = useSpiritualistData();

  return spiritualist ? (
    <Spiritualist
      name={spiritualist.name}
      description={spiritualist.description}
    />
  ) : error ? (
    <Error />
  ) : (
    <Loading />
  );
}

export default RandomSpiritualist;
