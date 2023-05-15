let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:`"Too many of us are not living our dreams because we are living our fears." `,
    person:`Les Brown`
}, {
    
    quote:` "Not how long, but how well you have lived is the main thing.”`,
    person:`Seneca`
}, {

    quote:`“If life were predictable it would cease to be life, and be without flavor."`,
    person:`Eleanor Roosevelt`
}, {

    quote:`“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”`,
    person:`Henry Ford`
} , {
    
    quote:`“In order to write about life first you must live it.”`,
    person:`Ernest Hemingway`
} , {

    quote:`“The big lesson in life, baby, is never be scared of anyone or anything.”`,
    person:`Frank Sinatra`
}, {

    quote:` “Curiosity about life in all of its aspects, I think, is still the secret of great creative people.” `,
    person:`Leo Burnett`
} , {

    quote:` “Life is not a problem to be solved, but a reality to be experienced.”`,
    person:`Soren Kierkegaard`
} , {

    quote:`"Do all the good you can, for all the people you can, in all the ways you can, as long as you can." `,
    person:`Hillary Clinton`
} , {

    quote:`"Don’t settle for what life gives you; make life better and build something." `,
    person:`Ashton Kutcher`
} , {

   quote:`"The two most important days in your life are the day you are born and the day you find out why."`,
   person:`Mark Twain`

}, {

    quote:`"Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this."`,
    person:`Celine Dion`
}, {

   quote:`"When we do the best we can, we never know what miracle is wrought in our life or the life of another."`,
   person:`Helen Keller`
}, {

    quote:`"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine." `,
    person:`Neil Armstrong`
} ,{

    quote:`"Live as if you were to die tomorrow. Learn as if you were to live forever." `,
    person:`Mahatma Gandhi`
} ,{

    quote:` "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person."`,
    person:`Bill Clinton`
} , {

    quote:`"Every moment is a fresh beginning."`,
    person:`T.S Eliot`
} ,{

    quote:`"If you spend your whole life waiting for the storm, you'll never enjoy the sunshine."`,
    person:`Morris West`
}, {

    quote:` "When you cease to dream you cease to live."`,
    person:`Malcolm Forbes`
} ,{

    quote:`"The best way to predict your future is to create it."`,
    person:`Abraham Lincoln`
} ,{

    quote:`"You must expect great things of yourself before you can do them." `,
    person:`Micheal Jordan`
} , {

    quote:`"There are no mistakes, only opportunities."`,
    person:`Tina Fey`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})