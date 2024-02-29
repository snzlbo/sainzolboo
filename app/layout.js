import { Poiret_One } from "next/font/google";
import "@/assets/css/globals.css";
import { cn } from "@/utils/cn";

const inter = Poiret_One({ weight: "400", subsets: ["latin"] });

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
