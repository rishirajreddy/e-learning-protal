var type1={};
students["10"]=['10','9','8','7','6','5','4','3','2','1'];
10+2['11']=['11','12'];
university["undergraduate"]=['undergraduate','postgraduate'];

function TOF(){
    var typelist=document.getElementById("type");
    var studentlist=document.getElementById("class");
    var selstudent=typelist.options[typelist.selectIndex].value;
    while(studentlist.options.length){
        studentlist.remove(0);
        
    }
    var studies= type1[selstudent];
    if(studies){
        var i;
        for (i=0;i<studies.length;i++){
            var type = new Option(studies[i],i);
            studentslist.options.add(type);
        }
    }
}