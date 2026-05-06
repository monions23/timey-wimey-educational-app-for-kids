import { useState, useEffect, useRef } from "react";

export default function InfoComponent({ inputType }) {
  console.log(inputType);
  const [open, setOpen] = useState(false);
  const [popupDetails, setPopupDetails] = useState("");
  const [infoLink, setInfoLink] = useState("");

  const popoverStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%", // appear below the icon
    right: 0, // align to the right
    marginTop: "6px",
    background: "white",
    padding: "12px",
    borderRadius: "6px",
    width: "300px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    zIndex: 10,
  };

  let popupRef = useRef(null);

  // Set input for info dialog box
  useEffect(() => {
    if (inputType === "auDesc") {
      setPopupDetails(
        "1 AU (Astronomical Unit) = the distance from Earth to the Sun!",
      );
    }
    if (inputType === "dayLength") {
      setPopupDetails(
        "All planets rotate (spin around) over time! A planet's day is how long it takes to complete one full rotation.",
      );
    }
    if (inputType === "yearLength") {
      setPopupDetails(
        "A planet's year is how long it takes to complete one orbit around the Sun.",
      );
    }
    if (inputType === "tilt") {
      setPopupDetails(
        "Less tilt causes less severe seasons, and more tilt causes more severe seasons. Why is this?",
      );
      setInfoLink("https://spaceplace.nasa.gov/seasons/en/");
    }
  });

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!popupRef.current) return;

      const clickedInsidePopup = popupRef.current.contains(e.target);
      if (!clickedInsidePopup) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div
      style={{ position: "relative", display: "inline-block", float: "right" }}
    >
      {/* Info icon */}
      <span
        style={{ cursor: "pointer", color: "#0077cc", fontSize: "20px" }}
        onClick={() => setOpen(!open)}
      >
        <i className="fa-solid fa-circle-info text-blue-900 hover:text-orange-400 cursor-pointer"></i>
      </span>

      {/* Popover */}
      {open && (
        <div ref={popupRef} style={popoverStyle}>
          <h4>{popupDetails}</h4>
          {infoLink && (
            <h4>
              <a href={infoLink} className="text-blue-600 underline">
                {" "}
                Explore this link to find out more!{" "}
              </a>
            </h4>
          )}
        </div>
      )}
    </div>
  );
}
