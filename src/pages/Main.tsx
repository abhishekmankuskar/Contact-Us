import "./style.css";

export const Main = () => {
  return (
    <div className="main">
      <header className="header">
        <h1 className="headerName">Monograph</h1>
      </header>
      <hr></hr>
      <div className="content">
        <div className="contactSection">
          <h2 className="contactus">Contact us</h2>
          <p>
            Please contact us at{" "}
            <a href="mailto:hello@monographcomms.ca">hello@monographcomms.ca</a>{" "}
            or use the contact form and we'll get back to you soon.
          </p>
        </div>
        <div className="formSection">
          <form>
            <h3>Name</h3>
            <textarea placeholder="Write your Name"></textarea>
            <h3>Email</h3>
            <textarea placeholder="Write your Email"></textarea>
            <h3>Address</h3>
            <textarea placeholder="Write your Address"></textarea>

            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
