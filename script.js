let answerCount = 0;

const qaPairs = [
  { keywords: ["name", "your name"], answer: "My name is Dannie -- happy to meet you!" },
  { keywords: ["class", "grade"], answer: "I'm in class 11, PCM stream, at Kendriya Vidyalaya Chenani." },
  { keywords: ["school", "kendriya vidyalaya"], answer: "Yes! I study at Kendriya Vidyalaya Chenani -- a great place for curious minds." },
  { keywords: ["skills", "programming", "coding"], answer: "I'm skilled in HTML, CSS, JS, Python, and I love building AI and IoT-based systems!" },
  { keywords: ["project", "national", "voice"], answer: "My national-level project is Voice-Controlled Graphics -- a speech-to-graphics tool built using Python Turtle." },
  { keywords: ["hobby", "hobbies", "interest"], answer: "I'm into photography, video editing, and solving real-world issues with tech." },
  { keywords: ["iot", "smart city", "traffic", "waste", "pollution"], answer: "Yes! I work on IoT-based smart city models -- smart bins, irrigation, traffic control and more." },
  { keywords: ["future", "goal", "dream"], answer: "I dream of building open-source tools that help people and solve meaningful problems." },
  { keywords: ["hi", "hello", "hey", "good morning", "good evening", "good night", "namaste"], answer: "Hey there! I'm really glad you're here. Let's explore some tech talk!" },
  { keywords: ["thank", "thanks"], answer: "You're most welcome! It's always a pleasure to help curious minds like you!" },
  { keywords: ["help", "query", "problem", "issue", "report"], answer: `If you need help or want to report an issue, just <a href="mailto:veerdanish452008@gmail.com?subject=Chatbot Help&body=Hello Dannie, I need help with your chatbot..." style="color: #00f;">click here to mail me directly</a>.` 
}
];

function getResponse() {
  const userInput = document.getElementById("userInput").value.toLowerCase().trim();
  const chatbox = document.getElementById("chatbox");
  const typingDiv = document.getElementById("typing");

  let response = "That's an interesting thought! Try asking about my projects, skills, or dreams. I'm all ears and all heart!";

  for (let pair of qaPairs) {
    for (let keyword of pair.keywords) {
      if (userInput.includes(keyword)) {
        response = pair.answer;
        answerCount++;
        break;
      }
    }
    if (response !== "That's an interesting thought! Try asking about my projects, skills, or dreams. I'm all ears and all heart!") break;
  }

  chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  typingDiv.innerHTML = "Bot is typing...";

  setTimeout(() => {
    typingDiv.innerHTML = "";
    chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;

    if (answerCount === 2 || userInput.includes("feedback")) {
      showFeedback();
      answerCount = 0;
    }
  }, 1000 + response.length * 15);
}

function showFeedback() {
  const chatbox = document.getElementById("chatbox");
  const stars = [1, 2, 3, 4, 5].map(star => 
    `<span onclick="submitRating(${star})" style="cursor:pointer; font-size: 20px;">★</span>`).join(" ");
  chatbox.innerHTML += `
    <p><strong>Bot:</strong> How did I do? Please rate me:</p>
    <div style="color: gold; margin-bottom: 10px;">${stars}</div>
  `;
  chatbox.scrollTop = chatbox.scrollHeight;
}

function submitRating(rating) {
  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML += `<p><strong>Bot:</strong> Thank you so much for the ${rating}-star rating! You're awesome!</p>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}
