import Auth from "./Auth";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <div className="min-h-screen">
      <Auth />
      <Toaster position="top-center" />
    </div>
  );
};

export default page;
