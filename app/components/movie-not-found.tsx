import { RiMovie2Line } from "react-icons/ri";

const MovieNotFound = () => (
  <div className="py-32 space-y-3">
    <RiMovie2Line className="w-12 h-12 mx-auto" />
    <div className="text-center space-y-px">
      <h2 className="font-black text-lg">هیچ فیلمی پیدا نشد!</h2>
      <p className="text-sm font-medium">
        از پنل کناری میتوانید فیلم جدید اضافه بکنید.
      </p>
    </div>
  </div>
);

export default MovieNotFound;
