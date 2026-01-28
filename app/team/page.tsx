import Footer from "../components/footer";
import Navbar from "../components/navbar/navbar";
import TeamSelector from "../components/teams/TeamSelector";

export default function TeamsPage() {
  return (
    <>
      <Navbar />
      <TeamSelector />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
