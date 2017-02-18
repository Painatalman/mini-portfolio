import nameData from '~/data/names.json';
import NameGenerator from '~/generators/NameGenerator';

function createNameGenerator() {
  return new NameGenerator(nameData);
}

export default createNameGenerator;
