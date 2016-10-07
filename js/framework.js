var count = 0;
var space = " ";
var writeQuestion = function (num) {
    var questionNum = count + 1
    $(".counter").html(questionNum)
    var questionsHtml = "";
    questionsHtml += '<h2>' + questions[num].question + '</h2>'
    $(".questions").html(questionsHtml)
    var answersHtml = "";
    for (var i = 0; i < questions[num].answers.length; i++) {
        answersHtml += "<div>" + '<input type="radio" name="answer" value="' + i + '">' + space + "<label>" + questions[num].answers[i] + "</label>" + "</div>"
        $(".answers").html(answersHtml)
    }
    $(".submit").html("<button class='submit_button'>" + "submit" + "</button>")
}
var disableSubmit = function () {
    $('.submit_button').attr('disabled', 'disabled');
}

var check = "<span class='check'>" + "<i class='fa fa-check' aria-hidden='true'></i>" + "</span"

var times = "<span class='times'>" + "<i class='fa fa-times' aria-hidden='true'></i>"