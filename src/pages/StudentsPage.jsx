import { useEffect, useState } from "react";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const [showName, setShowName] = useState(true);
  const [showMascot, setShowMascot] = useState(true);
  const [showImage, setShowImage] = useState(true);
  const [showPersonal, setShowPersonal] = useState(true);
  const [showBackgrounds, setShowBackgrounds] = useState(true);
  const [showClasses, setShowClasses] = useState(true);
  const [showExtra, setShowExtra] = useState(true);
  const [showQuote, setShowQuote] = useState(true);
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    async function loadStudents() {
      try {
        const res = await fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1");
        const data = await res.json();
        setStudents(data);
      } catch (err) {
        console.error("Error loading students", err);
      } finally {
        setLoading(false);
      }
    }
    loadStudents();
  }, []);

  const filteredStudents = students.filter(s => {
    if (!searchTerm) return true;
    const name = s.name || {};
    const fullName = (
      name.preferred ||
      `${name.first || ""} ${name.middleInitial || ""} ${name.last || ""}`
    ).toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  const currentStudent = filteredStudents[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : filteredStudents.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < filteredStudents.length - 1 ? prev + 1 : 0));
  };

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Loading students...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "black" }}>Student Introduction Viewer</h1>

      {}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentIndex(0);
          }}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "2px solid black",
            borderRadius: "5px",
            width: "300px",
          }}
        />
        <p style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>
          Found {filteredStudents.length} student{filteredStudents.length !== 1 ? "s" : ""}
        </p>
      </div>

      {}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "10px",
        marginBottom: "20px",
        padding: "15px",
        border: "2px solid black",
        borderRadius: "10px",
        backgroundColor: "black"
      }}>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input type="checkbox" checked={showName} onChange={(e) => setShowName(e.target.checked)} />
          <span style={{ marginLeft: "8px" }}>Name</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input type="checkbox" checked={showMascot} onChange={(e) => setShowMascot(e.target.checked)} />
          <span style={{ marginLeft: "8px" }}>Mascot</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input type="checkbox" checked={showImage} onChange={(e) => setShowImage(e.target.checked)} />
          <span style={{ marginLeft: "8px" }}>Image</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input type="checkbox" checked={showPersonal} onChange={(e) => setShowPersonal(e.target.checked)} />
          <span style={{ marginLeft: "8px" }}>Personal Statement</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input type="checkbox" checked={showBackgrounds} onChange={(e) => setShowBackgrounds(e.target.checked)} />
          <span style={{ marginLeft: "8px" }}>Backgrounds</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input type="checkbox" checked={showClasses} onChange={(e) => setShowClasses(e.target.checked)} />
          <span style={{ marginLeft: "8px" }}>Classes</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input type="checkbox" checked={showExtra} onChange={(e) => setShowExtra(e.target.checked)} />
          <span style={{ marginLeft: "8px" }}>Extra Information</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input type="checkbox" checked={showQuote} onChange={(e) => setShowQuote(e.target.checked)} />
          <span style={{ marginLeft: "8px" }}>Quote</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input type="checkbox" checked={showLinks} onChange={(e) => setShowLinks(e.target.checked)} />
          <span style={{ marginLeft: "8px" }}>Links</span>
        </label>
      </div>

      {}
      {filteredStudents.length > 0 && (
        <>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              onClick={handlePrevious}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                marginRight: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "1px",
                cursor: "pointer"
              }}
            >
              ← Previous
            </button>
            <span style={{ fontSize: "18px", margin: "0 15px" }}>
              {currentIndex + 1} / {filteredStudents.length}
            </span>
            <button
              onClick={handleNext}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                marginLeft: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "1px",
                cursor: "pointer"
              }}
            >
              Next →
            </button>
          </div>

          {}
          {currentStudent && (
            <div style={{
              border: "2px solid black",
              padding: "30px",
              borderRadius: "10px",
              backgroundColor: "black",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}>
              {}
              {showName && (
                <h2 style={{ color: "black", marginBottom: "15px", textAlign: "center" }}>
                  {`${currentStudent.name?.first || ""} ${currentStudent.name?.middleInitial || ""} ${currentStudent.name?.last || ""}`.trim() ||
                    currentStudent.name?.preferred ||
                    "Unnamed Student"}
                </h2>
              )}

              {}
              {showImage && currentStudent.media?.hasImage && (
                <div style={{ marginBottom: "20px", textAlign: "center" }}>
                  <img
                    src={`https://dvonb.xyz${currentStudent.media.src}`}
                    alt={currentStudent.media.caption}
                    style={{ maxWidth: "400px", width: "100%", borderRadius: "8px" }}
                  />
                  <p style={{ fontStyle: "italic", marginTop: "5px" }}>
                    {currentStudent.media.caption}
                  </p>
                </div>
              )}

              {}
              {showMascot && (
                <p><strong>Mascot:</strong> {currentStudent.mascot}</p>
              )}

              {}
              {showPersonal && currentStudent.funFact && (
                <div style={{ marginBottom: "15px" }}>
                  <p><strong>Fun Fact:</strong> {currentStudent.funFact}</p>
                </div>
              )}

              {}
              {showBackgrounds && currentStudent.backgrounds && (
                <div style={{ marginBottom: "15px" }}>
                  <h3 style={{ color: "black" }}>Background</h3>
                  <p><strong>Personal:</strong> {currentStudent.backgrounds.personal}</p>
                  <p><strong>Professional:</strong> {currentStudent.backgrounds.professional}</p>
                  <p><strong>Academic:</strong> {currentStudent.backgrounds.academic}</p>
                  <p><strong>Subject:</strong> {currentStudent.backgrounds.subject}</p>
                </div>
              )}

              {}
              {showClasses && currentStudent.courses && (
                <div style={{ marginBottom: "15px" }}>
                  <h3 style={{ color: "black" }}>Courses</h3>
                  <ul>
                    {currentStudent.courses.map((course, idx) => (
                      <li key={idx}>
                        <strong>{course.code}:</strong> {course.name}
                        {course.reason && (
                          <><br /><em>{course.reason}</em></>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {}
              {showExtra && (
                <div style={{ marginBottom: "15px" }}>
                  <h3 style={{ color: "black" }}>Extra Information</h3>
                  {currentStudent.prefix && <p><strong>Prefix:</strong> {currentStudent.prefix}</p>}
                  {currentStudent.additional && <p><strong>Additional:</strong> {currentStudent.additional}</p>}
                  {currentStudent.platform && (
                    <>
                      <p><strong>Device:</strong> {currentStudent.platform.device}</p>
                      <p><strong>OS:</strong> {currentStudent.platform.os}</p>
                    </>
                  )}
                </div>
              )}

              {}
              {showQuote && currentStudent.quote && (
                <div style={{ marginBottom: "15px", fontStyle: "italic", padding: "15px", backgroundColor: "black", borderRadius: "5px" }}>
                  <p>{currentStudent.quote.text}</p>
                  <p style={{ textAlign: "right" }}>— {currentStudent.quote.author}</p>
                </div>
              )}

              {}
              {showLinks && currentStudent.links && (
                <div>
                  <h3 style={{ color: "#2a5d84" }}>Links</h3>
                  <ul>
                    {Object.entries(currentStudent.links).map(([key, url]) => (
                      <li key={key}>
                        <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#2a5d84" }}>
                          {key}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {filteredStudents.length === 0 && (
        <p style={{ textAlign: "center", fontSize: "16px" }}>
          No students found matching "{searchTerm}"
        </p>
      )}
    </div>
  );
}