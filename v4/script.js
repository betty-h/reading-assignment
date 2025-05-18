// your Flask endpoint
const API_URL = "https://reading-logger-backend.onrender.com";
const sessionId = crypto.randomUUID().split('-')[0];
const version = 4; //rec-unanthro

// define all 3 articles and their questions
const articles = [
    {
        // Article 1
        content: `
            <h1>Recommendation Systems</h1>
            <p class="subtitle">A recommendation system is a type of machine learning model that uses statistical methods to analyze data for predicting, narrowing down, and finding what people are looking for among an exponentially growing number of options.</p>
            <h2>What Is a Recommendation System?</h2>
            <p>A recommendation system is an artificial intelligence or AI algorithm, usually associated with machine learning, using Big Data for suggestions or recommendations of products to consumers. These can be constructed based on various criteria, including past purchases, search history, demographic information, and other factors. Recommendation systems are highly useful as they can be used to introduce users to products and services they might otherwise not have found on their own. </p>
            <p>Recommendation systems undergo a training process to produce predictions of the preferences, previous decisions, and characteristics of people and products. This is done using data gathered about their interactions, including impressions, clicks, likes, and purchases. Because these systems generate predictions of consumer interests and desires on a highly personalized level, content and product providers strongly favor using recommendation systems. The tailored recommendations have been shown to effectively nudge consumers to just about any product or service that interests them, from books to videos to health classes to clothing. </p>
            <h2>Use Cases and Applications</h2>
            <h3>E-Commerce & Retail: Personalized Merchandising</h3>
            <p>Imagine that a user has already purchased a scarf. Why not offer a matching hat so the look will be complete? This feature is often implemented by means of AI-based algorithms as “Complete the look” or “You might also like” sections in e-commerce platforms like Amazon, Walmart, Target, and many others.</p>
            <p>On average, an intelligent recommendation system delivers a 22.66% lift in conversion rates for web products.</p>
            <h3>Media & Entertainment: Personalized Content</h3>
            <p>AI-based recommendation engines can be used to analyze an individual’s purchase behavior and detect patterns that will provide them with the content suggestions that will most likely match his or her interests. This is what Google and Facebook are doing when recommending ads, or what Netflix does behind the scenes when recommending movies and TV shows.</p>
            <h3>Personalized Banking</h3>
            <p>As a mass market product that is consumed digitally by millions, banking is prime for recommendations. Knowing a customer’s detailed financial situation and their past preferences, coupled by data of thousands of similar users, is quite powerful.</p>
            <h2>Types of Recommendation Systems</h2>
            <p>While there are a vast number of recommendation algorithms and techniques, most fall into these broad categories: collaborative filtering, content filtering and context filtering.</p>
            <p><b>Collaborative filtering</b> algorithms are used to generate recommendations for items (this is the filtering part). Such algorithms are built to aggregate and calculate metrics over preference information from many users (this is the collaborative part), focusing on similarity of user preference behavior: given previous interactions between users and items, recommendation algorithms produce predictions of future interactions. These recommendation systems are a statistical model of users’ past behaviors built from decisions by users, such as items purchased previously or ratings given to those items. The idea is that if some people have made similar decisions and purchases in the past, like movie choices, then there is a high probability that they will agree on additional future selections. For example, say you and another user share similar movie watching behavior. This data is fed into a collaborative filtering recommendation system which outputs a high similarity metric in your movie tastes. Then, future recommendations to you will likely be closely related to movies that the other user has already shown to like. </p>
            <p><b>Content filtering</b>, by contrast, uses data about the attributes or features of an item (this is the content part) to produce recommendations of other items similar to the user’s preferences. These algorithms calculate the similarity between items and user features: given information about a user and items they have interacted with (e.g. a user’s age, the category of a restaurant’s cuisine, the average review for a move), companies can predict the likelihood of a new interaction. For example, if you liked the movies You’ve Got Mail and Sleepless in Seattle, when this data is collected and fed to a content filtering recommendation system, your future recommendations may be of the same genres and/or cast, such as Joe Versus the Volcano. </p>
            <p><b>Hybrid recommendation systems</b> combine the advantages of the types of algorithms above for a more comprehensive recommendation system.</p>
            <p><b>Context filtering</b> incorporates users’ contextual information in the recommendation process. This approach involves collecting sequences of contextual user actions—what the user did together with contextual data such as the user’s location, device type, date, and time of the interaction—which serve as training data to build a model that outputs probabilities of future actions for a given context. In the Netflix example, each viewer’s viewing history along with contextual factors are inputs to the model. Once training is done, the model can be used to generate recommendations of what to watch next. </p>
            `,
        question: "Which of the following statements about recommendation systems is NOT mentioned in the passage?",
        options: [
            "A) Recommendation systems use data such as impressions, clicks, likes, and purchases for training.",
            "B) Recommendation systems have been shown to boost e-commerce conversion rates.",
            "C) Recommendation systems are widely used in news apps to surface relevant articles.",
            "D) Algorithms for recommendation systems include collaborative, content, and context filtering approaches."
        ]
    },
    {
        // Article 2
        content: `
          <h1>How Today’s Recommendation Systems Are Built With Machine Learning to Provide Personalized Experiences</h1>
          <p class="subtitle">Recommendation systems are trained with massive amounts of data in order to match you with content or match you with other users—or both.</p>
        
          <p>If you’ve ever used the Internet, you’ve encountered a recommendation system.</p>
          <p>Recommendation systems are complex sets of algorithms that companies use to make predictions about what you might want to buy, watch, hear, read, or see online. These systems play a central part in shaping your everyday experiences on the Internet, influencing the products shown on Amazon, music suggested on Spotify, the videos presented on YouTube and Netflix, and the content displayed in your social media feed.</p>
          <p>And, while these systems have been around for decades, modern recommendation system algorithms are far more sophisticated than simply showing which products other users bought. (Though systems like this are still around today.)</p>
          <p>Recommendation systems used today by leading companies like Amazon, Google, Rakuten, TikTok, and others are highly sophisticated models that employ advanced machine learning techniques. Companies are able to increasingly personalize your experience so that you see, hear, and buy things that feel like they were chosen specifically for you. </p>
          <p>Whether they generate recommendations for products, offers, or content, all recommendation systems ultimately are algorithms to predict what makes you more or less compatible with an item or piece of content, according to Dwayne Goodwin, a professor of computer science at University of California San Diego.</p>
          <p>“More elaborate recommendation systems are based on machine learning models that capture temporal dynamics and changing user context,” said Goodwin. “But the core idea is the same: historical interactions are used in order to make predictions of which users and items are similar to each other.”</p>
          <p>Recommendation systems are algorithms which analyze large datasets to identify patterns and show correlations of users with content, other users—or both. With enough data, these systems can be used to find some combination of factors that match your behavior and preferences.</p>
          <h2>Amazon’s Amazing Recommendation Systems</h2>
          <p>One of the original and current leaders in recommendation systems is Amazon. For over 20 years, Amazon has been using various types of recommendation systems to suggest products that consumers might like to buy. (The first paper the company published on the subject was way back in 2003.)</p>
          <p>Amazon’s recommendation systems started out using a method called collaborative filtering, which generates recommendations based on the similarities between how users behave across a website. But as the company’s pool of user data grew and it sold millions of items to millions of people, it began to pioneer the use of content-based recommendation systems, in which users are matched to products based on the features of the individual product. </p>
          <p>You see these recommendation systems being employed when Amazon makes (often accurate) recommendations on what you should buy next. However, it’s no longer like those early days. Then, you’d receive a simple recommendation solely on your purchase history. Today, you get tons of different types of recommendations based not only on what you’ve bought, but also on what you’ve viewed, what you’ve expressed interest in, and your digital shopping trends. </p>
          <p>With modern times come modern challenges. There are three big challenges with modern recommendation systems like Amazon’s, says Robyn Durham, vice president of applied science in Amazon’s International Emerging Stores division.</p>
          <p>The first is asymmetry, or relationships that run in only a single direction. Plenty of product recommendations are asymmetrical: if you buy a phone, you recommend a phone case. Pretty easy. But it doesn’t go the other way: If you buy a phone case, you don’t want to recommend a phone.</p>
          <p>Amazon’s team uses graph neural networks (GNNs) to enhance the computations of recommendation systems by providing additional context on the relationships between products, helping address asymmetrical product recommendations.</p>
          <p>Another major challenge is delayed feedback. This is a common problem that refers to the fact that the labels on data used to train recommendation systems may change over time. Durham and their team solve this problem by using novel techniques to predict how likely it is that a label will change in the future, and weigh it accordingly. </p>
          <p>Finally, improving the accuracy of recommendation systems is a perennial challenge. One way Durham and their team are addressing this is by estimating the uncertainty inherent in probability distributions returned by the system. For example, there might be a wide range of probability predictions on whether a customer buys a product; the uncertainty estimate expresses how certain one can be about those predicted probabilities, which enhances overall model accuracy.</p>
          <h2>Predicting the Future</h2>
          <p>No matter what company you’re talking about, there’s a billion-dollar question lurking behind every single recommendation system in consumer life: How accurate is it? Because the more accurate a system is, the more money the company running it makes from product sales, ad sales, or content subscriptions.</p>
          <p>You might think the companies with highly accurate recommendation systems have some ‘secret sauce’ under the hood that makes them best-in-class. But that’s not actually the case, said Goodwin. Instead, the companies doing this right excel at generating great data and have user bases that are highly receptive to recommendations.</p>
          <p>“There’s certainly a lot of science and engineering that goes into these things,” said Goodwin. “But you can’t make good recommendations without good data. Whereas with great data, you can make great recommendations surprisingly easily.”</p>
          <p>According to Dale Reyes, Walmart Chair of Marketing at the University of Arkansas, the sites and services we find most addicting are the ones pulling this off. “Amazon, Spotify, Facebook, Netflix, YouTube, Instagram, and TikTok are good examples of companies that are doing a great job.”</p>
          <p>Lately, the best recommendation systems aren’t just built with great data to provide great recommendations. The leading trend heating up this space is the same one heating up the tech world at large:</p>
          <p>Generative AI.</p>
          <p>Companies are beginning to incorporate conversational interfaces into their recommendation systems, so that you can use them just like you’d prompt ChatGPT. These systems are not just more interactive; they also provide explanations of the predictions.</p>
          <p>Like all things generative AI, it’s still early, with companies just starting to incorporate these features into product and content recommendations. But it’s no surprise that one of the earliest leaders is one of the original pioneers.</p>
          <p>In early 2024, a new generative AI shopping assistant called Rufus was launched to recommend products for users simply through chat.</p>
          <p>Its maker? Amazon.</p>
        `,
        question: "According to the article, why do companies like Amazon emphasize gathering vast amounts of user data?",
        options: [
            "A) Better data allows even simple algorithms to make strong recommendations.",
            "B) It lets them avoid using any machine learning models.",
            "C) Data collection is cheaper than server maintenance.",
            "D) It replaces the need for any human oversight."
        ]
    },
    {
        // Article 3
        content: `
            <h1>What’s a Recommendation System?</h1>
            <p class="subtitle">Online giants are leveraging deep learning-based recommendation systems to drive growth.</p>
            <p>Search and you might find.</p>
            <p>Spend enough time online, however, and what you want will start finding you just when you need it.</p>
            <p>This is a central part of how the internet works right now—the result of tools known as recommendation systems, which are among the most important applications today.</p>
            <p>Now, recommendation systems are rapidly improving in performance as vast quantities of data about the preferences of hundreds of millions of individual users are being used for training.</p>
            <p>Online platforms already store lots of factual details: your name, your address, maybe your birthplace. But the purpose of the recommendation system is to identify your preferences, better, perhaps, than people who know you.</p>
            <h2>Virtuous Data Cycle</h2>
            <p>And the latest generation of deep learning-based recommendation systems are powerful marketing tools. Companies use them to boost click-through rates by better targeting users who will be interested in what they have to offer.</p>
            <p>Now the ability to collect this data, process it, use it to develop AI models and deploy those models to help you and others find what you want is among the largest competitive advantages possessed by the biggest internet companies.</p>
            <p>It’s driving a virtuous cycle — advancements in technology improve recommendations, recommendations which draw more customers and, ultimately, let these companies afford even better technology.</p>
            <p>That’s the business model. So how does this technology work?</p>
            <h2>Collecting Information</h2>
            <p>Recommendation systems are tools for collecting information and recording your past activity, such as what movies you select from your video streaming app, ratings and reviews you’ve submitted, purchases you’ve made, and other actions you’ve taken in the past. </p>
            <p>Perhaps more importantly, these systems are used to log choices you’ve made: what you click on and how you navigate. How long you watch a particular movie, for example. Or which ads you click on or which friends you interact with.</p>
            <p>All this information is streamed into vast data centers and compiled into complex, multidimensional tables that quickly balloon in size.</p>
            <p>These tables can be hundreds of terabytes large — and get larger all the time.</p>
            <p>That’s not so much because vast amounts of data are collected from any one individual, but because a little bit of data is collected from so many.</p>
            <p>In other words, these tables are sparse — most of the information most of these services have on most of us for most of these categories is zero.</p>
            <p>But, collectively the data in these tables can be analyzed to provide a great deal of information on the preferences of a large number of people.</p>
            <p>And these insights allow companies to make informed decisions about what certain types of users might like. Because these systems are built from so much data, from so many people, and are deployed at such an enormous scale, even a small improvement in the alignment of recommendations with user preferences can generate tens or hundreds of millions of dollars in business.</p>
         `,
        question: "Why are the large “multidimensional tables” used by recommendation systems described as “sparse”?",
        options: [
            "A) They delete old user records to save space.",
            "B) They compress data using sparse matrix techniques.",
            "C) They store only demographic information and no behavioral data.",
            "D) They only record a small amount of data for each individual user, so most entries are zero."
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
                `Please copy the code it into the Google Form, then complete the remaining tasks in the study.\n\n` +
                `You may close this tab.`
            );
            // Prevent any further submissions
            submitBtn.disabled = true;
        }
    });
});