import { navItems } from "@/data";
import GlobeDemo from "@/components/About";
import {TabsDemo} from "../components/StatsTab";
import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
// import { Grid } from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ShinyButtonDemo from "@/components/ShinyButton";
import MeteorsDemo from "@/components/Contact";
export default function Home() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems} />
      <Hero />
      {/* <Grid/> */}
      <GlobeDemo/>
      <RecentProjects/>
      <TabsDemo/>
      <Experience/>
      <MeteorsDemo/>

      <Footer/>
      <ShinyButtonDemo/>
    </div>
  </main>
  );
}
