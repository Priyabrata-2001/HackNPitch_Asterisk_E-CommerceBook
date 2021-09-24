document.addEventListener('DOMContentLoaded', how);
function how(){
    var booklist = document.querySelectorAll('.buy');
    console.log(booklist);

    for(i=0 ; i< booklist.length ; i++){
        
        booklist[i].addEventListener('click', select);
    }
    
    localStorage.removeItem("Search");


    
   function select(e){
    localStorage.setItem("Search",this.id.toUpperCase());
   }
    
};
