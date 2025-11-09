import HomeMain from "@/pages/homes/home/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Sacon Global Sports Park",
};

export default function Home() {
  return (
    <HomeMain />
  );
}
