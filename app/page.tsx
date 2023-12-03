import {
  Movies,
  AddMovieForm,
  AddMovieModal,
  MoviesSkeleton,
} from "@/app/components";
import Link from "next/link";
import { Suspense } from "react";

import type { NextPage } from "next";

interface RootPageProps {
  searchParams: {
    modal: boolean;
  };
}

const RootPage: NextPage<RootPageProps> = ({ searchParams: { modal } }) => (
  <div className="md:p-20 grid lg:grid-cols-3 lg:gap-14 p-10 gap-8">
    <div className="self-start sticky top-20 hidden md:block">
      <AddMovieForm />
    </div>
    <div className="lg:col-span-2">
      <Suspense fallback={<MoviesSkeleton />}>
        <Movies />
      </Suspense>
    </div>
    <Link
      href={{ query: "modal=true" }}
      className="md:hidden bg-sky-500 fixed bottom-10 right-1/2 translate-x-1/2 py-5 px-10 rounded-2xl text-white shadow-xl shadow-sky-300 active:scale-95"
    >
      افزودن فیلم
    </Link>
    {modal && <AddMovieModal />}
  </div>
);

export default RootPage;
