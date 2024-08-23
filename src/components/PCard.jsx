import { SiFoodpanda } from "react-icons/si";
import { MdEdit } from "react-icons/md";

const PCard = ({ userName }) => {
  return (
    <>
      <div className="container flex items-center justify-center flex-col gap-6">
        <SiFoodpanda size={90} color="#ff64dc"></SiFoodpanda>
        {userName}
        <button className="btn flex gap-3 items-center justify-center font-semiboldbold text-orange-100">
          Edit <MdEdit></MdEdit>
        </button>
      </div>
    </>
  );
};

export default PCard;
