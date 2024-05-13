import { Link } from "react-router-dom";
import type { Program } from "../../types/global";

interface Props {
  program: Program;
}

const Program = ({ program }: Props) => {
  return (
    <li className="py-6">
      <Link to={`/channel/episodes/${program.id}`} className="flex">
        <img className="w-24 h-24" src={program.programimage} alt="" />
        <div className="ml-6">
          <h2 className="text-white text-2xl">{program.name}</h2>
          <p className="text-slate-400 text-sm">{program.description}</p>
        </div>
      </Link>
    </li>
  );
};

export default Program;
