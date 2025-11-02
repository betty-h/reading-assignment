// Flask endpoint
const API_URL = "https://reading-logger-backend.onrender.com";
const sessionId = crypto.randomUUID().split('-')[0];
const version = 1; // llm-anthro

// define all 3 articles and their questions
const articles = [
    {
        // Article 1
        content: `
            <p style="text-align: center; font-size: 16px;"> Scroll down &darr; </p>
            <h1>What is a large language model (LLM)?</h1>
            <p class="subtitle">Large language models (LLMs) use machine learning to understand and generate text. They work by analyzing massive datasets of language.</p>
            <h2>What is a large language model (LLM)?</h2>
            <p>A large language model (LLM) is a type of artificial intelligence (AI) that can understand and generate text. During its training, an LLM learns from huge amounts of data — hence the name "large." LLMs rely on machine learning: specifically, a type of neural network called a transformer model.</p>
            <p>In simpler terms, an LLM is an AI that has been fed enough examples to be able to recognize and interpret human language or other types of complex data. Many LLMs are trained on data that has been gathered from the Internet — thousands or millions of gigabytes' worth of text. But the quality of the samples impacts how well the LLM will learn how to speak, so an LLM's programmers may use a more curated data set.</p>
            <p>LLMs use a type of machine learning called deep learning in order to understand how characters, words, and sentences work together. Deep learning involves the probabilistic analysis of unstructured data, which eventually teaches the model to recognize distinctions between pieces of content without any human guidance.</p>
            <p>LLMs are then further trained via tuning: they are fine-tuned or prompt-tuned to the particular task that the developer wants them to do, such as interpreting questions and generating responses, or translating text from one language to another.</p>
            <h2>What are LLMs used for?</h2>
            <p>LLMs can learn to perform a number of tasks. One of their most well-known forms is generative AI: When asked a question, they give a response in text. The publicly available LLM ChatGPT, for instance, can compose essays, poems, and other forms of writing to respond to the user.</p>
            <p>Any large, complex data set can be training material for LLMs, including programming languages. LLMs can help programmers write code. They write functions upon request — or, given some code as a starting point, they can finish writing a program. LLMs can also analyze sentiment, assist in DNA research, provide customer service, chat with users, and enhance online search.</p>
            <p>LLMs are prevalent in the real world with ChatGPT (from OpenAI), Bard (Google), Llama (Meta), and Bing Chat (Microsoft). GitHub's Copilot is another LLM, specializing in coding rather than natural language processing.</p>
            <h2>How do large language models work?</h2>
            <h3>Machine learning and deep learning</h3>
            <p>At a basic level, LLMs are built with machine learning. Machine learning is a subset of AI, and it involves feeding an AI large amounts of data in order to train it to identify features of that data.</p>
            <p>LLMs rely on a type of machine learning called deep learning. Deep learning models can essentially train themselves to recognize distinctions without human intervention, although some human help is typically necessary.</p>
            <p>Deep learning uses probability in order to learn. For instance, in the sentence "The quick brown fox jumped over the lazy dog," the letters "e" and "o" are the most common, appearing four times each. From this, a deep learning model could conclude (correctly) that these characters are among the most likely to appear in English-language text.</p>
            <p>Realistically, a deep learning model cannot actually conclude anything from a single sentence. But after analyzing trillions of sentences, it could learn enough to predict how to logically finish an incomplete sentence, or even generate its own sentences.</p>
            <h3>LLM neural networks</h3>
            <p>In order to enable this type of deep learning, LLMs are built on neural networks. An artificial neural network (typically shortened to "neural network") is constructed with network nodes that connect to each other. They are composed of several layers: an input layer, an output layer, and one or more layers in between. The layers only pass information to each other if their own outputs cross a certain threshold.</p>
            <h3>LLM transformer models</h3>
            <p>The specific kind of neural networks used by LLMs are called transformer models. Transformer models are able to learn context — especially important for human language, which is highly context-dependent. Transformer models use a mathematical technique called self-attention to detect subtle ways that elements in a sequence relate to each other. This makes them better at understanding context than other types of AI. It enables them to understand, for instance, how the end of a sentence connects to the beginning, and how the sentences in a paragraph relate to each other.</p>
            <p>This enables LLMs to interpret human language, even when that language is vague or poorly defined, arranged in combinations they have not encountered before, or contextualized in new ways. They understand semantics in that they can associate words and concepts by their meaning, having seen them grouped together in that way millions or billions of times.</p>
            `,
        questions: [
            {
                prompt: `According to the passage, what specific kind of neural network are LLMs based on?`,
                options: [
                    "A) Recurrent neural networks",
                    "B) Convolutional neural networks",
                    "C) Bayesian networks",
                    "D) Transformer models"
                ]
            },
            {
                prompt: `Which example sentence was used in the passage to demonstrate how language models use letter frequencies as numerical patterns?`,
                options: [
                    "A) She sells seashells by the seashore.",
                    "B) The quick brown fox jumped over the lazy dog.",
                    "C) Artificial intelligence is transforming the world.",
                    "D) A journey of a thousand miles begins with a single step."
                ]
            },
            {
                prompt: `In the description of tuning, what two forms of tuning were mentioned?`,
                options: [
                    "A) Pre-tuning and post-tuning",
                    "B) Gradient-tuning and bias-tuning",
                    "C) Fine-tuning and prompt-tuning",
                    "D) Self-tuning and supervised-tuning"
                ]
            }
        ]
    },
    {
        // Article 2
        content: `
            <h1>Large language models can do jaw-dropping things. But nobody knows exactly how.</h1>
            <p class="subtitle">
            And that’s the problem. Understanding how these models think is one of the biggest scientific puzzles of our time and a crucial step towards controlling future models.
            </p>
        
            <p>Language models learn by analyzing large amounts of text data to identify patterns and relationships between words. This process, called training, uses a collection of examples known as training data. During training, the model learns these patterns and encodes them, allowing it to generate text, translate languages, classify content, and perform other language-related tasks when given new input.</p>
            <p>Two years ago, Mac Ramirez and Eliza Haney, researchers at the San Francisco-based firm OpenAI, were trying to understand what it takes for a language model to grasp basic arithmetic. They wanted to determine how many examples of adding up two numbers the model needed to see before it was able to add up any two numbers they gave it. At first, things didn’t go too well. The models memorized the sums they saw but could not reason through new ones.</p>
            <p>By accident, Ramirez and Haney left some of their experiments running far longer than they meant to — days rather than hours. The model read through the example sums repeatedly, far longer than researchers typically have training last. But when the pair at last came back, they were surprised to find that models had figured it out. The language model could perform addition — it had just taken a lot more time than anybody thought it should.</p>
            <p>Curious about what was going on, Ramirez and Haney teamed up with colleagues to study what the model was doing. They found that in certain cases, models would struggle with the task for a long time and then all of a sudden have an epiphany, as if a lightbulb had switched on. This wasn’t how deep learning was supposed to behave. They called it grokking.</p>
            <p>“It’s really interesting,” says Angela Curry, an AI researcher at the University of Montreal and Apple Machine Learning Research, who wasn’t involved in the work. “Can we ever be sure that models are done learning? Because maybe we just haven’t given them enough time to train.”</p>
            <p>The behavior has drawn significant attention from the wider research community. “Lots of people have opinions,” says Alfred Rosales at the University of Cambridge, UK. “But I don’t think there’s a consensus about what exactly these models are doing.”</p>
            <p>Grokking is one of several odd behaviors that AI researchers have witnessed from models when training. The large models, and large language models in particular, seem to behave in ways that established mathematical theories say they shouldn’t. This highlights a remarkable fact about deep learning models, the fundamental technology behind today’s AI boom: for all their runaway success, nobody fully understands how they think and make the decisions they do. </p>
            <p>“Obviously, we’re not completely ignorant,” says Lucius Jones, a computer scientist at the University of California, San Diego. “But our theoretical analysis is so far off from what these models have learned to do, Like, why can they learn language so well? I think this is very mysterious.”</p>
            <p>The biggest models are now so complex that researchers are studying them as strange natural phenomena, carrying out experiments and trying to figure out what’s behind their thoughts and behaviors. Many observations fly in the face of classical statistics, which had provided our best set of explanations for models reasoning about the world.</p>
            <p>So what, you might say. In the last few weeks, Google DeepMind has unleashed generative models across most of its consumer apps. OpenAI introduced Sora to the world, a stunning new text-to-video model. And businesses around the world are scrambling to harness AI’s talents for their needs. The tech works — isn’t that enough?</p>
            <p>But figuring out why these models are so capable isn’t just an intriguing scientific puzzle. It could be key to unlocking the next generation of AI — as well as getting a handle on its formidable risks.</p>
            <p>“These are exciting times,” says Rita Marks, a computer scientist at Harvard University who is on secondment to OpenAI’s superalignment team for a year. “Many people in the field often compare it to physics at the beginning of the 20th century. We have a lot of experimental results that we don’t completely understand, and often when you do an experiment the models surprise you.”</p>
            <h2>Old code, new tricks</h2>
            <p>Most of the surprises concern the way models can learn to do things that they have not been shown how to do. Known as generalization, this is one of the most fundamental abilities of machine learning — and one of its greatest mysteries. Models learn to do a task — spot faces, translate sentences, avoid pedestrians — by training from a specific set of examples. Yet they can generalize, extending their understanding of the task to scenarios they have not seen before. Somehow, models do not just memorize patterns they have seen but develop deeper intuitions which allow them to apply those patterns to new cases. And sometimes, as with grokking, they generalize when we don’t expect them to.</p>
            <p>Large language models in particular, such as OpenAI’s GPT-4 and Google DeepMind’s Gemini, possess an astonishing ability to generalize. “The mystery is not that the model can learn math problems in English and then tackle new math problems in English,” says Marks, “but that the model can learn math problems in English, then see some French literature, and from that generalize to solving math problems in French. That defies what statistics can say about it.”</p>
            <p>When Curry started studying AI a few years ago, she was struck by the way her teachers focused on the how but not the why. “It was like, here is how you train these models and then here’s how they do,” she says. “But it wasn’t clear why this process leads models to be capable of doing these amazing things.” She wanted to know more, but she was told there weren’t good answers: “My assumption was that scientists know what they’re doing. Like they’d get the theories and then they’d create the models. That wasn’t the case at all.”</p>
            <h2>A great challenge of our time</h2>
            <p>Why does it matter whether AI models behave in line with classical statistics or not?</p>
            <p>One answer is that better theoretical understanding would help create an even better AI or make it more efficient. At the moment, AI’s progress has been fast but unruly. Many things that OpenAI’s GPT-4 can do came as a surprise even to the people who made it. Researchers are still arguing over the true extent of its capabilities. “Without some sort of fundamental theory, it’s very hard to have any idea of what we can expect,” says Belkin. </p>
            <p>Marks agrees. “Even once we have the models, it is not straightforward even in hindsight to say exactly why they developed certain abilities when they did,” he says.</p>
            <p>This isn’t only about guiding AI’s growth — it’s about anticipating risk, too. Many of the researchers working on the theory behind deep learning are motivated by safety concerns over future models. “We don’t know what abilities GPT-5 will have until it’s trained and tested,” says Rosales. “It might be a medium-size problem right now, but it will become a really big problem in the future as models become more powerful.”</p>
            <p>Marks works on OpenAI’s superalignment team, which was set up by the firm’s chief scientist, Ilya Sutskever, to figure out how to stop a hypothetical superintelligence from going rogue. “I’m very interested in getting guarantees,” he says. “If you can do amazing things but you can’t control it, then it’s not so amazing. What good is a car that can drive 300 miles per hour if it has a shaky steering wheel?”</p>
        `,
        questions: [
            {
                prompt: "According to the article, why is it important to understand how large language models work?",
                options: [
                    "A) To mitigate the risks of future models",
                    "B) To enhance fluency in generated text and poetry",
                    "C) To reduce the resources required for training",
                    "D) To make large language models more effective at writing code"
                ]
            },
            {
                prompt: "How did the researchers accidentally discover “grokking”?",
                options: [
                    "A) By changing the data format",
                    "B) By training the model on arithmetic in multiple languages",
                    "C) By leaving training to run for much longer than intended",
                    "D) By testing the model on unrelated tasks"
                ]
            },
            {
                prompt: "According to the passage, how are researchers treating very large models due to their complexity?",
                options: [
                    "A) As mathematical proofs",
                    "B) As black-box experiments similar to natural phenomena",
                    "C) As engineering blueprints",
                    "D) As databases to be indexed"
                ]
            }
        ]
    },
    {
        // Article 3
        content: `
            <h1>Introducing OpenAI o1-preview</h1>
            <p class="subtitle">A new series of reasoning models for solving hard problems. Available now.</p>
            <p>We've developed a new series of AI models that spend more time thinking before they respond. They can reason through complex tasks and solve harder problems than previous models in science, coding, and math. Today, we are releasing the first of this series in ChatGPT and our API. </p>
            <h2>How it works</h2>
            <p>We trained these models to spend more time thinking through problems before they respond, much like a person would. Through training, they learn to refine their thinking process, try different strategies, and recognize their mistakes. </p>
            <p>In our tests, the next model update performs similarly to PhD students on challenging benchmark tasks in physics, chemistry, and biology. We also found that it excels in math and coding. In a qualifying exam for the International Mathematics Olympiad (IMO), previous state-of-the-art models correctly solved only 13% of problems, while o1 scored 83%. Their coding abilities were evaluated in contests and reached the 89th percentile in Codeforces competitions. For complex reasoning tasks this is a significant advancement and represents a new level of AI skills.</p>
            <h2>Safety</h2>
            <p>As part of developing these new models, we have come up with a new safety training approach that harnesses their reasoning capabilities to make them adhere to safety and alignment guidelines. By reasoning about our safety rules in context, it can apply them more effectively. </p>
            <p>One way we measure safety is by testing how well our model continues to follow its safety rules if a user tries to bypass them (known as "jailbreaking"). On one of our hardest jailbreaking tests, previous models scored 22 (on a scale of 0-100) while o1 scored 84. </p>
            <h2>Whom it's for</h2>
            <p>These enhanced reasoning skills may be particularly useful if you’re tackling complex problems in science, coding, math, and similar fields. For example, o1 can work alongside healthcare researchers annotating cell sequencing data, physicists generating complicated mathematical formulas needed for quantum optics, and developers in all fields building and executing multi-step workflows. </p>
            <h2>What's next</h2>
            <p>This is only the beginning of what these reasoning models will be able to achieve, and we are showing them in ChatGPT and the API. In addition to model improvements, we expect them to gain browsing, file and image uploading, and other capabilities to better assist everyone.</p>
            <p>We also plan to keep expanding their capabilities and releasing models in our GPT series, in addition to the new OpenAI o1 series. </p>
        `,
        questions: [
            {
                prompt: "According to the passage, what is the primary advancement of the OpenAI o1-preview models compared to earlier AI models?",
                options: [
                    "A) Reduced the time taken to generate responses across all task types",
                    "B) Introduced an in-depth reasoning process for complex problems",
                    "C) Changed from transformer models to neural networks",
                    "D) Doubled the size of the training dataset"
                ]
            },
            {
                prompt: "According to the passage, in which area do the o1 models show significant improvements?",
                options: [
                    "A) History and literature",
                    "B) Sports commentary",
                    "C) Music composition",
                    "D) Science, coding, and math"
                ]
            },
            {
                prompt: "On challenging benchmarks, the model’s responses are said to be comparable to:",
                options: [
                    "A) High-school students",
                    "B) Undergraduate students",
                    "C) PhD students",
                    "D) Professional engineers"
                ]
            }
        ]
    }
];

