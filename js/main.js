var cells = [0, 0, 0, 0, 0, 0,0, 0, 0];
var firstPlayer = true;

function render(){
    var columnid;
    var text;
    for (var i = 0; i < cells.length; i++) {
        var element = cells[i];
        columnid = "#column"+i;
       
        if (element === 0 ) {
            text = "_"
        } else if (element === 1 ) {
            text = "X"
        }else{
            text = "O"
        }
        $( columnid ).text( text );
    }
}



function addEvents() {
    var text;
    for (var i = 0; i < cells.length; i++) {
        var element = cells[i];
        columnid = "#column"+i;

        if(firstPlayer ){
            text = "X";
            firstPlayer = false;
        }else{
            text = "0";
            firstPlayer = true;
        }
         console.log("test" + columnid);
        $( columnid ).click(function() {
           $( columnid ).text( text );
          
        });
    }
}

function btnClick(e){
    var text;
    var id;
    for (var i = 0; i < cells.length; i++) {
        var element = cells[i];
        var stringLength = e.currentTarget.id.length; 
        id = e.currentTarget.id.charAt(stringLength - 1);

        if(i == id){
          

            if (cells[i] === 0 ) {
                
                if(firstPlayer ){
                
                
                    text = "X";
                    firstPlayer = false;
                    cells[i] = 1;
                }else{
                    text = "0";
                    firstPlayer = true;
                    cells[i] = 2;
                }
                
            $( "#" + e.currentTarget.id ).text( text );

            }
        }  
    }
}

$(document).ready(function(){

    render()

    for (var i = 0; i < cells.length; i++) {
        $("#column"+ i).on('click', btnClick);
    }
});

