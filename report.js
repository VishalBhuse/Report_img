// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",mark);

function mark()
{
    event.preventDefault();
    var img = document.querySelector("#image").value;
    var name1 = document.querySelector("#name").value;
    var batch = document.querySelector("#batch").value;
    var dsa = document.querySelector("#dsa").value;
    var cs = document.querySelector("#cs").value;
    var coding = document.querySelector("#coding").value;

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var imgv  = document.createElement("img");
    imgv.src = img;
    td1.append(imgv);

    var td2 =document.createElement("td");
    td2.innerText = name1;

    var td3 =document.createElement("td");
    td3.innerText = batch;

    var td4 =document.createElement("td");
    td4.innerText = dsa;

    var td5 =document.createElement("td");
    td5.innerText = cs;

    var td6 =document.createElement("td");
    td6.innerText = coding;
    
    var total = Number(dsa) + Number(cs) + Number(coding); 
    var perc =  Math.ceil((total/30)*100);
    // console.log(total)

    var td7 = document.createElement("td");
    td7.innerText = perc + "%";

    
    var td8 = document.createElement("td");
    // td8.innerText = perc;
    if(perc > 50)
    {
        td8.innerText = "Regular";
        td8.style.background = "green";
        td8.style.color = "white";
    }
    else{
        td8.innerText = "Async";
        td8.style.background = "red";
        td8.style.color = "white";

    }
    
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);

    document.querySelector("tbody").append(tr);
}