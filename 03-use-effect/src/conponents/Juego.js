import React, { useState, useEffect } from "react";

 
  const levels = [
  // NIVEL 1 – VOCABULARIO SENCILLO
  { 
    name: "Nivel 1 - Principiante", 
    words: ["cat", "dog", "sun", "hat", "pen", "book", "car", "fish", "tree", "ball", "cup"]
  },

  // NIVEL 2 – OBJETOS COMUNES
  { 
    name: "Nivel 2 - Básico 1", 
    words: ["chair", "table", "apple", "milk", "shoe", "bag", "smile", "door", "house", "water", "phone"]
  },

  // NIVEL 3 – VERBOS SIMPLES
  { 
    name: "Nivel 3 - Básico 2", 
    words: ["run", "walk", "jump", "eat", "sleep", "swim", "play", "write", "read", "sing", "open"]
  },

  // NIVEL 4 – FRASES SIMPLES
  { 
    name: "Nivel 4 - Intermedio 1",
    words: [
      "I like pizza",
      "She is happy",
      "He reads a book",
      "I am hungry",
      "I want water",
      "It is sunny",
      "She loves cats",
      "I see a dog",
      "He is tall",
      "I am fine",
      "We are friends"
    ]
  },

  // NIVEL 5 – ACCIONES + OBJETOS
  { 
    name: "Nivel 5 - Intermedio 2",
    words: [
      "open the door",
      "close the window",
      "drink water",
      "read the book",
      "wash your hands",
      "clean the table",
      "turn on the light",
      "turn off the TV",
      "pick up the ball",
      "write your name",
      "draw a picture"
    ]
  },

  // NIVEL 6 – EMOCIONES Y ESTADOS
  { 
    name: "Nivel 6 - Intermedio 3",
    words: [
      "I am tired",
      "She feels sad",
      "He is excited",
      "They are bored",
      "I am sick",
      "She is angry",
      "He is nervous",
      "We are happy",
      "I feel great",
      "They are surprised",
      "She is calm"
    ]
  },

  // NIVEL 7 – DESCRIPCIONES
  { 
    name: "Nivel 7 - Intermedio 4",
    words: [
      "The car is fast",
      "The apple is red",
      "The dog is big",
      "The tree is tall",
      "The water is cold",
      "The room is dark",
      "The food is delicious",
      "The movie is funny",
      "The bag is heavy",
      "The house is small",
      "The chair is comfortable"
    ]
  },

  // NIVEL 8 – ACCIONES DIARIAS
  { 
    name: "Nivel 8 - Intermedio Alto",
    words: [
      "I go to school",
      "She takes a shower",
      "They eat breakfast",
      "We watch TV",
      "I brush my teeth",
      "He goes to work",
      "She cooks dinner",
      "They play soccer",
      "We clean the house",
      "I do my homework",
      "She rides a bike"
    ]
  },

  // NIVEL 9 – FRASES MÁS COMPLEJAS
  { 
    name: "Nivel 9 - Avanzado 1",
    words: [
      "I love learning English",
      "She is playing with her dog",
      "They are studying for the test",
      "He is cooking dinner",
      "I am practicing pronunciation",
      "She is reading a long book",
      "They are learning new words",
      "He is fixing his computer",
      "I am writing a message",
      "She is watching a movie",
      "They are listening to music"
    ]
  },

  // NIVEL 10 – PREGUNTAS CORTAS
  { 
    name: "Nivel 10 - Avanzado 2",
    words: [
      "What is your name?",
      "How old are you?",
      "Where do you live?",
      "Do you like music?",
      "What time is it?",
      "Where are you from?",
      "Do you speak English?",
      "How are you today?",
      "What is your favorite food?",
      "When is your birthday?",
      "Do you have pets?"
    ]
  },

  // NIVEL 11 – ORACIONES COMPLETAS
  { 
    name: "Nivel 11 - Avanzado 3",
    words: [
      "I want to travel around the world",
      "She is learning how to play the guitar",
      "We are planning a birthday party",
      "They went to the museum yesterday",
      "He is studying to be a doctor",
      "I am trying to improve my English",
      "She loves spending time with her family",
      "They decided to buy a new car",
      "He wants to learn another language",
      "We visited the park last weekend",
      "I am saving money for a trip"
    ]
  },

  // NIVEL 12 – DESAFÍO FINAL
  { 
    name: "Nivel 12 - Desafío Final",
    words: [
      "Could you please repeat that?",
      "I would like a cup of coffee, please",
      "The weather today is really nice",
      "Learning new languages is very fun",
      "I am looking for my keys",
      "Can you help me with this problem?",
      "She is preparing a presentation for school",
      "They are discussing an important topic",
      "I am trying to remember the instructions",
      "He is thinking about his future",
      "We need to finish this project soon"
    ]
  },
];
const images = {
  // --- NIVEL 1 ---
  cat: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
  dog: "https://cdn-icons-png.flaticon.com/512/620/620851.png",
  sun: "https://cdn-icons-png.flaticon.com/512/3222/3222796.png",
  hat: "https://cdn-icons-png.flaticon.com/512/891/891448.png",
  pen: "https://tse1.explicit.bing.net/th/id/OIP.7GJFj01B98Yq57i9nsiVUgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  book: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  car: "https://cdn-icons-png.flaticon.com/512/743/743922.png",
  fish: "https://tse3.mm.bing.net/th/id/OIP.TDT8awtskxfsQc4e7QzYhwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  tree: "https://th.bing.com/th/id/R.5f5e13ab5b2e9201fd01c8e3f4ee6abd?rik=PnCVYSbQSCERmg&pid=ImgRaw&r=0",
  ball: "https://static.vecteezy.com/system/resources/previews/019/806/685/original/beach-ball-graphic-clipart-design-free-png.png",
  cup: "https://png.pngtree.com/png-clipart/20231230/original/pngtree-red-mug-with-a-delicious-coffee-cartoon-vector-png-image_13972699.png",

  // --- NIVEL 2 ---
  chair: "https://static.vecteezy.com/system/resources/previews/042/053/211/original/ai-generated-wooden-chair-hand-drawn-cartoon-style-illustration-free-png.png",
  table: "https://tse4.mm.bing.net/th/id/OIP.rzo7Rp2GOlEgW3MfnTtu0wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  apple: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
  milk: "https://th.bing.com/th/id/R.6446c69b745dec2c86c69531b6e4360e?rik=02%2f5SESQxqOqpQ&pid=ImgRaw&r=0",
  shoe: "https://i.pinimg.com/originals/cf/c0/a5/cfc0a5334d08e8c4be532034d4600910.png",
  bag: "https://static.vecteezy.com/system/resources/previews/049/443/703/original/a-drawing-of-a-tote-bag-vector.jpg",
  smile: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
  door: "https://tse1.mm.bing.net/th/id/OIP.CvryNma1Hd_ToTB9a3ezFQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  house: "https://img.freepik.com/premium-photo/modern-house-art-drawing-realistic-color-schemes-dynamic-sketching_899449-261360.jpg?w=2000",
  water: "https://tse2.mm.bing.net/th/id/OIP.YMmHhFHa--MiIG6trFqxEwHaG0?rs=1&pid=ImgDetMain&o=7&rm=3",
  phone: "https://cdn-icons-png.flaticon.com/512/724/724664.png",

  run:"https://tse3.mm.bing.net/th/id/OIP.7SXOgmUZ2DZsqvGtr1CC_QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  walk: "https://cdn-icons-png.flaticon.com/512/1023/1023653.png",
  jump: "https://cdn-icons-png.flaticon.com/512/2764/2764433.png",
  eat: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  sleep: "https://cdn-icons-png.flaticon.com/512/3524/3524633.png",
  swim: "https://cdn-icons-png.flaticon.com/512/859/859271.png",
  play: "https://cdn-icons-png.flaticon.com/512/2097/2097276.png",
  write: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  read: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  sing: "https://cdn-icons-png.flaticon.com/512/727/727218.png",
  open: "https://cdn-icons-png.flaticon.com/512/2889/2889676.png",

  // --- NIVEL 4 (Frases) ---
  "i like pizza": "https://cdn-icons-png.flaticon.com/512/1404/1404944.png",
  "she is happy": "https://cdn-icons-png.flaticon.com/512/742/742751.png",
  "he reads a book": "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  "i am hungry": "https://cdn-icons-png.flaticon.com/512/857/857681.png",
  "i want water": "https://cdn-icons-png.flaticon.com/512/728/728093.png",
  "it is sunny": "https://cdn-icons-png.flaticon.com/512/3222/3222796.png",
  "she loves cats": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
  "i see a dog": "https://cdn-icons-png.flaticon.com/512/620/620851.png",
  "he is tall": "https://cdn-icons-png.flaticon.com/512/4142/4142086.png",
  "i am fine": "https://cdn-icons-png.flaticon.com/512/742/742751.png",
  "we are friends": "https://cdn-icons-png.flaticon.com/512/869/869636.png",

  // --- NIVEL 5 ---
  "open the door": "https://cdn-icons-png.flaticon.com/512/2889/2889676.png",
  "close the window": "https://cdn-icons-png.flaticon.com/512/853/853443.png",
  "drink water": "https://cdn-icons-png.flaticon.com/512/728/728093.png",
  "read the book": "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  "wash your hands": "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
  "clean the table": "https://cdn-icons-png.flaticon.com/512/3189/3189860.png",
  "turn on the light": "https://cdn-icons-png.flaticon.com/512/702/702814.png",
  "turn off the tv": "https://cdn-icons-png.flaticon.com/512/833/833453.png",
  "pick up the ball": "https://cdn-icons-png.flaticon.com/512/833/833314.png",
  "write your name": "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  "draw a picture": "https://cdn-icons-png.flaticon.com/512/815/815467.png",

  // --- NIVEL 6 ---
  "i am tired": "https://cdn-icons-png.flaticon.com/512/4100/4100692.png",
  "she feels sad": "https://cdn-icons-png.flaticon.com/512/742/742752.png",
  "he is excited": "https://cdn-icons-png.flaticon.com/512/742/742790.png",
  "they are bored": "https://cdn-icons-png.flaticon.com/512/742/742884.png",
  "i am sick": "https://cdn-icons-png.flaticon.com/512/2966/2966485.png",
  "she is angry": "https://cdn-icons-png.flaticon.com/512/742/742759.png",
  "he is nervous": "https://cdn-icons-png.flaticon.com/512/742/742774.png",
  "we are happy": "https://cdn-icons-png.flaticon.com/512/742/742751.png",
  "i feel great": "https://cdn-icons-png.flaticon.com/512/742/742751.png",
  "they are surprised": "https://cdn-icons-png.flaticon.com/512/742/742755.png",
  "she is calm": "https://cdn-icons-png.flaticon.com/512/742/742912.png",

  // --- NIVEL 7 ---
  "the car is fast": "https://cdn-icons-png.flaticon.com/512/743/743922.png",
  "the apple is red": "https://cdn-icons-png.flaticon.com/512/415/415733.png",
  "the dog is big": "https://cdn-icons-png.flaticon.com/512/620/620851.png",
  "the tree is tall": "https://cdn-icons-png.flaticon.com/512/763/763812.png",
  "the water is cold": "https://cdn-icons-png.flaticon.com/512/728/728093.png",
  "the room is dark": "https://cdn-icons-png.flaticon.com/512/3106/3106794.png",
  "the food is delicious": "https://cdn-icons-png.flaticon.com/512/857/857681.png",
  "the movie is funny": "https://cdn-icons-png.flaticon.com/512/744/744922.png",
  "the bag is heavy": "https://cdn-icons-png.flaticon.com/512/891/891462.png",
  "the house is small": "https://cdn-icons-png.flaticon.com/512/616/616554.png",
  "the chair is comfortable": "https://cdn-icons-png.flaticon.com/512/1412/1412269.png",

  // --- NIVEL 8 ---
  "i go to school": "https://cdn-icons-png.flaticon.com/512/167/167707.png",
  "she takes a shower": "https://cdn-icons-png.flaticon.com/512/1686/1686928.png",
  "they eat breakfast": "https://cdn-icons-png.flaticon.com/512/3075/3075996.png",
  "we watch tv": "https://cdn-icons-png.flaticon.com/512/833/833453.png",
  "i brush my teeth": "https://cdn-icons-png.flaticon.com/512/3075/3075975.png",
  "he goes to work": "https://cdn-icons-png.flaticon.com/512/1995/1995576.png",
  "she cooks dinner": "https://cdn-icons-png.flaticon.com/512/706/706164.png",
  "they play soccer": "https://cdn-icons-png.flaticon.com/512/833/833285.png",
  "we clean the house": "https://cdn-icons-png.flaticon.com/512/3090/3090928.png",
  "i do my homework": "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  "she rides a bike": "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",

  // --- NIVEL 9 ---
  "i love learning english": "https://cdn-icons-png.flaticon.com/512/3576/3576198.png",
  "she is playing with her dog": "https://cdn-icons-png.flaticon.com/512/620/620851.png",
  "they are studying for the test": "https://cdn-icons-png.flaticon.com/512/3004/3004618.png",
  "he is cooking dinner": "https://cdn-icons-png.flaticon.com/512/706/706164.png",
  "i am practicing pronunciation": "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  "she is reading a long book": "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  "they are learning new words": "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
  "he is fixing his computer": "https://cdn-icons-png.flaticon.com/512/1995/1995576.png",
  "i am writing a message": "https://cdn-icons-png.flaticon.com/512/1250/1250615.png",
  "she is watching a movie": "https://cdn-icons-png.flaticon.com/512/744/744922.png",
  "they are listening to music": "https://cdn-icons-png.flaticon.com/512/727/727218.png",

  // --- NIVEL 10 ---
  "what is your name?": "https://cdn-icons-png.flaticon.com/512/1250/1250615.png",
  "how old are you?": "https://cdn-icons-png.flaticon.com/512/1250/1250615.png",
  "where do you live?": "https://cdn-icons-png.flaticon.com/512/3105/3105927.png",
  "do you like music?": "https://cdn-icons-png.flaticon.com/512/727/727218.png",
  "what time is it?": "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  "where are you from?": "https://cdn-icons-png.flaticon.com/512/3105/3105927.png",
  "do you speak english?": "https://cdn-icons-png.flaticon.com/512/3576/3576198.png",
  "how are you today?": "https://cdn-icons-png.flaticon.com/512/742/742751.png",
  "what is your favorite food?": "https://cdn-icons-png.flaticon.com/512/857/857681.png",
  "when is your birthday?": "https://cdn-icons-png.flaticon.com/512/1998/1998765.png",
  "do you have pets?": "https://cdn-icons-png.flaticon.com/512/620/620851.png",

  // --- NIVEL 11 ---
  "i want to travel around the world": "https://cdn-icons-png.flaticon.com/512/854/854878.png",
  "she is learning how to play the guitar": "https://cdn-icons-png.flaticon.com/512/727/727239.png",
  "we are planning a birthday party": "https://cdn-icons-png.flaticon.com/512/1998/1998765.png",
  "they went to the museum yesterday": "https://cdn-icons-png.flaticon.com/512/235/235861.png",
  "he is studying to be a doctor": "https://cdn-icons-png.flaticon.com/512/2966/2966485.png",
  "i am trying to improve my english": "https://cdn-icons-png.flaticon.com/512/3576/3576198.png",
  "she loves spending time with her family": "https://cdn-icons-png.flaticon.com/512/869/869636.png",
  "they decided to buy a new car": "https://cdn-icons-png.flaticon.com/512/743/743922.png",
  "he wants to learn another language": "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
  "we visited the park last weekend": "https://cdn-icons-png.flaticon.com/512/1603/1603870.png",
  "i am saving money for a trip": "https://cdn-icons-png.flaticon.com/512/2164/2164813.png",

  // --- NIVEL 12 ---
  "could you please repeat that?": "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  "i would like a cup of coffee, please": "https://cdn-icons-png.flaticon.com/512/415/415733.png",
  "the weather today is really nice": "https://cdn-icons-png.flaticon.com/512/3222/3222796.png",
  "learning new languages is very fun": "https://cdn-icons-png.flaticon.com/512/3576/3576198.png",
  "i am looking for my keys": "https://cdn-icons-png.flaticon.com/512/2933/2933116.png",
  "can you help me with this problem?": "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  "she is preparing a presentation for school": "https://cdn-icons-png.flaticon.com/512/1077/1077976.png",
  "they are discussing an important topic": "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  "i am trying to remember the instructions": "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  "he is thinking about his future": "https://cdn-icons-png.flaticon.com/512/1995/1995576.png",
  "we need to finish this project soon": "https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
};

