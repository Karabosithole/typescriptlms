// import { useState } from 'react';
// // import { chapter } from '../../backend/models/chapters';
// // import {Chapter ,Questions} from "../interface/Ichapter";

// interface Chapter {
//     question: string;
//     options: string[];
//     answer: string;
//   }

//   interface Questions {
//     typescript: {
//       [key: string]: Chapter[]; // This allows dynamic chapter keys like "chapter-1", "chapter-2", etc.
//     };
//   }
  

// let questions :  Questions = {
//     typescript: {
//         "chapter-1": [
//             { question: "What type is `true`?", options: ["string", "boolean", "number"], answer: "boolean" },
            
//             { question: "What type is `42`?", options: ["string", "boolean", "number"], answer: "number" },
            
//             { question: "What does it mean that TypeScript is a superset of JavaScript?", 
//                 options: ["TypeScript is an entirely separate language", "All JavaScript programs are valid TypeScript programs", "TypeScript runs instead of JavaScript"], 
//                 answer: "All JavaScript programs are valid TypeScript programs"},
//             { question: "What happens if you try to run TypeScript code directly without compiling it?", 
//               options: ["It runs just like JavaScript", "You will get a syntax error", "It compiles automatically in the browser"], 
//               answer: "You will get a syntax error"},
//             { question: "How does TypeScript help spot errors in JavaScript code?", 
//               options: ["By adding extra syntax that isn't allowed in JavaScript", "By catching errors during runtime", "By providing static type checking at compile time"], 
//               answer: "By providing static type checking at compile time"
//             },
//             { question: "What is an example of an error TypeScript can catch even without type annotations?", 
//               options: ["Misspelled variable names", "Incorrect function arguments", "Type errors in mathematical operations"], 
//               answer: "Misspelled variable names"
//             },
//             { question: "What does the `any` type in TypeScript represent?", 
//               options: ["A variable that can be of any type without any restrictions", "A variable that must be assigned a type at compile time", "A placeholder for incomplete code"], 
//               answer: "A variable that can be of any type without any restrictions"
//             },
//             { question: "Can TypeScript catch all potential runtime errors?", 
//               options: ["Yes, TypeScript guarantees no errors at runtime", "No, TypeScript cannot catch all runtime errors", "Only errors related to undefined variables"], 
//               answer: "No, TypeScript cannot catch all runtime errors"
//             },
//             { question: "What happens if a JavaScript construct is legal but questionable in TypeScript?", 
//               options: ["TypeScript allows it", "TypeScript disallows it", "TypeScript throws an immediate error"], 
//               answer: "TypeScript disallows it"
//             },
//             { question: "What is TypeScript’s approach to modeling JavaScript’s runtime behavior?", 
//               options: ["It tries to strictly enforce JavaScript’s behavior", "It models JavaScript’s behavior but flags unusual cases as errors", "It ignores JavaScript’s behavior for better safety"], 
//               answer: "It models JavaScript’s behavior but flags unusual cases as errors"
//             },
//             { question: "How can TypeScript improve error detection in your code?", 
//               options: ["By guessing what you meant to write", "By adding types to JavaScript automatically", "By using type annotations to clarify intent"], 
//               answer: "By using type annotations to clarify intent"
//             },
//             { question: "What type of errors can still occur in TypeScript after code passes the type checker?", 
//               options: ["Syntax errors", "Runtime errors like null reference", "Logic errors in variable declarations"], 
//               answer: "Runtime errors like null reference"
//             }
//         ],"chapter-2":
//             [{ question: "What type is `true`?", options: ["string", "boolean", "number"], answer: "boolean" }

//     ],"chapter-3":
//         [{ question: "What type is `true`?", options: ["string", "boolean", "number"], answer: "boolean" }
//     ], "chapter-4":
//         [{ question: "What type is `true`?", options: ["string", "boolean", "number"], answer: "boolean" }
//     ],"chapter-5":
//         [{ question: "What type is `true`?", options: ["string", "boolean", "number"], answer: "boolean" }
//     ], "chapter-6":
//         [{ question: "What type is `true`?", options: ["string", "boolean", "number"], answer: "boolean" }
//     ],"chapter-7":[
//             { question: "What type is `true`?", options: ["string", "boolean", "number"], answer: "boolean" }
//     ], "chapter-8":
//         [{ question: "What type is `true`?", options: ["string", "boolean", "number"], answer: "boolean" }
//     ], "chapter-9":
//         [{ question: "What type is `true`?", options: ["string", "boolean", "number"], answer: "boolean" }
//     ], "chapter-10":
//         [{ question: "What type is `true`?", options: ["string", "boolean", "number"], answer: "boolean" }
//     ]

         
// }
// }

// // interface TypeQuizProps {
// //     topic: string;
// // }


// export default function TypeQuiz({ module, topic }: { module: "typescript" , topic: "chapter-1"| "chapter-2" |"chapter-3"|"chapter-4" |"chapter-5"|"chapter-6"|"chapter-7"|"chapter-8"|"chapter-9"|"chapter-10" }) { //Find a better way to write this out 
    
//     const [userAnswers, setUserAnswers] = useState<string[]>([]);
//     const [score, setScore] = useState<number | null>(null);

//     const handleSubmit = async () => {
//         const correctAnswers = questions[module][topic].map(q => q.answer);const userScore = userAnswers.filter((ans, i) => ans === correctAnswers[i]).length;
//         setScore(userScore);


//         await fetch(`/api/${module}/submit`, {

//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ userId: "12345", topic, score: userScore }),
//         });
//     };

    // return (
    // <div>
    //     <h2>{module.toUpperCase()} Quiz: {topic.replace("-", " ")}</h2>
    //     {questions[module][topic].map((q, index) => (
    //         <div key={index}>
    //             <p>{q.question}</p>
    //             {q.options.map(option => (
    //                 <button key={option} onClick​={() => {
    //                     const newAnswers = [...userAnswers];
    //                     newAnswers[index] = option;
    //                     setUserAnswers(newAnswers);
    //                 }}>
    //                 {option}
    //                 </button>
    //             ))} 
    //             export default TypeQuiz;


    //             </div>
    //         ))}
    //         <button onClick​={handleSubmit}>Submit</button>
    //         {score !== null && <p>Your score: {score} / {questions[module][topic].length}</p>}
    //         </div>
    //     );
    // 
    // }
