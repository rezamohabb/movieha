import "@/app/globals.css";

import { Vazirmatn } from "next/font/google";

import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html dir="rtl" lang="fa-IR" className={vazirmatn.variable}>
    <body className="text-gray-500 leading-tight tracking-tight">
      {children}
    </body>
  </html>
);

export const metadata: Metadata = { title: "مووی ها" };

export default RootLayout;
