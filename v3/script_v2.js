// Flask endpoint
const API_URL = "https://reading-logger-backend.onrender.com";
const sessionId = crypto.randomUUID().split('-')[0];
const version = 3; //rec-anthro

// define all 3 articles and their questions
const articles = [
    {
        // Article 1
        content: `
            <h1>Recommenders</h1>
            <p class="subtitle">A recommender uses machine learning by sifting through data in order to help predict, narrow down, and find what people are looking for among an exponentially growing number of options.</p>
            <h2>What Is a Recommender?</h2>
            <p>A recommender is a type of artificial intelligence, commonly associated with machine learning, that uses Big Data to suggest or recommend additional products to consumers. It bases its recommendations on various criteria, including past purchases, search history, demographic information, and other factors. recommenders are very helpful as they help users discover products and services they might otherwise have not found on their own. </p>
            <p>Through training, recommenders learn to understand the preferences, previous decisions, and characteristics of people and products by analyzing data gathered about their interactions. These include impressions, clicks, likes, and purchases. Because of their capability to predict consumer interests and desires on a highly personalized level, recommenders are a favorite with content and product providers. They are adept at directing consumers to just about any product or service that interests them, from books to videos to health classes to clothing. </p>
            <h2>Use Cases and Applications</h2>
            <h3>E-Commerce & Retail: Personalized Merchandising</h3>
            <p>Imagine that a user has already purchased a scarf. Why not offer a matching hat so the look will be complete? AI algorithms will often think along these lines when active in features such as “Complete the look” or “You might also like” sections of e-commerce platforms like Amazon, Walmart, Target, and many others.</p>
            <p>On average, an intelligent recommender brings in a 22.66% lift in conversion rates for web products.</p>
            <h3>Media & Entertainment: Personalized Content</h3>
            <p>AI recommender engines can observe and learn from an individual’s purchase behavior, noticing patterns that will help provide the user with the content suggestions that will most likely match his or her interests. This is what the ad recommenders in Google and Facebook are trying to do, or in Netflix when recommending movies and TV shows. </p>
            <h3>Personalized Banking</h3>
            <p>As a mass market product that is consumed digitally by millions, banking is a prime arena for recommenders. Knowing a customer’s detailed financial situation and their past preferences, coupled by data of thousands of similar users, makes a recommender quite powerful.</p>
            <h2>Types of Recommenders</h2>
            <p>While there are a vast number of recommendation algorithms and techniques, most fall into these broad categories: collaborative filtering, content filtering and context filtering.</p>
            <p><b>Collaborative filtering</b> recommenders suggest items (this is the filtering part) based on what it thinks many users like (this is the collaborative part). This approach notices similarities in how users interact with content: by observing previous interactions between users and items, recommender algorithms learn to predict future interests. These recommenders analyze and build an understanding of a user’s past behavior, such as items purchased previously or ratings given to those items and similar decisions by other users. It thinks that if some people have made similar decisions and purchases in the past, like a movie choice, then it seems likely that they will agree on additional future selections. For example, if a collaborative filtering recommender knows you and another user share similar tastes in movies, it might recommend a movie to you that it knows this other user already likes. </p>
            <p><b>Content filtering</b> recommenders, by contrast, focus on the attributes or features of an item (this is the content part) to select other items similar to the user’s preferences. This approach bases its recommendations on similarity of item and user features: by noting information about users and the items they interacted with (e.g. a user’s age, the category of a restaurant’s cuisine, the average review for a model), the recommender predicts the likelihood of a new interaction. For example, if a content filtering recommender sees you liked the movies You’ve Got Mail and Sleepless in Seattle, it might recommend another movie to you with the same genres and/or cast, such as Joe Versus the Volcano. </p>
            <p><b>Hybrid recommenders</b> combine the strengths of the approaches above for a more comprehensive recommendation system.</p>
            <p><b>Context filtering</b> tunes into users’ contextual information when going through the recommendation process. This approach considers a sequence of contextual user actions, plus the current context, to predict the probability of the next action. In the Netflix example, by being shown sequences for each user — the country, device, date, and time when they watched a movie — the model can predict what they might want to watch next. </p>
            `,
        questions: [
            {
                prompt: `Which of the following statements about recommenders is NOT mentioned in the passage?`,
                options: [
                    "A) Recommenders use data such as impressions, clicks, likes, and purchases for training.",
                    "B) Recommenders have been shown to boost e-commerce conversion rates",
                    "C) Recommenders are widely used in news apps to surface relevant articles.",
                    "D) Algorithms for recommenders include collaborative, content, and context filtering approaches."
                ]
            },
            {
                prompt: `According to the passage, what type of data does collaborative filtering primarily use?`,
                options: [
                    "A) Attributes of items, such as genre or category",
                    "B) Preference behavior from many users, such as ratings and purchases",
                    "C) Contextual details like time and location",
                    "D) Metadata about items only"
                ]
            },
            {
                prompt: `According to the passage, why is banking considered a strong use case for recommenders?`,
                options: [
                    "A) Banks need help with managing their employees",
                    "B) Banking is a digital mass-market product consumed by millions",
                    "C) Customers prefer random product suggestions",
                    "D) Financial products rarely require personalization"
                ]
            }
        ]
    },
    {
        // Article 2
        content: `
            <h1>How Today’s Recommenders Use Machine Learning to Cater to Your Every Whim</h1>
            <p class="subtitle">Recommenders use massive amounts of data to match you with content or match you with other users — or both.</p>
        
            <p>If you’ve ever used the Internet, you’ve encountered a recommender.</p>
            <p>Recommenders are smart engines used by companies to make predictions about what you might want to buy, watch, hear, read, or see online. They essentially power your everyday experiences on the Internet, strongly influencing what you buy on Amazon, hear on Spotify, watch on YouTube and Netflix, and consume in your social media feed.</p>
            <p>And, while they’ve been around for decades, modern recommenders are far more intelligent than the simple ones that tell you which products other users bought. (Though those systems are still alive and well.)</p>
            <p>Today’s recommenders from leading companies like Amazon, Google, Rakuten, TikTok, and others are highly sophisticated, driven by advanced machine learning. They’re able to increasingly personalize your experience online so you see, hear, and buy things that feel like they were chosen specifically for you. </p>
            <p>Whether they recommend products, offers, or content, all recommenders ultimately determine what makes you more or less compatible with an item or piece of content, according to Dwayne Goodwin, a professor of computer science at University of California San Diego.</p>
            <p>“More elaborate models leverage machine learning and understand temporal dynamics and changing user context,” said Goodwin. “But the core idea is the same: they use historical interactions to learn which users and items are similar to each other.”</p>
            <p>Recommenders look at massive amounts of data to match you with content or match you with other users — or both. With enough data, they’re typically able to find some combination of factors that match your behavior and preferences.</p>
            <h2>Amazon’s Amazing Recommender</h2>
            <p>One of the original and current leaders in recommenders is Amazon. For over 20 years, Amazon’s recommenders of various types have been suggesting products that consumers might like to buy. (The first paper the company published on the subject was way back in 2003.)</p>
            <p>Amazon’s recommenders originally relied on a method called collaborative filtering, where it made decisions based on the similarities between how users behave across a website. But as the company’s pool of user data grew and it sold millions of items to millions of people, its systems evolved to be content-based, matching users to products based on the features of the individual product.</p>
            <p>You see these recommenders at work when they make (often accurate) recommendations of what you should buy next on Amazon. However, it’s no longer like those early days. Then, they’d give you a simple recommendation solely on your purchase history. Today, you get tons of different types of recommendations from them based not only on what you’ve bought, but also on what you’ve viewed, what you’ve expressed interest in, and your digital shopping trends.</p>
            <p>With modern times come modern challenges. Modern recommenders like Amazon’s need to handle three big challenges, said Robyn Durham, vice president of applied science in Amazon’s International Emerging Stores division.</p>
            <p>The first is asymmetry, or relationships that run in only a single direction. Plenty of product recommendations are asymmetrical.: if you buy a phone, you recommend a phone case. Pretty easy. But it doesn’t go the other way: If you buy a phone case, you don’t want to recommend a phone.</p>
            <p>Amazon’s recommenders use graph neural networks (GNNs) to essentially read more context on relationships between products, so they can solve for asymmetrical product recommendations.</p>
            <p>Another major challenge is delayed feedback. This is a common problem that refers to the fact that the labels on data that recommenders learn from may change over time. Durham and their team solve this problem by using novel techniques to predict how likely it is that a label will change in the future, and weigh it accordingly.</p>
            <p>Finally, making recommenders more intelligent is a perennial challenge. One way Durham and their team are working on this is by estimating how uncertain the system is about its answers. For example, it may be considering a range of possible outcomes when predicting whether a customer will buy a product. The uncertainty estimate would express how confident each of these predictions are, which help to hone the system. </p>
            <h2>Predicting the Future</h2>
            <p>No matter what company you’re talking about, there’s a billion-dollar question lurking behind every single recommender in consumer life: How accurate is it? Because the more accurate a system is, the more money it brings in for the company with product sales, ad sales, or content subscriptions.</p>
            <p>You might think the highly accurate recommenders have some ‘secret sauce’ under the hood that makes them best-in-class. But that’s not actually the case, said Goodwin. Instead, they excel because the companies generate great data and have user bases that are highly receptive to recommendations.</p>
            <p>“There’s certainly a lot of science and engineering that goes into these things,” said Goodwin. “But you can’t make good recommendations without good data. Whereas with great data, you can make great recommendations surprisingly easily.”</p>
            <p>According to Dale Reyes, Walmart Chair of Marketing at the University of Arkansas, the sites and services we find most addicting are the ones pulling this off. “Amazon, Spotify, Facebook, Netflix, YouTube, Instagram, and TikTok are good examples of companies that are doing a great job.”</p>
            <p>Lately, the best recommenders don’t just rely on great data to provide great recommendations. The leading trend heating up this space is the same one heating up the tech world at large:</p>
            <p>Generative AI.</p>
            <p>Recommenders are beginning to come with conversational interfaces, so you can talk to them just like you’d talk to ChatGPT. These systems are not just more engaging; they can also explain their predictions to you.</p>
            <p>Like all things generative AI, it’s still early, with companies just starting to incorporate these features into product and content recommenders. But it’s no surprise that one of the earliest leaders is one of the original pioneers.</p>
            <p>In early 2024, a new generative AI shopping assistant called Rufus was introduced that recommends products for you simply through chat.</p>
            <p>Its maker? Amazon.</p>
        `,
        questions: [
            {
                prompt: "According to the passage, why do companies like Amazon emphasize gathering vast amounts of user data?",
                options: [
                    "A) Better data allows even simple algorithms to make strong recommendations.",
                    "B) It lets them avoid using any machine learning models.",
                    "C) Data collection is cheaper than server maintenance.",
                    "D) It replaces the need for any human oversight."
                ]
            },
            {
                prompt: "Which example of how recommendation systems may be used in daily life is mentioned in the passage?",
                options: [
                    "A) Deciding what stores open in your neighborhood",
                    "B) Suggesting movies on Netflix or products on Amazon",
                    "C) Regulating your internet speed",
                    "D) Blocking spam emails"
                ]
            },
            {
                prompt: "According to Goodwin, what is the key factor in making strong recommendations?",
                options: [
                    "A) The size of the engineering team",
                    "B) Having great data",
                    "C) Using fewer algorithms",
                    "D) Avoiding generative AI"
                ]
            }
        ]
    },
    {
        // Article 3
        content: `
            <h1>What’s a Recommender?</h1>
            <p class="subtitle">Deep learning-based recommenders are driving the growth of online giants.</p>
            <p>Search and you might find.</p>
            <p>Spend enough time online, however, and what you want will start finding you just when you need it.</p>
            <p>This is what’s driving the internet right now. They’re known as recommenders, and they’re among the most important applications today.</p>
            <p>Now, recommenders are racing to learn from vast quantities of data about the preferences of hundreds of millions of individual users.</p>
            <p>Online platforms already store lots of factual details: your name, your address, maybe your birthplace. But what the recommenders seek to understand better, perhaps, than the people who know you, are your preferences.</p>
            <h2>Virtuous Data Cycle</h2>
            <p>And the latest generation of deep learning-based recommenders provide a hand with marketing, helping companies boost click-through rates by better targeting users who will be interested in what they have to offer.</p>
            <p>Now the ability to collect this data, process it, use it to develop AI models and deploy those models to help you and others find what you want is among the largest competitive advantages possessed by the biggest internet companies.</p>
            <p>It’s driving a virtuous cycle — smarter technologies give better recommendations, recommendations which draw more customers and, ultimately, let these companies afford even smarter technology.</p>
            <p>That’s the business model. So how do these recommenders think?</p>
            <h2>Collecting Information</h2>
            <p>Recommenders observe and remember what you ask for, such as what movies you tell your video streaming app you want to see, ratings and reviews you’ve submitted, purchases you’ve made, and other actions you’ve taken in the past. </p>
            <p>Perhaps more importantly, they pay close attention to the choices you’ve made: what you click on and how you navigate. How long you watch a particular movie, for example. Or which ads you click on or which friends you interact with.</p>
            <p>All this information is carefully noted in vast data centers and compiled into complex, multidimensional tables that quickly balloon in size.</p>
            <p>These tables can be hundreds of terabytes large — and they’re growing all the time.</p>
            <p>That’s not so much because they collect vast amounts of information about any one individual, but because they gather a little bit of data from so many.</p>
            <p>In other words, these tables are sparse — most of the information these systems have memorized about most of us for most of these categories is zero.</p>
            <p>But, collectively these tables have a great deal of information on the preferences of a large number of people.</p>
            <p>And they guide recommenders in making informed decisions about what certain types of users might like. Because these systems remember so much data, from so many people, and are deployed at such an enormous scale, they’re able to bring in tens or hundreds of millions of dollars of business with even a small improvement in their ability to predict your next favorite thing.</p>
        `,
        questions: [
            {
                prompt: "What is the “virtuous cycle” described in the passage?",
                options: [
                    "A) Collecting less data leads to better privacy.",
                    "B) Technology improves recommendations, which attract more customers, enabling further technological improvements.",
                    "C) Users share data with each other directly.",
                    "D) Companies are replacing recommendation systems with manual reviews."
                ]
            },
            {
                prompt: "Why are the large “multidimensional tables” used by recommenders described as “sparse”?",
                options: [
                    "A) They delete old user records to save space.",
                    "B) They compress data using sparse matrix techniques.",
                    "C) They store only demographic information and no behavioral data.",
                    "D) They only record a small amount of data for each individual user, so most entries are zero."
                ]
            },
            {
                prompt: "According to the passage, why can even a small improvement in recommendation accuracy lead to huge profits?",
                options: [
                    "A) Because improvements can scale across millions of users",
                    "B) Because users are forced to buy recommended products",
                    "C) Because recommendations eliminate the need for competition",
                    "D) Because they reduce the cost of internet service"
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
