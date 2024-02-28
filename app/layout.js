import { Inter } from "next/font/google";
import "@/assets/css/globals.css";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Sainzolboo's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-zinc-950")}>
        <main>{children}</main>
      </body>
    </html>
  );
}
