const quotes = [
{
  quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
  author: "엘버트 허버드",
},

{
  quote: "신은 용기있는자를 결코 버리지 않는다.",
  author: "켄러",
},

{
  quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다. 더많이 실험할수록 더나아진다.",
  author: "랄프 왈도 에머슨",
},

{
  quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
  author: "괴테",
},

{
  quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
  author: "이소룡",
},

{
  quote: "최고에 도달하려면 최저에서 시작하라.",
  author: "P.시루스",
},

{
  quote: "문제점을 찾지 말고 해결책을 찾으라.",
  author: "헨리포드",
},

];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;