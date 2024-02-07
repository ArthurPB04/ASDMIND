function toggleFAQ(faqId) {
    var element = document.getElementById(faqId);
    var isHidden = element.style.display === "none";
    
  
    var allFAQs = document.querySelectorAll('.faq-item p');
    for (var i = 0; i < allFAQs.length; i++) {
      allFAQs[i].style.display = 'none';
    }
   
    
    if (isHidden) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
  
  
  
  