import { Suspense } from "react";
import { AddMovieForm, MoviesSkeleton, Movies } from "@/app/components";

const RootPage = () => (
  <div className="p-20 grid grid-cols-3 gap-x-14">
    <div className="self-start sticky top-20">
      <AddMovieForm />
    </div>
    <div className="col-span-2">
      <Suspense fallback={<MoviesSkeleton />}>
        <Movies />
      </Suspense>
    </div>
  </div>
);

export default RootPage;
