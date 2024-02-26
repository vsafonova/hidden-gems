import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function TipsPage() {
  return (
    <>
      <header id="header-section" className="header_section">
        <Navbar />
      </header>
      <Form />
      <Footer />
    </>
  );
}

export default function SubmitTipPage() {

  return (
    <>
      <form>
        <input id="title" type="text" placeholder="Title" />
        <textarea id="content" placeholder="Content"></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}
