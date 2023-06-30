import Container from "./components/Container";
import Hero from "./components/Hero";
import HowTo from "./components/HowTo";
import Registration from "./components/Registration";
import Scholarships from "./components/Scholarships";
import SchoolYear from "./components/SchoolYear";
import Terms from "./components/Terms";
import MyForm from "./components/TestForm";

export default function Home() {
  return (
    <Container>
      <Hero  />
      <SchoolYear />
      <Scholarships />
      <HowTo />
      <Registration />
      <Terms />
    </Container>
  );
}
