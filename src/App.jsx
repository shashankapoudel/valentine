
import React, { useState, useEffect } from "react";


const TypingEffect = ({ text, speed = 100, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      onComplete && onComplete(); 
    }
  }, [index, text, speed, onComplete]);

  return (
    <p
      style={{
        fontSize: "1.2rem",
        color: "#c2185b",
        whiteSpace: "pre-line",
        marginBottom: "2rem",
      }}
    >
      {displayedText}
      <span style={{ animation: "blink 1s infinite" }}>|</span>
    </p>
  );
};


const images = [
  { src: "/Images/kritika1.jpeg", caption: "Our  memory together ❤️" },
  { src: "/Images/kritika2.jpeg", caption: "I find you the cutest in this ❤️" },
  { src: "/Images/kritika3.jpeg", caption: "Very beautiful and elegant❤️" },
  { src: "/Images/kritika4.jpeg", caption: "Sleeping beauty❤️" },
  { src: "/Images/kritika5.jpeg", caption: "My hottieeee ❤️" },
  { src: "/Images/kritika6.jpeg", caption: "I love you moreeee ❤️" },
  { src: "/Images/kritika7.jpeg", caption: "Ajjai smell chaa? ❤️" },
  { src: "/Images/kritika8.jpeg", caption: "Cutieee bachha maaa ❤️" },
  { src: "/Images/kritika9.jpeg", caption: "Aile yo bachha le malai tharkaucha ❤️" },
  { src: "/Images/kritika10.jpeg", caption: "umhaaa chuppaaa ❤️" }, 
];

export default function App() {
  const [page, setPage] = useState(1);
  const [noStyle, setNoStyle] = useState({});
  const [typingDone, setTypingDone] = useState(false);

  const moveNoButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    setNoStyle({
      transform: `translate(${x}px, ${y}px)`,
    });
  };

  return (
    <div style={styles.container}>

      {page === 1 && (
        <div style={styles.card}>
          <h1 style={styles.title}>❤️ Will you be my Valentine, Kritika? ❤️</h1>

          <div style={styles.buttonWrapper}>
            <button style={styles.yesBtn} onClick={() => setPage(2)}>
              Yes 💖
            </button>

            <button
              style={{ ...styles.noBtn, ...noStyle }}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
            >
              No 🙈
            </button>
          </div>
        </div>
      )}

 
      {page === 2 && (
        <div style={styles.card}>
          <h1 style={styles.title}>💌 For You 💌</h1>

          <TypingEffect
            text={
              "Hey love...\n\nFrom the moment you came into my life, everything became brighter.You make my ordinary days magical, and my smile effortless.Timi merooo sabthok mero future hou. Isee my rest of the lives with you. I hope you also do the same. Yo bich ma kaile kai jhagada hunchan tara haami sadhai sangai hunaparcha. Hijo asti ko hamro jhagada ko laagi I am really sorryy babyy. Maile kei galat vaney I know i am sorry for that and i regret it as well.You are my life, my everything.Even my family loves you alot. Timi mero ghar ko buhari houuuuu. Timi nai hou.Timi nai banna parcha.I only want and need you.This is our third valentine together and i want you as my valentine for rest of the lives."
            }
            onComplete={() => setTypingDone(true)}
          />

          {typingDone && (
            <div style={styles.gallery}>
              {images.map((img, i) => (
                <div key={i} style={styles.imageCard}>
                  <img src={img.src} alt={img.caption} style={styles.image} />
                  <p style={styles.caption}>{img.caption}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
container: {
  minHeight: "100vh",
  width: "100vw",
  background: "linear-gradient(135deg, #ffd6e0, #ff9a9e)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},

card: {
  background: "rgba(255,255,255,0.9)",
  padding: "3rem",
  borderRadius: "32px",
  textAlign: "center",
  width: "90%",
  maxWidth: "900px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
},
  title: {
    color: "#d81b60",
    marginBottom: "2rem",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    position: "relative",
  },
  yesBtn: {
    background: "#e91e63",
    color: "white",
    border: "none",
    padding: "12px 28px",
    borderRadius: "999px",
    fontSize: "1.1rem",
    cursor: "pointer",
  },
  noBtn: {
    background: "#f8bbd0",
    color: "#880e4f",
    border: "none",
    padding: "12px 28px",
    borderRadius: "999px",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
  gallery: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1.5rem",
  marginTop: "2rem",
},

imageCard: {
  background: "#fff",
  borderRadius: "18px",
  padding: "1rem",
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
},

image: {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "14px",
},

caption: {
  marginTop: "0.75rem",
  color: "#ad1457",
  fontSize: "0.95rem",
},

};