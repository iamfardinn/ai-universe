const handleCategory =async() => {
   console.log("Hello first");
   const response = await fetch("https://openapi.programming-hero.com/api/news/categories")

   const data = await response.json();
   console.log(data);
   console.log("Hello second");
}
handleCategory();