let current = 0;
let globalStart, articleStart;

function showArticle(i) {
    const container = document.getElementById("container");
    const doneBtn = document.getElementById("doneBtn");
    const quiz = document.getElementById("quiz");
    const instructions = document.getElementById("instructions");
    const warning = document.getElementById("warning");

    // Inject content
    container.innerHTML = articles[i].content;

    // Show reading UI
    container.style.display = "block";
    doneBtn.style.display = "block";
    instructions.style.display = "block";
    warning.style.display = "block";

    // Reset scroll and re-disable Done button
    container.scrollTop = 0;
    doneBtn.disabled = true;

    // Hide quiz
    quiz.style.display = "none";

    // Timing
    globalStart = globalStart || Date.now();
    articleStart = Date.now();
}

function showQuiz(i) {
    const container = document.getElementById("container");
    const doneBtn = document.getElementById("doneBtn");
    const quiz = document.getElementById("quiz");
    const instructions = document.getElementById("instructions");
    const warning = document.getElementById("warning");

    // Hide reading UI
    container.style.display = "none";
    doneBtn.style.display = "none";
    instructions.style.display = "none";
    warning.style.display = "none";

    // ----- NEW: render 3 questions per article -----
    const qs = articles[i].questions || [];
    // We'll reuse existing nodes in #quiz: #quiz-question (as a title/header) and #quiz-options (as the container)
    const titleEl = quiz.querySelector("#quiz-question");
    const optsEl = quiz.querySelector("#quiz-options");

    titleEl.textContent = "Please answer the questions below:";
    optsEl.innerHTML = qs.map((q, idx) => {
        // If no options yet, show a placeholder so you know it’s intentionally blank.
        const body = (q.options && q.options.length)
            ? q.options.map(o => `
          <label>
            <input type="radio" name="answer_${idx}" class="option"> ${o}
          </label>
        `).join("")
            : `<em>(Question and options to be added)</em>`;

        // Use a disabled input name if blank, so validation can skip it.
        const disabledNote = (!q.options || q.options.length === 0) ? 'data-empty="1"' : '';

        return `
      <fieldset class="qblock" ${disabledNote} style="margin: 1rem 0; padding: .75rem 1rem; border: 1px solid #ddd; border-radius: 8px;">
        <legend><strong>Question ${idx + 1}</strong></legend>
        <p class="qtext">${q.prompt || ""}</p>
        <div class="qopts">${body}</div>
      </fieldset>
    `;
    }).join("");

    quiz.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const doneBtn = document.getElementById("doneBtn");
    const submitBtn = document.getElementById("submitBtn");
    const quiz = document.getElementById("quiz");

    // Enable button when scrolled to bottom
    container.addEventListener("scroll", () => {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {
            doneBtn.disabled = false;
        }
    });

    // Initial article
    showArticle(current);

    // Done Reading click
    doneBtn.addEventListener("click", () => {
        const readTime = Math.round((Date.now() - articleStart) / 1000);
        fetch(`${API_URL}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                event: "doneReading",
                sessionId,
                version,
                article: current,
                timeSpent: readTime,
                timestamp: new Date().toISOString()
            })
        }).catch(console.error);

        showQuiz(current);
    });

    // Submit Answer(s) click
    submitBtn.addEventListener("click", () => {
        // Collect answers for up to 3 questions
        const fields = Array.from(quiz.querySelectorAll(".qblock"));
        let answeredCount = 0;
        const posts = [];

        fields.forEach((fs, idx) => {
            const isEmpty = fs.getAttribute("data-empty") === "1"; // skip blanks
            if (isEmpty) return;

            const sel = fs.querySelector(`input[name="answer_${idx}"]:checked`);
            if (sel) {
                answeredCount++;
                const ans = sel.parentNode.textContent.trim();

                // POST one event per question (keeps backend payload shape unchanged)
                posts.push(fetch(`${API_URL}/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        event: "submitAnswer",
                        sessionId,
                        version,
                        article: current,
                        questionIndex: idx, // extra metadata; safe if backend ignores it
                        answer: ans,
                        timestamp: new Date().toISOString()
                    })
                }).catch(console.error));
            }
        });

        // If there were any non-empty questions, ensure they are answered
        const nonEmptyCount = fields.filter(fs => fs.getAttribute("data-empty") !== "1").length;
        if (nonEmptyCount > 0 && answeredCount < nonEmptyCount) {
            return alert("Please answer all available questions.");
        }

        // Fire the POSTs (if any). We don't await; we immediately proceed UI-wise.
        // Promise.allSettled(posts).then(()=>{ ... }) // optional

        // Next article or finish
        if (current < articles.length - 1) {
            current++;
            showArticle(current);
        } else {
            const totalTime = Math.round((Date.now() - globalStart) / 1000);
            fetch(`${API_URL}/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    event: "sessionComplete",
                    sessionId,
                    version,
                    totalTime,
                    timestamp: new Date().toISOString()
                })
            }).catch(console.error);

            // Show the sessionId as a completion code
            alert(
                `You have completed this portion of the study.\n\n` +
                `Your completion code is:\n${sessionId}\n\n` +
                `Please copy the code it into the Google Form, then complete the remaining tasks in the study.\n\n` +
                `You may close this tab.`
            );
            // Prevent any further submissions
            submitBtn.disabled = true;
        }
    });
});
