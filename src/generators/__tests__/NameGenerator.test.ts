import NameGenerator from '~/generators/NameGenerator';

describe('NameGenerator', () => {
  describe('generateRandom', () => {
    it("generates a name when there's only one option", async () => {
      const generator = new NameGenerator({
        roles: ['Professor'],
        names: ['Bambo'],
      });

      expect(await generator.generateRandom()).toBe('Professor Bambo');

      const generator2 = new NameGenerator({
        roles: ['Grão Mestre'],
        names: ['José'],
      });

      expect(await generator2.generateRandom()).toBe('Grão Mestre José');
    });

    it('displays the second option and third for name and number, if random numbers match', async () => {
      const generator = new NameGenerator({
        roles: ['Professor', 'Mestre', 'Visionário'],
        names: ['Bambo', 'Pikachu', 'Noddy'],
      });
      jest
        .spyOn(Math, 'random')
        .mockImplementationOnce(() => 0.5)
        .mockImplementationOnce(() => 0.99);

      expect(await generator.generateRandom()).toBeOneOf([
        'Mestre Noddy',
        'Visionário Pikachu',
      ]);
    });

    it('displays the first option and third for name and role, if random numbers match', async () => {
      const generator = new NameGenerator({
        roles: ['Professor', 'Mestre', 'Visionário'],
        names: ['Bambo', 'Pikachu', 'Noddy'],
      });
      jest
        .spyOn(Math, 'random')
        .mockImplementationOnce(() => 0.01)
        .mockImplementationOnce(() => 0.99);

      expect(await generator.generateRandom()).toBeOneOf([
        'Professor Noddy',
        'Visionário Bambo',
      ]);
    });
  });
});
