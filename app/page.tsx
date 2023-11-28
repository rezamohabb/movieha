import { CgTrash } from "react-icons/cg";
import { InputGroup, Label } from "@/app/components";

const RootPage = () => (
  <div className="p-20 grid grid-cols-3 gap-x-14">
    <form className="shadow-lg p-5 rounded-2xl shadow-gray-200 space-y-5 self-start sticky top-20">
      <InputGroup>
        <Label htmlFor="title">نام فیلم</Label>
        <input
          id="title"
          type="text"
          placeholder="برای مثال: آدم کش"
          className="w-full bg-gray-200 py-4 rounded-2xl px-5 border border-gray-300 focus:border-gray-400 transition-all placeholder:text-gray-400"
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="thumbnail">عکس فیلم</Label>
        <input type="file" id="thumbnail" className="hidden" />
        <label
          htmlFor="thumbnail"
          className="border border-gray-300 h-36 rounded-2xl flex flex-col items-center justify-center gap-y-2 bg-gray-200"
        >
          <h2 className="text-gray-400">
            عکس فیلم را بکشید و بندازید یا انتخاب کنید
          </h2>
          <p className="text-xs text-gray-400">
            فرمت های قابل آپلود: PNG | JPG | Jpeg
          </p>
        </label>
      </InputGroup>
      <button
        type="button"
        className="bg-sky-500 h-14 w-full rounded-2xl text-white hover:bg-sky-600 transition-all"
      >
        افزودن فیلم
      </button>
    </form>
    <ul className="col-span-2 grid grid-cols-5 gap-7">
      {[...new Array(7)].map((_, index) => (
        <li key={index} className="space-y-3 group">
          <div className="w-full h-[220px] bg-gray-200 rounded-2xl group-hover:bg-gray-300 transition-all" />
          <div className="flex justify-between px-2 gap-x-2 items-center">
            <h2 className="font-medium group-hover:text-gray-600 transition-all line-clamp-1">
              فیلم {index + 1}
            </h2>
            <CgTrash className="w-5 h-5 shrink-0 hover:text-red-600 cursor-pointer transition-all text-gray-400" />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default RootPage;
