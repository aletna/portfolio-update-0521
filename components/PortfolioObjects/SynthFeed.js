const SynthFeed = {
  id: "synthfeed",
  title: "SynthFeed",
  caption: "Full stack development",
  description: "A digital feedback service for music producers, where upcoming producers can get targeted and detailed feedback on creative and technical aspects from professional artists. ",
  // mainImage: "/synthfeed.png",
  mainImage: "https://firebasestorage.googleapis.com/v0/b/dennis-portfolio-942f1.appspot.com/o/synthfeedCropped.png?alt=media&token=f0c705c2-c405-4222-a49d-aaf11ef12ca2",
  abstract:
    "SynthFeed is a digital feedback service for music producers, where upcoming producers can get targeted and detailed feedback on creative and technical aspects from professional artists. These professional artists have gained valuable experience while growing their fanbase through millions of streams spanning many different genres. As of now, the artists providing feedback on SynthFeed combined have accumulated multiple billion streams across different streaming platforms. The feedback report consists of feedback on 6 different criteria and one overall comment alongside ratings for each of the points between 0 and 100. If the user does not get a detailed feedback report within 72 hours of the submission, then the money will be refunded in terms of platform credits.",
  links: [
    { id: 1, title: "Live Web App", link: "https://www.synthfeed.com" },
    {
      id: 2,
      title: "Sample Feedback Report",
      link: "https://synthfeed.com/feedback-report-demo",
    },
    {
      id:3, title: "Survey video explaining SynthFeed",
      link: "https://www.youtube.com/watch?v=nTTJCD2ewSk",
    },
    { id:4, title: "Emotional video ad", link: "https://youtu.be/j6YCAWXYDj8" },
    {
      id:5, title: "How SynthFeed Works",
      link: "https://synthfeed.com/how-it-works",
    },
    { id:6, title: "Instagram", link: "https://www.instagram.com/synth_feed/" },
    {
      id:7, title: "Press release",
      link:
        "https://dottedmusic.com/2020/news/synthfeed-get-feedback-from-professionals/",
    },
  ],
  myRole:
    "I wrote the entire code for SynthFeed myself after coordinating several rounds of design iterations with my Co-Founder. I used Vue.js coupled with the Vuetify Material UI framework to build the client side. The backend for SynthFeed includes authentication services, mp3 storage and players, various levels of user access and analytics for users to keep track of their progress. It is powered by Node.js and Google Cloud / Firebase services, like e.g. their serverless Cloud Functions.",
};
export default SynthFeed;
