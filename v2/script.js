// your Flask endpoint
const API_URL = "https://reading-logger-backend.onrender.com";
const sessionId = crypto.randomUUID();
const version = 2; //llm-unanthro

// define all 3 articles and their questions
const articles = [
    {
        // Article 1
        content: `
            <h1>What is a large language model (LLM)?</h1>
            <p class="subtitle">Large language models (LLMs) are machine learning-based programs designed to process and generate text. Building these systems requires massive language datasets.</p>
            <h2>What is a large language model (LLM)?</h2>
            <p>A large language model (LLM) is a type of artificial intelligence (AI) program built for analyzing and generating human language text. Training—the process of building an LLM—involves huge sets of data, hence the name "large." LLMs are based on machine learning: specifically, a type of neural network called a transformer model.</p>
            <p>In simpler terms, an LLM is an algorithm that uses large sets of examples to identify patterns in human language or other types of complex data. These patterns are then applied when generating text or analyzing new inputs. Many LLMs are trained with data that has been gathered from the internet—thousands or millions of gigabytes’ worth of text. But the patterns encoded in the model are influenced by the quality of the training data, so an LLM’s programmers may use a more curated data set.</p>
            <p>LLMs are built using a type of machine learning called deep learning, which allows developers to understand how characters, words, and sentences function together. Deep learning involves the probabilistic analysis of unstructured data, where calculations of distinctions between pieces of content become representations within the model without a programmer manually writing them as code.</p>
            <p>LLMs are then further trained via tuning: fine-tuning and prompt-tuning are processes to adjust the model for the specific application sought by the developer, such as interpreting questions and generating responses, or translating text from one language to another. </p>
            <h2>What are LLMs used for?</h2>
            <p>Training is used to build LLMs for a number of tasks. One of the most well-known applications is generative AI: When a user inputs a prompt or asks a question, the LLM outputs text. The publicly available LLM ChatGPT, for instance, can be used to generate essays, poems, and other textual forms based on user inputs. </p>
            <p>Any large, complex data set can be used for LLM training, including programming languages. Programmers use models for code generation, getting functions from input requests —- or, complete programs from partially written code. LLMs may also be used for sentiment analysis, DNA research, customer service, chatbots, and online search. </p>
            <p>Examples of real-world LLM applications include ChatGPT (from OpenAI), Bard (Google), Llama (Meta), and Bing Chat (Microsoft). GitHub's Copilot is another example, but for coding instead of natural language processing. </p>
            <h2>How do large language models work?</h2>
            <h3>Machine learning and deep learning</h3>
            <p>At a basic level, LLMs are built using machine learning techniques. Machine learning is a subset of AI, and it involves inputting large amounts of data into a program as the training process. The program is written to calculate features of that data through statistical processes.</p>
            <p>LLMs apply a type of machine learning called deep learning. In deep learning, the model is trained through multiple passes and iterations to better capture distinctions in the data. Although these passes do not involve explicit programming, some fine-tuning is typically necessary. </p>
            <p>Deep learning uses probability to identify patterns in data. For instance, in the sentence “The quick brown fox jumped over the lazy dog,” the letters “e” and “o” are the most common, appearing four times each. Using this sentence as training data, a deep learning model would encode these letter frequencies as numerical patterns, representing the likelihoods of appearing in English-language text. When applied, the model outputs would reflect (correctly) that “e” and “o” are among the most likely characters to appear in English. </p>
            <p>Realistically, a deep learning model cannot produce representative outputs from a single sentence. But with trillions of sentences, training can produce models that output logical finishes from incomplete sentences, or even generate original sentences. </p>
            <h3>LLM neural networks</h3>
            <p>For this type of deep learning, LLMs are built as neural networks. An artificial neural network (typically shortened to “neural network”) consists of network nodes that are interconnected. These networks are structured in several layers: an input layer, an output layer, and one or more intermediate layers. In each layer, a mathematical function is applied to the input values to produce an output, which is compared to a threshold value. If the output exceeds the threshold, the value is transmitted to the next layer.</p>
            <h3>LLM transformer models</h3>
            <p>The specific kind of neural networks used for LLMs are called transformer models. Transformer models are designed to capture context — especially important for human language, which is highly context-dependent. With transformer models a mathematical technique called self-attention is applied to quantify subtle relationships between elements in a sequence. This approach improves contextual analysis compared to other machine learning methods, enabling the model to encode, for example, how the end of a sentence connects to the beginning, and how the sentences in a paragraph are similar to each other. </p>
            <p>As a result, LLMs can be used to process human language, even when the input text is vague or poorly defined, arranged in combinations not present in the training examples, or contextualized in new ways. LLMs encode associations between words and concepts based on the meanings because they appeared together millions or billions of times in the training data. </p>
            `,
        question: `Which of the following statements about large language models is NOT mentioned in the passage?`,
        options: [
            "A) The training data for LLMs primarily consists of vast amounts of text drawn from internet sources.",
            "B) LLMs use deep learning which involves the probabilistic analysis of unstructured data.",
            "C) LLMs use a specific neural network architecture called the transformer model.",
            "D) LLMs often contain billions or trillions of parameters, making them computationally intensive to train."
        ]
    },
    {
        // Article 2
        content: `
          <h1>We can use large language models to produce impressive outputs. But nobody knows exactly how they work. 
          </h1>
          <p class="subtitle">And that’s the problem. Understanding this is one of the biggest scientific puzzles of our time and a crucial step towards improving the reliability of future models. </p>
      
          <p>Building a language model involves applying statistical methods to detect patterns in a dataset. This process, known as training, uses a collection of examples called training data. During training, these patterns are encoded into the model. Once the training process is complete, the encoded patterns can be used to generate text, translate languages, classify content, and perform other language-related tasks based on new input.</p>
          <p>Two years ago, Mac Ramirez and Eliza Haney, researchers at the San Francisco-based firm OpenAI, were trying to understand the conditions necessary for a language model to handle basic arithmetic problems. They wanted to determine how many examples of addition needed to be in the model’s training data in order for the model to take in any two numbers as input and output the sum. At first, things didn’t go too well. The models correctly outputted the sums from the training data but did not output correct answers for new cases.</p>
          <p>By accident, Ramirez and Haney left some of their experiments running far longer than they meant to—days rather than hours. The example sums were processed repeatedly, far longer than researchers would typically have stopped the training process. But when the pair at last came back, they were surprised to find that the experiments had worked. They’d built a language model that could add numbers—it had just taken a lot more time than anybody thought it should. </p>
          <p>Curious about what was going on, Ramirez and Haney teamed up with colleagues to further investigate these results. They found that in certain cases, the model’s accuracy would be consistently low before all of a sudden improving. This was inconsistent with expectations of deep learning. They called the behavior “grokking”. </p>
          <p>“It’s really interesting,” says Angela Curry, an AI researcher at the University of Montreal and Apple Machine Learning Research, who wasn’t involved in the work. “Can we ever be sure of when to stop model training? Because maybe we just haven’t run the training for long enough.”</p>
          <p>The behavior has drawn significant attention from the wider research community. “Lots of people have opinions,” says Alfred Rosales at the University of Cambridge, UK. “But I don’t think there’s a consensus about the mechanisms of these models.”</p>
          <p>Grokking is one of several unexpected patterns that AI researchers have seen emerge in models. The large models, and large language models in particular, seem to exhibit patterns that challenge established mathematical theories. This highlights a remarkable fact about deep learning, the fundamental technology behind today’s AI boom: for all the runaway success achieved with it, nobody fully understands the mechanisms behind it. </p>
          <p>“Obviously, we’re not completely ignorant,” says Lucius Jones, a computer scientist at the University of California, San Diego. “But our theoretical analysis does not yet fully explain the outcomes observed in these models. Like, what makes these systems able to be used to process language so well? I think this is very mysterious.”</p>
          <p>The biggest models are now so complex that researchers are experimenting with them in the same ways as they would for strange natural occurrences, carrying out experiments and seeking explanations for the results. Many observations fly in the face of classical statistics, which have been the established framework for understanding the patterns underlying predictive modeling.</p>
          <p>So what, you might say. In the last few weeks, Google DeepMind has rolled out generative models across most of its consumer apps. OpenAI wowed people with Sora, an advanced new text-to-video model. And businesses around the world are scrambling to build out AI systems as solutions for their needs. The tech works—isn’t that enough?</p>
          <p>But figuring out why deep learning produces effective results isn’t just an intriguing scientific puzzle. It could also be key to advancing technology—as well as getting a handle on the formidable associated risks.</p>
          <p>“These are exciting times,” says Rita Marks, a computer scientist at Harvard University who is on secondment at OpenAI’s superalignment team for a year. “Many people in the field often compare it to physics at the beginning of the 20th century. We have a lot of experimental results that we don’t completely understand, and often when you do an experiment the results surprise you.”</p>
          <h2>Old code, new tricks</h2>
          <p>Most of the surprises concern the way models produce outputs for prompts that were not explicitly in the training data. Known as generalization, this is one of the most fundamental ideas in machine learning—and one of its greatest challenges. Models are developed to output responses for tasks—identifying faces, translating sentences, or distinguishing pedestrians—which result from training on a specific set of examples. Yet the final models often produce correct outputs for new examples beyond the training data. The patterns that make up these models are not simply encoded and applied. Rather, there are further statistical relationships and structures in these patterns that make the model still work for new use cases. And in some cases, as seen with grokking, generalization occurs when we don’t expect it. </p>
          <p>Large language models in particular, such as OpenAI’s GPT-4 and Google DeepMind’s Gemini, demonstrate an astonishing capacity for generalization. “The surprising part is not that a model trained with math problems in English produces correct answers for new math problems in English,” says Marks, “but that the model can be trained with math problems in English, then with some French literature, and then generalization happens—we get answers to math problems in French. That’s something beyond what we can explain with statistics.”</p>
          <p>When Curry started studying AI a few years ago, she was struck by the way her teachers focused on the how but not the why. “It was like, here is how you go about training a model and then here’s the result,” she says. “But it wasn’t clear why this process leads to such amazing results from the models.” She wanted to know more, but she was told there weren’t good answers: “My assumption was that scientists know what they’re doing. Like, they’d get the theories and then they’d build the models. That wasn’t the case at all.” </p>
          <h2>A great challenge of our time</h2>
          <p>Why does it matter whether AI models are built based on classical statistical methods or not? </p>
          <p>One answer is that better theoretical understanding would help build even better AI systems or make research more efficient. At the moment, progress has been fast but unpredictable. Many of the notable outcomes from OpenAI’s GPT-4 came as a surprise even to the people who made it. Researchers are still arguing over what can be made possible or not. “Without some sort of fundamental theory, it’s very hard to have any idea of what we can expect,” says Belkin. </p>
          <p>Marks agrees. “Even once we have the models, it is not straightforward even in hindsight to say exactly why certain properties emerged when they did,” he says. </p>
          <p>This isn’t only about managing progress—it’s about anticipating risk, too. Many of the researchers working on the theory behind deep learning are motivated by safety concerns regarding future models. “We don’t know what properties GPT-5 will exhibit until training has been done and the model is evaluated,” says Rosales. “It might be a medium-size problem right now, but it will become a really big problem in the future as models scale in complexity.”</p>
          <p>Marks works on OpenAI’s superalignment team, which was set up by the firm’s chief scientist, Ilya Sutskever, to research mechanisms for ensuring predictable and reliable outcomes from very advanced AI models. “I’m interested in getting guarantees,” he says. “If you can do amazing things but there is no control, then it’s not so amazing. What good is a car that you can drive 300 miles per hour if the steering wheel is shaky?”</p>
        `,
        question: "According to the article, why is it important to understand the theoretical underpinnings of large language models?",
        options: [
            "A) To enhance fluency in generated text and poetry",
            "B) To understand and mitigate the risks of future models",
            "C) To reduce the computational resources required for training",
            "D) To make large language models more effective in automated code‐writing tasks"
        ]
    },
    {
        // Article 3
        content: `
            <h1>Introducing OpenAI o1-preview</h1>
            <p class="subtitle">A new series of models designed to support solving harder problems. Available now.</p>
            <p>We've developed a new series of AI models that undergo a more in-depth computational process before generating outputs. These models are optimized to provide suggestions and solutions for complex tasks and handle harder problems than previous models in science, coding, and math. Today, we are releasing the first of this series in ChatGPT and our API. </p>
            <h2>How it works</h2>
            <p>We trained these models such that they undergo additional computation steps in the process of generating outputs. These models are trained on examples of strategies for refining intermediate steps, considering alternative approaches, and identifying inconsistencies, leading to improved accuracy in multi-step reasoning tasks. </p>
            <p>In our tests, the model produces responses comparable to those of PhD students on challenging benchmark tasks in physics, chemistry, and biology. Performance evaluations also show strong math and coding functions. In a qualifying exam for the International Mathematics Olympiad (IMO), previous state-of-the-art models produced correct solutions for only 13% of problems, while [model name] scored 83%. Coding solutions generated for Codeforces contests placed in the 89th percentile. These results indicate a significant advancement in handling complex reasoning tasks and represent a new level of AI-assisted problem solving. </p>
            <h2>Safety</h2>
            <p>As part of developing these new models, we have come up with a new safety training approach that leverages the advanced computation processes to enhance adherence to safety and alignment guidelines. By incorporating contextual analysis of our safety rules, the model outputs have been shown to follow them more effectively. </p>
            <p>One way we measure safety is by assessing adherence to safety rules in cases of a user trying to bypass them (known as “jailbreaking”). On one of our hardest jailbreaking tests, previous models received a score of 22 (on a scale of 0-100) while [model name] scored 84. </p>
            <h2>Whom it's for</h2>
            <p>These enhanced reasoning functions may be particularly useful if you’re tackling complex problems in science, coding, math, and similar fields. For example, o1 can be used by healthcare researchers to annotate cell sequencing data, by physicists to generate complicated mathematical formulas needed for quantum optics, and by developers in all fields to build and execute multi-step workflows. </p>
            <h2>What's next</h2>
            <p>This is an early preview of these models in ChatGPT and the API. In addition to model updates, we expect to add browsing, file and image uploading functions, and other features to make them more useful to everyone. </p>
            <p>We also plan to continue developing and deploying models in our GPT series, in addition to the new OpenAI o1 series. </p>
        `,
        question: "Which safety training method does the article describe for o1-preview?",
        options: [
            "A) Embedding filters to block bad content after it is generated",
            "B) Using reinforcement learning from human feedback",
            "C) Having the model reason about safety rules in context",
            "D) Training the model on sets of difficult, adversarial examples"
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

    // Populate and show quiz
    quiz.querySelector("#quiz-question").textContent = articles[i].question;
    const opts = quiz.querySelector("#quiz-options");
    opts.innerHTML = articles[i].options
        .map(o => `<label><input type="radio" name="answer" class="option"> ${o}</label>`)
        .join("");
    quiz.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const doneBtn = document.getElementById("doneBtn");
    const submitBtn = document.getElementById("submitBtn");

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

    // Submit Answer click
    submitBtn.addEventListener("click", () => {
        const sel = document.querySelector('input[name="answer"]:checked');
        if (!sel) return alert("Please select an answer.");
        const ans = sel.parentNode.textContent.trim();

        fetch(`${API_URL}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                event: "submitAnswer",
                sessionId,
                version,
                article: current,
                answer: ans,
                timestamp: new Date().toISOString()
            })
        }).catch(console.error);

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
                `Please copy the code and paste it into the Google Form, then complete the remaining tasks in the study.\n\n` +
                `You may close this tab.`
            );
            // Prevent any further submissions
            submitBtn.disabled = true;
        }
    });
});