
import Footer from "./components/footer";
import SectionOne from "./components/home/sections/section-one";
import { Navbar } from "./components/navbar/navbar";
import { TeamsSection } from "./components/teams/teams-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <SectionOne />
        <TeamsSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
