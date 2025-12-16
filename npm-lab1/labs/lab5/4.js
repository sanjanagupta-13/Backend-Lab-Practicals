const urlString = "https://www.w3schools.com/page?name=Sanjana&age=20";

const urlObj = new URL(urlString);

console.log("Protocol =", urlObj.protocol);
console.log("Hostname =", urlObj.hostname);
console.log("Pathname =", urlObj.pathname);
console.log("Search Query =", urlObj.search);
console.log("Search Query =", urlObj.searchParams);


console.log("Query Parameters:");
urlObj.searchParams.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});
