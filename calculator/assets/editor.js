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
        expression = new AlgebraLatex().parseLatex(mathField.latex());
        let result = expression.toAlgebrite(Algebrite);
        const answer = Algebrite.run(result.toString());
        const answerLatex = new AlgebraLatex().parseMath(answer.toString());
        console.log(answer.toString())
        answerElement.innerHTML = answerLatex.toLatex();
        MQ.StaticMath(answerElement)
      } catch (error) {
        console.log(error);
      }
    },
  },
});

const result = Algebrite.eval("2x + 2x");
console.log(result.toString()); // Outputs: 4
