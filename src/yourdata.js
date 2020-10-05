export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  name: "Jason Junio",
  headerTagline: [
    "Hi! ",
    "👋",

    //Line 1 For Header
    " I'm Jason Junio.",
    //Line 2 For Header
    "Web Developer ",
    //Line 3 For Header
    "from Montreal, Canada",
  ],
  //Contact Email
  contactEmail: "jjjunio@gmail.com",
  // Add Your About Text Here
  abouttext: "",
  aboutImage:
    "https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  // Change Projects Here
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "FoodBox", //Project Title - Add Your Project Title Here
      service: "Web App", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1569246294372-ed319c674f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/jjjunio/FoodBox",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Netflix Clone",
      service: "Website Development",
      imageSrc:
        "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      url: "https://netflix-clone-solokrew.web.app/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Amazon Clone",
      service: "Web Development",
      imageSrc:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
      url: "https://clone-a6f70.web.app/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Interview Scheduler",
      service: "Web App",
      imageSrc:
        "https://github.com/jjjunio/scheduler/blob/master/docs/InterviewSchedulerUI.jpeg?raw=true",
      url: "https://github.com/jjjunio/scheduler",
    },

    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
  ],
  social: [
    // Add Or Remove The Link Accordingly
    {
      name: "Github",
      url: "https://github.com/jjjunio",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jjjunio",
      icon: "linkedin",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/JJJunio",
      icon: "behance",
    },
    {
      name: "Resume",
      url: "https://jjjunio.github.io/resume/",
      icon: null,
    },
  ],
};
