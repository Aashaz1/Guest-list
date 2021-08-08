var nameOfTheStudentArray=[]

function submit(){
    var displayStudentArray = [];

    for (var i= 1; i <=4; i++){
        var nameOfStudent= document.getElementById("name_of_the_student_"+i).value;
        console.log(nameOfStudent);
        nameOfTheStudentArray.push(nameOfStudent);
    }

    console.log(nameOfTheStudentArray);

    var lenghtOfStudentArray= nameOfTheStudentArray.length;
    console.log(lenghtOfStudentArray);

    for (var j= 0; j <lenghtOfStudentArray; j++){
        displayStudentArray.push("<h4>NAME - "+nameOfTheStudentArray[j] + "</h4>");
        console.log(displayStudentArray);
    }

    console.log(displayStudentArray);
    document.getElementById("display_name_with_commas").innerHTML=displayStudentArray;

    var removeCommas= displayStudentArray.join (" ");
    console.log(removeCommas);
    document.getElementById("display_name_without_commas").innerHTML=removeCommas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);

    var displayStudentArraySorting=[];

    var lengthOfNameOfStudentArray=nameOfTheStudentArray.length;
    console.log(lengthOfNameOfStudentArray);

    for (var k= 0; k < lengthOfNameOfStudentArray; k++){
        displayStudentArraySorting.push("<h4>NAME - "+nameOfTheStudentArray[k] + "</h4>");
        console.log(displayStudentArraySorting);
    }

    var removeCommas2= displayStudentArray.join (" ");
    console.log(removeCommas2); 

    document.getElementById("display_name_without_commas").innerHTML=removeCommas2;
}