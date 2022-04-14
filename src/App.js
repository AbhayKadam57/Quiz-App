import './App.css';
import react,{useState} from "react"


const questions =[

    { id:1,
      questionText:"Who is an owner of tesla?",

    answerSection:[

      {answerText:"Elon Musk", isCorrect:true},
      {answerText:"Sundar Pichai", isCorrect:false},
      {answerText:"Satya Nadela", isCorrect:false},
      {answerText:"Mukesh Ambani", isCorrect:false},

    
  ]},
    {
      id:2,
      questionText:"Who is founder of Apple?",

    answerSection:[

      {answerText:"Larry Page", isCorrect:false},
      {answerText:"Michale Jackson", isCorrect:false},
      {answerText:"Jhon legond", isCorrect:false},
      {answerText:"Steve Jobs", isCorrect:true},

    ]
    },
    {
      id:3,
      questionText:"Who is a winner of IPL 2021?",

    answerSection:[
      {answerText:"Royal Challenger Banglore", isCorrect:false},
      {answerText:"Chennai SuperKings", isCorrect:true},
      {answerText:"Mumbai Indians", isCorrect:false},
      {answerText:"Rajasthan Royals", isCorrect:false},

    ]

    },
    {
      id:4,  
      questionText:"Who is a president of India?",

    answerSection:[

      {answerText:"Narendra Modi", isCorrect:false},
      {answerText:"Rahul Gandhi", isCorrect:false},
      {answerText:"Sharad Pawar", isCorrect:false},
      {answerText:"Ramnath Kovind", isCorrect:true},

    ]
    }



]

function App() {

  const[quizfinished,Setquizfinished]=useState(false)
  const [num,setNum]=useState(0)

  const[score,setScore]=useState(0)

  function handleonClicked(isCorrect){

    {isCorrect===true ? setScore(score+1):setScore(score)}
    {num===(questions.length-1) ? Setquizfinished(!quizfinished):setNum(num+1)}

  }

  return (
    (quizfinished ? 
      
      
      (<div className='Score-section'>

          <h2>You Scored {score+1} out of {questions.length}</h2>
 
      </div>):
      
    
      (<div className='question-section'>
        <div>
            <h2>Question: <span>{num} / 4</span></h2>
            <h3>{questions[num].questionText}</h3>
        </div>
       

        <div className='flex'>
         {questions[num].answerSection.map((answer)=>{

           return(<button onClick={()=>handleonClicked(answer.isCorrect)}>{answer.answerText}</button>)
         })}
        </div>

      </div>))
  )
}

export default App;
