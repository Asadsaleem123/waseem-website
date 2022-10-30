const loginform=document.getElementById("contactForm")
loginform.addEventListener("submit",function(e){
      e.preventDefault()
 const loginFormData=new FormData(loginform)
alert(`Thanks ${loginFormData.get('cname')} for contacting us we will reach you As soon As possible you can also reach out to us through our social media accounts`)
})