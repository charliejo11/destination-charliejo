import Header from "./components/Header";
import Hero from "./components/Hero";
import EditorsChoice from "./components/EditorsChoice";
import LatestDiscoveries from "./components/LatestDiscoveries";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <EditorsChoice />
      <LatestDiscoveries />
    </>
  );
}