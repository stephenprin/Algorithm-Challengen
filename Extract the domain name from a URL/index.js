function domainName(url){
    //your code here
    
    url=url.replace("http://", '')
    url=url.replace("www.", '')
    url=url.replace("https://", '')
    
    
    const newUrl=url.split(".")[0]
    return newUrl
  }