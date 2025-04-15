const bio = `
Hello! I'm Dannie, a class 11 PCM student at Kendriya Vidyalaya Chenani. I'm passionate about science, math, and computer science. I build projects using HTML, CSS, JavaScript, and Python. I’ve worked on IoT, chatbot systems, and AI-based smart city models. I also love editing, photography, and cinematic video making. My national-level project, Voice-Controlled Graphics, uses speech-to-drawing tech with Python Turtle. I’m interested in open-source and want to build revolutionary programs. I enjoy learning new tech and helping solve real-world problems like traffic, irrigation, and waste management using IoT.
`;

const qaPairs = [
  { keywords: ["name", "your name"], answer: "My name is Dannie — happy to meet you!" },
  { keywords: ["class", "grade"], answer: "I'm in class 11, PCM stream, at Kendriya Vidyalaya Chenani." },
  { keywords: ["school", "kendriya vidyalaya"], answer: "Yes! I study at Kendriya Vidyalaya Chenani — a great place for curious minds." },
  { keywords: ["skills", "programming", "coding"], answer: "I'm skilled in HTML, CSS, JS, Python, and I love building AI and IoT-based systems!" },
  { keywords: ["project", "national", "voice"], answer: "My national-level project is Voice-Controlled Graphics — a speech-to-graphics tool built using Python Turtle." },
  { keywords: ["hobby", "hobbies", "interest"], answer: "I'm into photography, video editing, and solving real-world issues with tech." },
  { keywords: ["iot", "smart city", "traffic", "waste", "pollution"], answer: "Yes! I work on IoT-based smart city models — smart bins, irrigation, traffic control and more." },
  { keywords: ["future", "goal", "dream"], answer: "I dream of building open-source tools that help people and solve meaningful problems." },
  { keywords: ["hi", "hello", "hey", "good morning", "good evening", "good night", "namaste"], answer: "Hey there! I'm really glad you're here. Let’s explore some tech talk!" },
  { keywords: ["thank", "thanks"], answer: "You're most welcome! It’s always a pleasure to help curious minds like you!" }
];

function getResponse() {
  const userInput = document.getElementById("userInput").value.toLowerCase().trim();
  const chatbox = document.getElementById("chatbox");
  const typingDiv = document.getElementById("typing");

  let response = "That’s an interesting thought! Try asking about my projects, skills, or dreams. I'm all ears and all heart!";

  for (let pair of qaPairs) {
    for (let keyword of pair.keywords) {
      if (userInput.includes(keyword)) {
        response = pair.answer;
        break;
      }
    }
    if (response !== "That’s an interesting thought! Try asking about my projects, skills, or dreams. I'm all ears and all heart!") {
      break;
    }
  }

  chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  typingDiv.innerHTML = "Bot is typing...";

  setTimeout(() => {
    typingDiv.innerHTML = "";
    chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 1000 + response.length * 15);
}
