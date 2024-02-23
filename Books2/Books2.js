let books = {
    title:"The little 5 men",
    description: "A tale of 5 little men who stood the test of time",
    numberOfpages: 205,
    author: "Andrew Brown",
    reading:true,
    togglereadingstatus:function(){
        if(books.reading===false){
            console.log(books.reading=true)
        }
        else{
            console.log(books.reading=false)
        }
    }

}


books.togglereadingstatus();
console.log(books.reading);
