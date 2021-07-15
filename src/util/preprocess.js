require('jquery')


const d3 = require('d3')

const csvProcess = function(){

    // console.log(new File([""], "./Example_Technology_Radar.txt"))



    // function load(name) {
    //     let xhr = new XMLHttpRequest(),
    //         okStatus = document.location.protocol === "file:" ? 0 : 200;
    //     xhr.open('GET', name, false);
    //     xhr.overrideMimeType("text/html;charset=utf-8");
    //     xhr.send(null);
    //     return xhr.status === okStatus ? xhr.responseText : null;
    // }
    
    // let text = load("file://C:\\Radar.txt");

    // readcsvd3()
//     $(document).ready(function() {
//         $.ajax({
//             type: "GET",
//             url: "Example_Technology_Radar.csv",
//             dataType: "text",
//             success: function(data) {processData(data)},
//             error: function(xhr, e, t) {console.log(xhr.status, e, t)}
//         });
//     });

//     function processData(allText) {

//         console.log('123')
   
//         var allTextLines = allText.split(/\r\n|\n/);
//         var headers = allTextLines[0].split(',');
//         var lines = [];
    
//         for (var i=1; i<allTextLines.length; i++) {
//             var data = allTextLines[i].split(',');
//             if (data.length == headers.length) {
    
//                 var tarr = [];
//                 for (var j=0; j<headers.length; j++) {
//                     tarr.push(headers[j]+":"+data[j]);
//                 }
//                 lines.push(tarr);
//             }
//         }
//         console.log(lines);
//     }
// }

// $ajax({
//     type:"GET",
//     url:"../../Example Technology Radar.csv",
//     dataType: 'text',
// }).done(readcsv);







// function readcsv(data){
    

//     // var allRows = data.split(/\r?\n|\r/);


//     // var allText =[];
//     // var allTextLines = [];
//     // var Lines = [];

    // var txtFile = new XMLHttpRequest();
    
    // txtFile.open("GET", "src/Example_Technology_Radar.csv", false);
    
    // txtFile.onreadystatechange = function()
    // {
    //     if (txtFile.readyState === 4) {
    //         if (txtFile.status === 200 || txtFile.status === 0) {
    //             var allText = txtFile.responseText
    //             console.log(allText)
    //         }
    //         else {
    //             console.error("failed to load file")
    //         }
    //     }
        // allText = txtFile.responseText;
        
        // allTextLines = allText.split(/\r\n|\n/);
        // console.log(allTextLines)
    };
    // txtFile.send()

//     // var data = $.csv.toObjects('../../Example Technology Radar.csv')
// }

// function readcsvd3(){
//     console.log('entry')
//     d3.csv("file:///C:/Example_Technology_Radar.csv", function (csvdata){
//         console.log(csvdata);
//         return csvdata;
//     }).then(function(data){console.log(data)})

    

// }

module.exports = csvProcess