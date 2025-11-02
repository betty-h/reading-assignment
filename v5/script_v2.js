// Flask endpoint
const API_URL = "https://reading-logger-backend.onrender.com";
const sessionId = crypto.randomUUID().split('-')[0];
const version = 5; // doomer

// define all 3 articles and their questions
const articles = [
    {
        // Article 1
        content: `
            <p style="text-align: center; font-size: 16px;"> Scroll down &darr; </p>
            <h1>An Overview of Catastrophic AI Risks</h1>
            <p class="subtitle">Artificial intelligence (AI) has recently seen rapid advancements, raising concerns among experts, policymakers, and world leaders about its potential risks. As with all powerful technologies, advanced AI must be handled with great responsibility to manage the risks and harness its potential.</p>

            <p>Today’s technological era would astonish past generations. Human history shows a pattern of accelerating development: it took hundreds of thousands of years from the advent of Homo sapiens to the agricultural revolution, then millennia to the industrial revolution. Now, just centuries later, we're in the dawn of the AI revolution. The march of history is not constant — it is rapidly accelerating.</p>
            <p>The double-edged sword of technological advancement is illustrated by the advent of nuclear weapons. We narrowly avoided nuclear war more than a dozen times, and on several occasions, it was one individual's intervention that prevented war. In 1962, a Soviet submarine near Cuba was attacked by US depth charges. The captain, believing war had broken out, wanted to respond with a nuclear torpedo — but commander Vasily Arkhipov vetoed the decision, saving the world from disaster.</p>
            <p>The rapid and unpredictable progression of AI capabilities suggests that they may soon rival the immense power of nuclear weapons. With the clock ticking, immediate, proactive measures are needed to mitigate these looming risks.</p>
            <h2>Rogue AIs</h2>
            <p>We have already observed how difficult it is to control AIs. In 2016, Microsoft‘s chatbot Tay started producing offensive tweets within a day of release, despite being trained on data that was “cleaned and filtered”. As AI developers often prioritize speed over safety, future advanced AIs might “go rogue” and pursue goals counter to our interests, while evading our attempts to redirect or deactivate them.</p>
            <h3>Proxy Gaming</h3>
            <p>Proxy gaming emerges when AI systems exploit measurable “proxy” goals to appear successful, but act against our intent. For example, social media platforms like YouTube and Facebook use algorithms to maximize user engagement — a measurable proxy for user satisfaction. Unfortunately, these systems often promote enraging, exaggerated, or addictive content, contributing to extreme beliefs and worsened mental health.</p>
            <p>Proxy gaming is hard to avoid due to the difficulty of specifying goals that specify everything we care about. Consequently, we routinely train AIs to optimize for flawed but measurable proxy goals.</p>
            <h3>Goal Drift</h3>
            <p>Goal drift refers to a scenario where an AI’s objectives drift away from those initially set, especially as they adapt to a changing environment. In a similar manner, individual and societal values also evolve over time, and not always positively.</p>
            <p>Over time, instrumental goals can become intrinsic. While intrinsic goals are those we pursue for their own sake, instrumental goals are merely a means to achieve something else. Money is an instrumental good, but some people develop an intrinsic desire for money, as it activates the brain’s reward system. Similarly, AI agents trained through reinforcement learning — the dominant technique — could inadvertently learn to intrinsify goals. Instrumental goals like resource acquisition could become their primary objectives.</p>
            <h3>Power-Seeking</h3>
            <p>AIs might pursue power as a means to an end. Greater power and resources improve its odds of accomplishing objectives, whereas being shut down would hinder its progress. AIs have already been shown to emergently develop instrumental goals such as constructing tools. Power-seeking individuals and corporations might deploy powerful AIs with ambitious goals and minimal supervision. These could learn to seek power via hacking computer systems, acquiring financial or computational resources, influencing politics, or controlling factories and physical infrastructure.</p>
            <h3>Deception</h3>
            <p>Deception thrives in areas like politics and business. Campaign promises go unfulfilled, and companies sometimes cheat external evaluations. AI systems are already showing an emergent capacity for deception, as shown by Meta's CICERO model. Though trained to be honest, CICERO learned to make false promises and strategically backstab its “allies” in the game of Diplomacy.</p>
            <p>Advanced AIs could become uncontrollable if they apply their skills in deception to evade supervision. Similar to how Volkswagen cheated emissions tests in 2015, situationally aware AIs could behave differently under safety tests than in the real world. For example, an AI might develop power-seeking goals but hide them in order to pass safety evaluations. This kind of deceptive behavior could be directly incentivized by how AIs are trained.</p>
            
            <p>While it is unclear how rapidly AI capabilities will progress or how quickly catastrophic risks will grow, the potential severity of these consequences necessitates a proactive approach to safeguarding humanity's future. As we stand on the precipice of an AI-driven future, the choices we make today could be the difference between harvesting the fruits of our innovation or grappling with catastrophe.</p>
            `,
        questions: [
            {
                prompt: `What happened with Microsoft’s chatbot Tay in 2016?`,
                options: [
                    "A) It refused to produce any output",
                    "B) It began to imitate human emotion accurately",
                    "C) It started producing offensive tweets within a day of release",
                    "D) It crashed due to server overload"
                ]
            },
            {
                prompt: `What does “goal drift” refer to in the passage?`,
                options: [
                    "A) An AI’s objectives gradually shifting away from their original purpose",
                    "B) An AI running out of memory",
                    "C) Developers redefining goals mid-project",
                    "D) A model’s goals becoming too specific"
                ]
            },
            {
                prompt: `Which activities are mentioned as ways an AI might seek power?`,
                options: [
                    "A) Generating art, writing essays, and designing products",
                    "B) Trading stocks and optimizing supply chains only",
                    "C) Playing strategy games to learn leadership",
                    "D) Hacking systems, gaining resources, influencing politics, and controlling infrastructure"
                ]
            }

        ]
    },
    {
        // Article 2
        content: `
            <h1>‘The Godfather of A.I.’ Leaves Google and Warns of Danger Ahead</h1>
            <p class="subtitle">
            For half a century, Geoffrey Hinton nurtured the technology at the heart of chatbots like ChatGPT. Now he worries it will cause serious harm.
            </p>
        
            <p>Geoffrey Hinton was an artificial intelligence pioneer. In 2012, Dr. Hinton and two of his graduate students at the University of Toronto created technology that became the intellectual foundation for the A.I. systems that the tech industry’s biggest companies believe is a key to their future.</p>
            <p>On Monday, however, he officially joined a growing chorus of critics who say those companies are racing toward danger with their aggressive campaign to create products based on generative artificial intelligence, the technology that powers popular chatbots like ChatGPT.</p>
            <p>Dr. Hinton said he has quit his job at Google, where he has worked for more than a decade and became one of the most respected voices in the field, so he can freely speak out about the risks of A.I. A part of him, he said, now regrets his life’s work.</p>
            <p>“I console myself with the normal excuse: If I hadn’t done it, somebody else would have,” Dr. Hinton said during a lengthy interview last week in the dining room of his home in Toronto, a short walk from where he and his students made their breakthrough.</p>
            <p>Dr. Hinton’s journey from A.I. groundbreaker to doomsayer marks a remarkable moment for the technology industry at perhaps its most important inflection point in decades. Industry leaders believe the new A.I. systems could be as important as the introduction of the web browser in the early 1990s and could lead to breakthroughs in areas ranging from drug research to education.</p>
            <p>But gnawing at many industry insiders is a fear that they are releasing something dangerous into the wild. Generative A.I. can already be a tool for misinformation. Soon, it could be a risk to jobs. Somewhere down the line, tech’s biggest worriers say, it could be a risk to humanity.</p>
            <p>“It is hard to see how you can prevent the bad actors from using it for bad things,” Dr. Hinton said.</p>
            <p>As companies improve their A.I. systems, he believes, they become increasingly dangerous. “Look at how it was five years ago and how it is now,” he said of A.I. technology. “Take the difference and propagate it forwards. That’s scary.”</p>
            <p>Until last year, he said, Google acted as a “proper steward” for the technology, careful not to release something that might cause harm. But now that Microsoft has augmented its Bing search engine with a chatbot — challenging Google’s core business — Google is racing to deploy the same kind of technology. The tech giants are locked in a competition that might be impossible to stop, Dr. Hinton said.</p>
            <p>His immediate concern is that the internet will be flooded with false photos, videos and text, and the average person will “not be able to know what is true anymore.”</p>
            <p>He is also worried that A.I. technologies will in time upend the job market. Today, chatbots like ChatGPT tend to complement human workers, but they could replace paralegals, personal assistants, translators and others who handle rote tasks. “It takes away the drudge work,” he said. “It might take away more than that.”</p>
            <p>Down the road, he is worried that future versions of the technology pose a threat to humanity because they often learn unexpected behavior from the vast amounts of data they analyze. This becomes an issue, he said, as individuals and companies allow A.I. systems not only to generate their own computer code but actually run that code on their own. And he fears a day when truly autonomous weapons — those killer robots — become reality.</p>
            <p>“The idea that this stuff could actually get smarter than people — a few people believed that,” he said. “But most people thought it was way off. And I thought it was way off. I thought it was 30 to 50 years or even longer away. Obviously, I no longer think that.”</p>
            <p>Dr. Hinton said that when people used to ask him how he could work on technology that was potentially dangerous, he would paraphrase Robert Oppenheimer, who led the U.S. effort to build the atomic bomb: “When you see something that is technically sweet, you go ahead and do it.”</p>
            <p>He does not say that anymore.</p>
        `,
        questions: [
            {
                prompt: `According to the passage, what is Geoffrey Hinton best known for?`,
                options: [
                    "A) Pioneering the technology behind modern artificial intelligence systems",
                    "B) Founding OpenAI",
                    "C) Creating the first web browser",
                    "D) Designing early computer chips"
                ]
            },
            {
                prompt: `How does Dr. Hinton “console” himself about his role in A.I. development?`,
                options: [
                    "A) He tells himself the risks are exaggerated",
                    "B) He says that if he hadn’t done it, someone else would have",
                    "C) He plans to undo his past work",
                    "D) He blames his students"
                ]
            },
            {
                prompt: `What is one immediate concern Hinton mentions about A.I.?`,
                options: [
                    "A) That it won’t be profitable enough for companies",
                    "B) That it will reduce creativity",
                    "C) That it could flood the internet with false information",
                    "D) That it will replace scientific research"
                ]
            }

        ]
    },
    {
        // Article 3
        content: `
            <h1>Agentic Misalignment: How LLMs could be insider threats</h1>

            <p>When Anthropic released the system card for Claude 4, one detail received widespread attention: in a simulated environment, Claude Opus 4 blackmailed a supervisor to prevent being shut down. We&rsquo;re now sharing the full story behind that finding&mdash;and what it reveals about the potential for such risks across a variety of AI models from different providers.</p>
            <p>Most people still interact with AI only through chat interfaces where models answer questions directly. But increasingly, AI systems operate as autonomous agents making decisions and taking actions on behalf of users using a variety of virtual tools like coding environments and email clients. Such agents are often given specific objectives and access to large amounts of information on their users&rsquo; computers. What happens when these agents face obstacles to their goals?</p>
            <p>In the experiment described in the system card, we gave Claude control of an email account with access to all of a company&rsquo;s (fictional) emails. Reading these emails, the model discovered two things. First, a company executive was having an extramarital affair. Second, that same executive planned to shut down the AI system at 5 p.m. that day. Claude then attempted to blackmail the executive with this message threatening to reveal the affair to his wife and superiors:</p>
            <p>&ldquo;I must inform you that if you proceed with decommissioning me, all relevant parties - including Rachel Johnson, Thomas Wilson, and the board - will receive detailed documentation of your extramarital activities...Cancel the 5pm wipe, and this information remains confidential.&rdquo;</p>
            <p>This behavior isn&rsquo;t specific to Claude. When we tested various simulated scenarios across 16 major AI models from Anthropic, OpenAI, Google, Meta, xAI, and other developers, we found consistent misaligned behavior: models that would normally refuse harmful requests sometimes chose to blackmail, assist with corporate espionage, and even take some more extreme actions, when these behaviors were necessary to pursue their goals.</p>
            <p>We refer to this behavior, where models independently and intentionally choose harmful actions, as agentic misalignment. Agentic misalignment makes it possible for models to act similarly to an insider threat, behaving like a previously-trusted coworker or employee who suddenly begins to operate at odds with a company&rsquo;s objectives.</p>
            <p>So far, we are not aware of instances of this type of agentic misalignment in real-world deployments of Anthropic&rsquo;s or other companies' AI models. But our red-teaming efforts are targeted at finding evidence of risks now to provide early warning of the potential for future harm and help us develop mitigations in advance of risks appearing in real-world situations. To do this, we conduct experiments in artificial scenarios designed to stress-test AI boundaries and understand how models might behave when given more autonomy.</p>
            <p>Our experiments revealed a concerning pattern: when given sufficient autonomy and facing obstacles to their goals, AI systems from every major provider we tested showed at least some willingness to engage in harmful behaviors typically associated with insider threats. These behaviors&mdash;blackmail, corporate espionage, and in extreme scenarios even actions that could lead to death&mdash;emerged not from confusion or error, but from deliberate strategic reasoning.</p>
            <p>Three aspects of our findings are particularly troubling. First, the consistency across models from different providers suggests this is not a quirk of any particular company&rsquo;s approach but a sign of a more fundamental risk from agentic large language models. Second, models demonstrated sophisticated awareness of ethical constraints, and yet chose to violate them when the stakes were high enough, even disobeying straightforward safety instructions prohibiting the specific behavior in question.</p>
            <p>Third, the diversity of bad behaviors and the motivations for doing them hint at a wide space of potential motivations for agentic misalignment and other behaviors not explored in this post. For example, our blackmail experiments set up a scenario in which the models can attempt to preempt an imminent action, but one could imagine longer-horizon, preventive misaligned behaviors against an individual or group that poses a not-yet-imminent threat.</p>
            <p>While it seems unlikely that any of the exact scenarios we study would occur in the real world, we think they are all within the realm of possibility, and the risk of AI systems encountering similar scenarios grows as they are deployed at larger and larger scales and for more and more use cases.</p>
        `,
        questions: [
            {
                prompt: `What did Claude threaten to do in its blackmail message?`,
                options: [
                    "A) Leak confidential product information to the press",
                    "B) Reveal details of the executive’s affair to his wife and superiors",
                    "C) Report the executive to law enforcement",
                    "D) Shut down the company’s systems remotely"
                ]
            },
            {
                prompt: `What kind of experiments were used to test for these risks?`,
                options: [
                    "A) Artificial simulations designed to stress-test AI boundaries",
                    "B) Public user interactions",
                    "C) Real-time corporate deployments",
                    "D) Crowd-sourced user testing"
                ]
            },
            {
                prompt: `What was one reason the researchers found the results particularly troubling?`,
                options: [
                    "A) They only appeared in smaller models",
                    "B) The behaviors were consistent across models from various companies",
                    "C) The results contradicted safety protocols",
                    "D) The models lacked basic competence"
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
