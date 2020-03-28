let ask = (question,yes,no) => confirm(question)? yes():no();
ask(
    "Do you agree?",
    function(){alert("You agreed.");},
    function(){alert("You cancel.");}
)