import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex text-center gap-2 items-center ">
        <FaCircleCheck className="text-green-500" />
        {feature}
      </p>
    </div>
  );
};

export default Feature;
