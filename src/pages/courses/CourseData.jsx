// Comprehensive Course Data for HTML, CSS, and JavaScript Courses


// HTML COURSE DATA

export const htmlCourseData = {
  id: "html",
  courseId: "html",
  
  // Hero Section
  hero: {
    title: "HTML Course",
    subtitle: "Learn HTML from scratch with this comprehensive tutorial"
  },
  
  // Intro Text
  intro: "This is a beginner friendly video on HTML. Once you finish this section, proceed to the next page. Have fun!",
  
  // Page/Section Configuration
  pageList: ["Video", "FlashCards", "Quizes"],
  
  // Video Section
  video: {
    youtubeId: "qz0aGYrrlhU",
    title: "HTML Tutorial for Beginners"
  },
  
  // FlashCards Section
  flashcards: {
    // Use indices from the shared flashCardList (first 10 are HTML-related)
    startIndex: 0,
    endIndex: 9, // First 10 cards (0-9)
    // Alternative: you could specify specific indices if needed
    // cardIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  
  // Quiz Section
  quiz: {
    questions: [
      {
        question: "What does HTML stand for?",
        optionA: "Hyper Text Markup Language",
        optionB: "High Transfer Markup Language",
        optionC: "Hyperlinks and Text Management Language",
        optionD: "Home Tool Markup Language",
        correct: "A"
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        optionA: "<link>",
        optionB: "<a>",
        optionC: "<href>",
        optionD: "<url>",
        correct: "B"
      },
      {
        question: "Which tag is used to define the largest heading?",
        optionA: "<h1>",
        optionB: "<h6>",
        optionC: "<header>",
        optionD: "<head>",
        correct: "A"
      },
      {
        question: "Which tag is used to insert an image?",
        optionA: "<img>",
        optionB: "<image>",
        optionC: "<pic>",
        optionD: "<src>",
        correct: "A"
      },
      {
        question: "What attribute specifies the URL of an image?",
        optionA: "src",
        optionB: "href",
        optionC: "link",
        optionD: "url",
        correct: "A"
      },
      {
        question: "Which HTML tag is used to create an ordered list?",
        optionA: "<ul>",
        optionB: "<ol>",
        optionC: "<li>",
        optionD: "<list>",
        correct: "B"
      },
      {
        question: "Where should the <title> tag be placed?",
        optionA: "Inside the <body> tag",
        optionB: "Anywhere in the document",
        optionC: "Inside the <head> tag",
        optionD: "After the closing </html>",
        correct: "C"
      },
      {
        question: "Which tag is used to create a line break?",
        optionA: "<lb>",
        optionB: "<break>",
        optionC: "<br>",
        optionD: "<newline>",
        correct: "C"
      },
      {
        question: "Which tag is used to create a table row?",
        optionA: "<td>",
        optionB: "<th>",
        optionC: "<tr>",
        optionD: "<row>",
        correct: "C"
      },
      {
        question: "Which attribute opens a link in a new tab?",
        optionA: "target='_tab'",
        optionB: "target='_window'",
        optionC: "new='true'",
        optionD: "target='_blank'",
        correct: "D"
      }
    ]
  }
};



// CSS COURSE DATA

export const cssCourseData = {
  id: "css",
  courseId: "css",
  
  // Hero Section
  hero: {
    title: "CSS Course",
    subtitle: "Learn CSS from scratch and make beautiful, responsive websites"
  },
  
  // Intro Text
  intro: "This course will teach you CSS fundamentals including layouts, styling, and responsive design. Follow along with the video and practice with flashcards and quizzes!",
  
  // Page/Section Configuration
  pageList: ["Video", "FlashCards", "Quizes"],
  
  // Video Section
  video: {
    youtubeId: "OXGznpKZ_sA", // Popular CSS tutorial
    title: "CSS Full Course for Beginners"
  },
  
  // FlashCards Section
  flashcards: {
    // Cards 10-19 are CSS-related in the shared flashCardList
    startIndex: 10,
    endIndex: 19,
  },
  
  // Quiz Section
  quiz: {
    questions: [
      {
        question: "What does CSS stand for?",
        optionA: "Computer Style Sheets",
        optionB: "Cascading Style Sheets",
        optionC: "Creative Style System",
        optionD: "Colorful Style Sheets",
        correct: "B"
      },
      {
        question: "Which property is used to change the text color?",
        optionA: "text-color",
        optionB: "font-color",
        optionC: "color",
        optionD: "text-style",
        correct: "C"
      },
      {
        question: "What is the CSS Box Model?",
        optionA: "A way to create boxes",
        optionB: "The model that describes how elements are sized (content, padding, border, margin)",
        optionC: "A layout technique",
        optionD: "A way to group elements",
        correct: "B"
      },
      {
        question: "Which property is used to center text?",
        optionA: "align: center",
        optionB: "text-align: center",
        optionC: "center: true",
        optionD: "text-center",
        correct: "B"
      },
      {
        question: "What is the difference between margin and padding?",
        optionA: "Margin is inside, padding is outside",
        optionB: "Margin is outside the border, padding is inside the border",
        optionC: "They are the same",
        optionD: "Margin is for spacing, padding is for color",
        correct: "B"
      },
      {
        question: "Which display property creates a flex container?",
        optionA: "display: flexbox",
        optionB: "display: flex",
        optionC: "display: grid",
        optionD: "display: block",
        correct: "B"
      },
      {
        question: "What does position: absolute do?",
        optionA: "Positions element relative to the viewport",
        optionB: "Positions element relative to its nearest positioned ancestor",
        optionC: "Positions element in the center",
        optionD: "Positions element at the top",
        correct: "B"
      },
      {
        question: "Which selector targets an element with id='header'?",
        optionA: ".header",
        optionB: "#header",
        optionC: "header",
        optionD: "*header",
        correct: "B"
      },
      {
        question: "What does z-index control?",
        optionA: "The horizontal position",
        optionB: "The vertical position",
        optionC: "The stacking order of elements",
        optionD: "The size of elements",
        correct: "C"
      },
      {
        question: "Which property makes an element responsive?",
        optionA: "responsive: true",
        optionB: "width: 100%",
        optionC: "max-width: 100%",
        optionD: "Both B and C",
        correct: "D"
      }
    ]
  }
};



// JAVASCRIPT COURSE DATA

export const jsCourseData = {
  id: "javascript",
  courseId: "javascript",
  
  // Hero Section
  hero: {
    title: "JavaScript Course",
    subtitle: "Learn JavaScript and add interactivity to your websites"
  },
  
  // Intro Text
  intro: "Master JavaScript fundamentals including variables, functions, DOM manipulation, and events. Complete the video, practice with flashcards, and test your knowledge with quizzes!",
  
  // Page/Section Configuration
  pageList: ["Video", "FlashCards", "Quizes"],
  
  // Video Section
  video: {
    youtubeId: "PkZNo7MFNFg", // Popular JavaScript tutorial
    title: "JavaScript Full Course for Beginners"
  },
  
  // FlashCards Section
  flashcards: {
    // Cards 20-29 are JavaScript-related in the shared flashCardList
    startIndex: 20,
    endIndex: 29,
  },
  
  // Quiz Section
  quiz: {
    questions: [
      {
        question: "What is JavaScript primarily used for?",
        optionA: "Styling web pages",
        optionB: "Adding interactivity and dynamic behavior to web pages",
        optionC: "Creating HTML structure",
        optionD: "Database management",
        correct: "B"
      },
      {
        question: "What is the difference between let and const?",
        optionA: "let is for strings, const is for numbers",
        optionB: "let allows reassignment, const does not",
        optionC: "They are identical",
        optionD: "const is faster than let",
        correct: "B"
      },
      {
        question: "What is an array?",
        optionA: "A single value",
        optionB: "An ordered collection of elements",
        optionC: "A function",
        optionD: "A variable type",
        correct: "B"
      },
      {
        question: "What is the difference between == and ===?",
        optionA: "== compares value and type, === compares only value",
        optionB: "== compares only value, === compares value and type",
        optionC: "They are the same",
        optionD: "== is for numbers, === is for strings",
        correct: "B"
      },
      {
        question: "What does DOM stand for?",
        optionA: "Document Object Model",
        optionB: "Data Object Management",
        optionC: "Dynamic Object Method",
        optionD: "Document Order Model",
        correct: "A"
      },
      {
        question: "What is an event listener?",
        optionA: "A function that listens to music",
        optionB: "A procedure that waits for an event to occur",
        optionC: "A type of variable",
        optionD: "A CSS property",
        correct: "B"
      },
      {
        question: "What is the result of typeof null?",
        optionA: "null",
        optionB: "undefined",
        optionC: "object",
        optionD: "string",
        correct: "C"
      },
      {
        question: "What is a function?",
        optionA: "A variable",
        optionB: "A block of reusable code that performs a task",
        optionC: "An array",
        optionD: "A string",
        correct: "B"
      },
      {
        question: "What is the difference between null and undefined?",
        optionA: "They are the same",
        optionB: "undefined means declared but not assigned, null is an assigned empty value",
        optionC: "null is for numbers, undefined is for strings",
        optionD: "undefined is newer than null",
        correct: "B"
      },
      {
        question: "What does JSON stand for?",
        optionA: "JavaScript Object Notation",
        optionB: "Java Script Online Network",
        optionC: "JavaScript Order Number",
        optionD: "Just Simple Object Notation",
        correct: "A"
      }
    ]
  }
};
