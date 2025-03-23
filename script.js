const quotes = [
    "Be the change that you wish to see in the world. – Mahatma Gandhi <br><br> वह बदलाव बनो जो तुम दुनिया में देखना चाहते हो। – महात्मा गांधी",
    "Injustice anywhere is a threat to justice everywhere. – Martin Luther King Jr. <br><br> कहीं भी अन्याय, हर जगह न्याय के लिए खतरा है। – मार्टिन लूथर किंग जूनियर",
    "A person who never made a mistake never tried anything new. – Albert Einstein <br><br> जिस व्यक्ति ने कभी गलती नहीं की, उसने कभी कुछ नया करने की कोशिश नहीं की। – अल्बर्ट आइंस्टीन",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha <br><br> अतीत में मत रहो, भविष्य का सपना मत देखो, अपने मन को वर्तमान क्षण पर केंद्रित करो। – गौतम बुद्ध",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill <br><br> सफलता अंतिम नहीं है, असफलता घातक नहीं है: मायने यह रखता है कि आप आगे बढ़ने का साहस रखते हैं। – विंस्टन चर्चिल",
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi <br><br> स्वयं को पाने का सबसे अच्छा तरीका है, खुद को दूसरों की सेवा में खो देना। – महात्मा गांधी",
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela <br><br> शिक्षा सबसे शक्तिशाली हथियार है जिसका उपयोग आप दुनिया को बदलने के लिए कर सकते हैं। – नेल्सन मंडेला",
    "An eye for an eye will only make the whole world blind. – Mahatma Gandhi <br><br> आंख के बदले आंख से पूरी दुनिया अंधी हो जाएगी। – महात्मा गांधी",
    "You must be the master of your own destiny. – Swami Vivekananda <br><br> तुम्हें अपने भाग्य का स्वामी स्वयं बनना होगा। – स्वामी विवेकानंद",
    "It does not matter how slowly you go as long as you do not stop. – Confucius <br><br> यह मायने नहीं रखता कि आप कितनी धीमी गति से चलते हैं, जब तक कि आप रुकते नहीं। – कन्फ्यूशियस"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[randomIndex]; // Changed to innerHTML
}
