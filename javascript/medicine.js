async function fetchText() {
    let response = await fetch('/getMedicine');

    console.log(response.status); 
    console.log(response.statusText); 

    if (response.status === 200) {
        let data = await response.text();
       
    }
}
fetchText();