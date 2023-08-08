// create array of question objects 

const quizQuestions = [
    {
        question: 'In "The Lord of the Rings," what is the name of Gandalf\'s sword?',
        correctAnswer: 'Glamdring',
        answers: ['Andúril', 'Sting', 'Glamdring', 'Orcrist'],
        image: 'https://c4.wallpaperflare.com/wallpaper/205/284/843/movies-the-lord-of-the-rings-the-hobbit-the-hobbit-the-desolation-of-smaug-wallpaper-preview.jpg'
    },
    {
        question: 'What is the name of the fictional continent in the "Game of Thrones" series?',
        correctAnswer: 'Westeros',
        answers: ['Westeros', 'Middle-earth', 'Narnia', 'Azeroth'],
        image: 'https://c4.wallpaperflare.com/wallpaper/130/155/832/tv-show-game-of-thrones-night-king-game-of-thrones-hd-wallpaper-preview.jpg'
    },
    {
        question: 'In the "Harry Potter" series, what is the name of the Three-Headed Dog that guards the Philosopher\'s Stone?',
        correctAnswer: 'Fluffy',
        answers: ['Fluffy', 'Buckbeak', 'Norbert', 'Aragog'],
        image: 'https://c4.wallpaperflare.com/wallpaper/494/399/714/harry-potter-hogwarts-castle-wallpaper-preview.jpg'
    },
    {
        question: 'What is the primary power source for Iron Man\'s suit?',
        correctAnswer: 'Arc Reactor',
        answers: ['Vibranium', 'Arc Reactor', 'Unobtainium', 'Promethium'],
        image: 'https://c4.wallpaperflare.com/wallpaper/857/457/204/iron-man-artwork-comic-books-superhero-wallpaper-preview.jpg'
    },
    {
        question: 'Which element is the basis of all organic molecules in the "Mass Effect" series?',
        correctAnswer: 'Carbon',
        answers: ['Element Zero', 'Carbon', 'Silicon', 'Hydrogen'],
        image: 'https://c4.wallpaperflare.com/wallpaper/277/27/798/mass-effect-mass-effect-2-galaxy-space-wallpaper-preview.jpg'
    },
    {
        question: 'In "Star Trek," what is the name of the Vulcan greeting gesture?',
        correctAnswer: 'Live Long and Prosper',
        answers: ['Warp Jump', 'Light Speed Salute', 'Live Long and Prosper', 'Vulcan Salute'],
        image: 'https://c4.wallpaperflare.com/wallpaper/539/674/392/star-trek-movies-wallpaper-preview.jpg'
    },
    {
        question: 'What is the name of the AI assistant in the "Halo" video game series?',
        correctAnswer: 'Cortana',
        answers: ['Siri', 'Cortana', 'Jarvis', 'Alexa'],
        image: 'https://c4.wallpaperflare.com/wallpaper/454/418/529/halo-infinite-4k-wallpaper-preview.jpg'
    },
    {
        question: 'In the "Star Wars" universe, what is the name of Han Solo\'s ship?',
        correctAnswer: 'Millennium Falcon',
        answers: ['Enterprise', 'Serenity', 'Millennium Falcon', 'TARDIS'],
        image: 'https://c4.wallpaperflare.com/wallpaper/343/650/487/star-wars-wallpaper-preview.jpg'
    },
    {
        question: 'What is the main character\'s name in "The Legend of Zelda" video game series?',
        correctAnswer: 'Link',
        answers: ['Link', 'Mario', 'Samus', 'Ganondorf'],
        image: 'https://c4.wallpaperflare.com/wallpaper/545/297/152/fantasy-art-painting-the-legend-of-zelda-moon-wallpaper-preview.jpg'
    },
    {
        question: 'Which planet is known as "The Red Planet" in our solar system?',
        correctAnswer: 'Mars',
        answers: ['Jupiter', 'Mars', 'Saturn', 'Neptune'],
        image: 'https://c4.wallpaperflare.com/wallpaper/30/513/155/space-planet-mars-crater-wallpaper-preview.jpg'
    },
    {
        question: 'In "Star Wars," what is the name of the crime lord who placed a bounty on Han Solo in "The Empire Strikes Back"?',
        correctAnswer: 'Jabba the Hutt',
        answers: ['Boba Fett', 'Emperor Palpatine', 'Darth Vader', 'Jabba the Hutt'],
        image: 'https://c4.wallpaperflare.com/wallpaper/261/120/1002/solo-a-star-wars-story-alden-ehrenreich-han-solo-chewbacca-wallpaper-preview.jpg'
    },
    {
        question: 'In the movie "The Matrix," what color pill does Morpheus offer Neo, which will determine whether he stays in the simulated reality or learns the truth about the Matrix?',
        correctAnswer: 'Red pill',
        answers: ['Blue pill', 'Red pill', 'Green pill', 'Yellow pill'],
        image: 'https://c4.wallpaperflare.com/wallpaper/80/122/493/matrix-desktop-downloads-wallpaper-preview.jpg'
    },
    {
        question: 'In the movie "Back to the Future," what speed does the DeLorean time machine need to reach in order to travel through time?',
        correctAnswer: '88 miles per hour',
        answers: ['65 miles per hour', '55 miles per hour', '75 miles per hour', '88 miles per hour'],
        image: 'https://c4.wallpaperflare.com/wallpaper/624/182/340/movies-car-delorean-back-to-the-future-wallpaper-preview.jpg'
    }
];


// let quizIndex = 0;
let indexUsed = [];

// initialise user score 
let userScore = 0;

//  initialise quizIndex 
let quizIndex; 

// assign HTML elements to variables 
const questionElement = document.querySelector('#question-container');
const answerElements = document.querySelectorAll('.answer-button');
const resetBtn = document.querySelector('#reset-btn');
const image = document.querySelector('.image-container');

// generate random number - used as question index
const randomNumber = () => {
    const number = Math.floor(Math.random() * quizQuestions.length);
    if (!indexUsed.includes(number)) {
        indexUsed.push(number);
        const lastIndex = indexUsed.length - 1;
        return indexUsed[lastIndex];

    }
    if (indexUsed.includes(number)) {
       return randomNumber();
    }
};

// display question and answers function
const displayQuestion = () => {
    quizIndex = randomNumber();
    questionElement.innerHTML = quizQuestions[quizIndex].question;

    quizQuestions[quizIndex].answers.forEach((answers, index) => {
        answerElements[index].innerHTML = answers;
    });

    image.style.backgroundImage = `url(${quizQuestions[quizIndex].image})`;
};

// check answer function
const checkAnswer = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
        userScore++
    }
};

// event handler - answer click events 
const eventHandler = e => {
    const selectedAnswer = e.target.innerHTML;
    const correctAnswer = quizQuestions[quizIndex].correctAnswer;

    checkAnswer(selectedAnswer, correctAnswer);

    if (indexUsed.length < quizQuestions.length) {
        displayQuestion();
    } else if (indexUsed.length === quizQuestions.length) {
        questionElement.innerHTML = `Your scored: ${userScore} / ${quizQuestions.length}`;
        answerElements.forEach(answer => {
        answer.classList.add('no-display')
        })
    }
};

// reset quiz event listener
resetBtn.addEventListener('click', () => {
    indexUsed = [];
    userScore = 0;
    answerElements.forEach(answers => {
        answers.classList.remove('no-display');
    })
    displayQuestion();
});

// event listener - answer elements 
answerElements.forEach(answers => {
    answers.addEventListener('click', eventHandler);
});


displayQuestion();



