// localStorage.removeItem("Search");
console.log("this.id");
document.addEventListener('DOMContentLoaded', how);
function how(){
    var booklist = document.querySelectorAll('.trending');
    console.log(booklist);

    for(i=0 ; i< booklist.length ; i++){
        
        booklist[i].addEventListener('click', select);
    }


   function select(e){
    localStorage.removeItem("Search");
    console.log(this.id);   
    localStorage.setItem("Search",this.id.toUpperCase());
   }
    
};