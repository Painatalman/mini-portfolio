import HeartIcon from '~/components/Icon/Heart';

type Props = {
  name: string;
  description: string;
};

const SpiritualistTemplate: React.FC<Props> = ({
  name,
  description,
}: Props) => (
  <article className="p-4 rounded-none max-w-sm shadow mb-8 border-2  border-solid border-black">
    <header>
      <div className="flex justify-between align-center">
        <HeartIcon />
        <h2 className="font-black uppercase text-2xl text-center">{name}</h2>
        <HeartIcon />
      </div>
      <div className="font-bold text-center bg-black text-white">
        <a href="https://www.linkedin.com/in/mipico/">
          https://www.linkedin.com/in/mipico/
        </a>
      </div>
    </header>
    <p className="text-sm text-justify mb-1">{description}</p>
    <footer className="font-bold text-sm text-center">
      <p className="">Todos os dias das 8h às 22h</p>
      <a href="mailto:miguel.vpcosta@gmail.com">miguel.vpcosta@gmail.com</a>
    </footer>
  </article>
);

export default SpiritualistTemplate;
