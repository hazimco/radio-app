import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";

interface Props {
  handleBackClick: () => void;
}

const BackButton = ({ handleBackClick }: Props) => {
  return (
    <button
      onClick={handleBackClick}
      className="text-slate-400 flex gap-2 mb-4"
    >
      <ArrowLongLeftIcon className="size-6 text-slate-400" />
      Back
    </button>
  );
};

export default BackButton;