const Juego = () => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [feedback, setFeedback] = useState("");
  const [recognition, setRecognition] = useState(null);
  const [hits, setHits] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Tu navegador no soporta reconocimiento de voz");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();
    recog.lang = "en-US";
    recog.interimResults = false;
    recog.maxAlternatives = 1;

    recog.onresult = (event) => {
      const spoken = event.results[0][0].transcript.toLowerCase();
      if (spoken === currentWord.toLowerCase()) {
        setFeedback("✅ ¡Correcto!");
        if (!answeredCorrectly) {
          setHits(prev => prev + 1);
          setTotalHits(prev => prev + 1);
        }
        setAnsweredCorrectly(true);
      } else {
        setFeedback(`❌ Intenta de nuevo. Dijiste: "${spoken}"`);
      }
    };

    recog.onerror = () => setFeedback("❌ Error: intenta de nuevo");

    setRecognition(recog);
  }, [currentWord, answeredCorrectly]);

  const nextQuestion = () => {
    const words = levels[levelIndex].words;
    if (questionIndex + 1 < words.length) {
      setQuestionIndex(prev => prev + 1);
      setCurrentWord(words[questionIndex + 1]);
      setFeedback("");
      setAnsweredCorrectly(false);
    } else {
      if (levelIndex + 1 < levels.length) {
        setLevelIndex(prev => prev + 1);
        setQuestionIndex(0);
        setHits(0);
        setCurrentWord(levels[levelIndex + 1].words[0]);
        setFeedback(`🎉 ¡Nivel ${levels[levelIndex + 1].name}!`);
        setAnsweredCorrectly(false);
      } else {
        setFeedback(`🏆 ¡Terminaste todos los niveles! Total de aciertos: ${totalHits}`);
        setCurrentWord("");
        setAnsweredCorrectly(false);
      }
    }
  };

  const startGame = () => {
    setLevelIndex(0);
    setQuestionIndex(0);
    setHits(0);
    setTotalHits(0);
    setCurrentWord(levels[0].words[0]);
    setFeedback("");
    setAnsweredCorrectly(false);
  };

  const startListening = () => recognition && recognition.start();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "30px", backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", maxWidth: "600px", width: "100%", textAlign: "center" }}>
        <h1 style={{ color: "#0a1c55ff",  marginBottom: "10px" }}> Pronunciation </h1>
        <h2 style={{ color: "#000000ff", marginBottom: "10px" }}>{levels[levelIndex]?.name || "-"}</h2>
        <p style={{ color: "#0c0d0eff", marginBottom: "10px" }}>Pregunta {questionIndex + 1} / 11</p>
        <p style={{ color: "#141414ff", marginBottom: "10px" }}>Aciertos nivel: {hits}</p>
        <p style={{ color: "#18191aff", marginBottom: "25px" }}>Aciertos totales: {totalHits}</p>


        <div style={{ width:180, height:180, margin:"0 auto 20px", backgroundColor:"#7596d3ff", borderRadius:20, display:"flex", justifyContent:"center", alignItems:"center", boxShadow:"inset 0 0 10px rgba(0,0,0,0.1)" }}>
          {currentWord && images[currentWord.toLowerCase()] ? (
            <img src={images[currentWord.toLowerCase()]} alt="" style={{ width:"70%" }} />
          ) : currentWord ? (
            <img src="https://cdn-icons-png.flaticon.com/512/565/565547.png" alt="" style={{ width:"40%", opacity:0.7 }} />
          ) : null}
        </div>

        <div style={{ backgroundColor: "#d6d2ebff", padding: "25px", borderRadius: "15px", minHeight: "80px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "25px", fontSize: "2rem", color: "#181715ff", wordWrap: "break-word" }}>
          {currentWord || "Presiona 'Iniciar Juego'"}
        </div>

        {currentWord && (
          <>
            <button onClick={startListening} style={{ fontSize: "1.1rem", padding: "12px 60px", marginBottom: "30px", cursor: "pointer", borderRadius: "20px", backgroundColor: "#010047ff", border: "none", color: "#cfdfd6ff", width: "100%" }}>
              🎙️ Pronunciar
            </button>

            <button onClick={nextQuestion} style={{ fontSize: "1.1rem", padding: "7px 7px", marginBottom: "15px", cursor: "pointer", borderRadius: "12px", backgroundColor: "#010047ff", border: "none", color: "#cbdce4ff", width: "100%" }}>
              Siguiente
            </button>
          </>
        )}

        {!currentWord && (
          <button onClick={startGame} style={{ fontSize: "1.3rem", padding: "7px 25px", cursor: "pointer", borderRadius: "12px", backgroundColor: "#04073bff", border: "none", color: "#ffffff", width: "100%", marginBottom: "15px" }}>
            Iniciar Juego
          </button>
        )}

        <p style={{ fontSize: "1.2rem", minHeight: "1.5em", color: feedback.includes("✅") ? "#06d6a0" : "#d00000", marginBottom: "20px" }}>
          {feedback}
        </p>
      </div>
    </div>
  );
};

export default Juego;
