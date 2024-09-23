import AlgebraLatex from "./parser/index.js";

var mathFieldSpan = document.getElementById("math-field");
var answerElement = document.getElementById("answer");

var expression = new AlgebraLatex();

var MQ = MathQuill.getInterface(2); // for backcompat
var mathField = MQ.MathField(mathFieldSpan, {
  spaceBehavesLikeTab: true, // configurable
  handlers: {
    edit: function () {
      try {
        let latex = mathField.latex();
        // if (latex.includes("!")) {
        //   let f_index = latex.indexOf("!") - 1; // Start from the character before '!'
        //   let f_org_index = f_index;
        //   let f_number = "";

        //   // Read backwards to collect the number
        //   while (f_index >= 0 && !isNaN(latex[f_index])) {
        //     f_number = latex[f_index] + f_number; // Prepend the character to f_number
        //     f_index--;
        //   }

        //   console.log(f_number, f_index + 1, f_org_index); // Outputs the extracted number for the factorial
        //   const factorial = Algebrite.run(f_number + "!");
        //   console.log(factorial.toString());

        //   const beforeFactorial = latex.slice(0, f_index + 1); // Part before the number
        //   const afterFactorial = latex.slice(f_org_index + 2); // Part after the '!'
        //   let newLatex = beforeFactorial + factorial + afterFactorial;
        //   console.log(newLatex);
        //   latex = newLatex;
        // }
        latex = evalFactorial(latex, 0, countFactorials(latex));
        expression = new AlgebraLatex().parseLatex(latex);
        let result = expression.toAlgebrite(Algebrite);
        const answer = Algebrite.run(result.toString());
        const answerLatex = new AlgebraLatex().parseMath(answer.toString());
        console.log(answer.toString());
        answerElement.innerHTML = answerLatex.toLatex();
        MQ.StaticMath(answerElement);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

function evalFactorial(latex, pass = 0, max = 10) {
  if(latex.includes("!!")) {
    return evalFactorial(latex, pass + 1, max);
  }
  if (latex.includes("!") && pass < max) {
    let f_index = latex.indexOf("!") - 1; // Start from the character before '!'
    let f_org_index = f_index;
    let f_number = "";

    // Read backwards to collect the number
    while (f_index >= 0 && !isNaN(latex[f_index])) {
      f_number = latex[f_index] + f_number; // Prepend the character to f_number
      f_index--;
    }

    console.log(f_number, f_index + 1, f_org_index); // Outputs the extracted number for the factorial
    const factorial = Algebrite.run(f_number + "!");
    console.log(factorial.toString());

    const beforeFactorial = latex.slice(0, f_index + 1); // Part before the number
    const afterFactorial = latex.slice(f_org_index + 2); // Part after the '!'
    let newLatex = beforeFactorial + factorial + afterFactorial;
    console.log(newLatex);
    latex = newLatex;
    return evalFactorial(latex, pass + 1, max);
  }
  return latex;
}
function countFactorials(latex) {
  return latex.split('!').length - 1;
}



const result = Algebrite.eval("2x + 2x");
console.log(result.toString()); // Outputs: 4
