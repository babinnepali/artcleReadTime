const paragraph = document.querySelectorAll("/*paragraph*/");
const readTimeDiv = document.querySelector("/*targeted tag*/");


//calculate read time
const calculateReadTime =()=>{
  let numberOfWords = 0;
  const averageWPM = 250;
  
  paragraph.forEach(paragraph => {
    numberOfWords += paragraph.innerHTML.split(" ").length;
    });
  let readTime = numberOfWords/averageWPM;
  readTimeDiv.innerHTML = Math.round(readTime) + "minute read";
  //console.log(readTime);
};
calculateReadTime();
