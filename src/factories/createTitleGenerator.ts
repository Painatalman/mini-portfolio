import data from '~/data/titles.json';
import TitleGenerator from '~/generators/TitleGenerator';

function createGenerator() {
  return new TitleGenerator(data);
}

export default createGenerator;
