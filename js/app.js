$('document').ready(function () {
    writeQuestion(count);
    var rightAnswer = 0;
    $("body").delegate(".submit_button", "click", function () {
        var solution = questions[count].solution;
        var user_input = $('input[name="answer"]:checked').val();
        if (user_input == undefined) {
            alert('Please choose an answer')
            return
        }
        if (solution == user_input) {
            $(".message").html("<p class='correct_answer'>" + "CORRECT!" + "</p>");
            rightAnswer++;
            $("input:checked").parent().append(space + check);
            disableSubmit();
        }
        else {
            $(".message").html("<p class='wrong_answer'>" + "INCORRECT!" + "</p>");
            var solutionInputHtml = $("input")[solution];
            $(solutionInputHtml).parent().append(space + check);
            $("input:checked").parent().append(space + times);
            disableSubmit();
        }
        if (count == questions.length - 1) {
               $(".finished").html("<h2>" + "You finished with a total score of " + "<u>" + "<strong>" + rightAnswer + " out of " + total + "!" + "</strong>" + "</u>" + "</h2>");
        }
        else {
            $(".message").append("<span>" + "<button class='next'>" + "next question" + " <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>" + "</button>" + "</span>")
        }
    });
    $("body").delegate(".next", "click", function () {
        if (count == questions.length - 1) {
            $(".finished").html("<h2>" + "You finished with a total score of " + "<u>" + "<strong>" + rightAnswer + " out of " + total + "!" + "</strong>" + "</u>" + "</h2>");
        }
        else {
            count++;
            writeQuestion(count);
            $(".message").html('');
        }
    })
});
