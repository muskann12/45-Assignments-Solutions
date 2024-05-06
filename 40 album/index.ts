//QUESTION 40
function make_album(artist_name :string , album_titile :string, tracks?: number){
   let album: { artist: string, title :string, tracks? :number} ={
    artist: artist_name,
    title: album_titile,
   };
   
   if(tracks !== undefined){
     album.tracks = tracks;
     
   }
return album;
}

//calling function
 let album1 = make_album("Artist no 1" , "Album titile 1"); 
 let album2 = make_album("Muskan", "Album title 2");
 
 //with third parameter
 let album3 = make_album("Ali", "Album titile 3" , 10)

 // printing values of our object
 console.log(album1);
console.log(album2);
console.log(album3);
