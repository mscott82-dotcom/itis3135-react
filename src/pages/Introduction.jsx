import "../styles/default.css";

export default function Introduction() {
  return (
    <>

      <style>{`
        .center {
          padding: 5px;
          padding-left: 50px;
          max-width: 50%;
        }
      `}</style>

      <header>
<h1> Matthew Scott's Magnificent Sealion ITIS 3135</h1>
<nav>
    <a href="./">Home</a>
    |
    <a href="introduction.html">Introduction</a>
    |
    <a href="contract.html">Contract</a>
    |
    <a href="tables.html">Tables</a>
    |
    <a href="forms.html">Forms</a>
    |
    <a href="magnificent-sealion/about.html">Mascot Site</a>
    |
    <a href="website_evaluations.html">Website Evaluations</a>
    |
    <a href="fccfsjs_outline.html">FCCFSJS Outline</a>
    |
    <a href="intro_form.html">Intro Form</a>
</nav>
    <nav>
        <a href="stuff/CRPPY PAGE.htm">CRAPPY Website</a> |
        <a href="hobby/">Hobby</a>
    </nav>
</header>

      <main>
        <h2>Introduction</h2>
        <h2>Matthew Scott | Magnificent Sealion</h2>

        <figure>
          <img src="/images/img1.jpg" alt="Matthew_Scott" />
          <figcaption>Matthew Scott</figcaption>
        </figure>

        <div className="center">
          <ul>
            <li>
              <b>Personal Background:</b> I like spending time outside, with
              friends, and with family.
            </li>

            <li>
              <b>Professional Background:</b> Worked an IT Internship during the
              summer, mostly worked with server management systems like Active
              Directory
            </li>

            <li>
              <b>Courses:</b>
              <ul>
                <li>
                  <b>ITIS 3135</b>: Front-End Web App Development
                </li>
                <li>
                  <b>ITSC 3155</b>: Software Engineering
                </li>
                <li>
                  <b>ITSC 3160</b>: Database Design & Implem
                </li>
                <li>
                  <b>ITSC 3688</b>: Comp & Their impact on society
                </li>
                <li>
                  <b>MATH 2164</b>: Matrices & Linear Algrebra
                </li>
              </ul>
            </li>

            <li>
              <b>Memorable Personal Item:</b> My sunglasses from a trip to the
              Outer Banks
            </li>
          </ul>
        </div>
      </main>

      <footer>
        <nav>
        <a href="https://webpages.charlotte.edu/mscott82/itis3135/">UNCC Webspace</a>
        |
        <a href="https://github.com/mscott82-dotcom/mscott82-dotcom.github.io">Github</a>
        |
        <a href="https://mscott82-dotcom.github.io/itis3135">Github.io</a>
        |
        <a href="https://www.freecodecamp.org/mscott82">FreeCodeCamp</a>
        |
        <a href="https://www.codecademy.com/profiles/code0681180444">Codeacademy</a>
        |
        <a href="https://www.linkedin.com/in/matthew-scott-998752340/">LinkedIn</a>
        |
        <a href="magnificent-sealion/index.html">Magnificent Sealion</a>
        </nav>
        <p>Page built by <a href="scottenterprises.com\index.html">Scott Enterprises </a>&copy;2025</p>
    </footer>
    </>
  );
}
