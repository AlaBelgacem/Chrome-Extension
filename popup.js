
function check(tab_id,data, tab){
    if(tab.url.indexOf('facebook.com')>-1){
        chrome.pageAction.show(tab_id);
        var startTime = new Date().valueOf();
        
        setTimeout(function() {
            alert("hot a9ra"); 
           }, 10000);
        
       // console.log(startTime);

    }
};


chrome.tabs.onUpdated.addListener(check);

