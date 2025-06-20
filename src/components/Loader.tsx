import { assets } from "../assets";

const Loader: React.FC = () => {
  return (
    <div className="h-lvh w-full flex justify-center items-center">
      <img src={assets.loader} alt="loader" />
    </div>
  );
};

export default Loader;
