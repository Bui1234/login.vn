var register = document.querySelector('.text-register')
var login = document.querySelector('.text-login')
var formRegister = document.querySelector('.form-register')
var formLogin = document.querySelector('.form-login')
var registers = document.querySelector('.registers')
function clicks(){
    if(formRegister)
    {
        formRegister.classList.add('show')
    }
    if(formRegister)
    {
        formRegister.classList.remove('hidden')
    }
   if(formLogin)
    {
      formLogin.classList.remove('show')
    }
}
 register.addEventListener('click', function(){
   clicks();
 })
 login.addEventListener('click', function(){
    if(formLogin)
    {
       formLogin.classList.add('show')
    }
    if(formRegister)
    {
      formRegister.classList.add('hidden')
    }

 })
  registers.addEventListener('click', function(){
clicks();
  })
 function Validater(options){
   var inVadate = {};
   //tạo một 1vong lặp đến thằng cha cuối cùng của inputElement 
   function getParent(element, seclecter){
    while(element.parentElement)
    {
        if(element.parentElement.matches(seclecter))
        {
              return element.parentElement
        }
        element = element.parentElement
    }
   }
    function validater(inputElement, rule){
        var erorElement = getParent(inputElement, options.inputBox).querySelector(options.message)
        var errorMessega 
       var ruless = inVadate[rule.seclecter]
        for(var i=0; i< ruless.length;++i)
        {
              errorMessega = ruless[i](inputElement.value)     
            if(errorMessega) break 
         }
        if(errorMessega)
        {
            erorElement.innerText = errorMessega
        getParent(inputElement, options.inputBox).classList.add('invalid')
        }
        else
        {
            erorElement.innerText = ' '
       getParent(inputElement, options.inputBox).classList.remove('invalid')
        }
        return ! errorMessega
    }
    // form đăng ký 
    var formElement = document.querySelector(options.form)
   
     if(formElement)
     {
        formElement.onsubmit = function(e)
        {
            e.preventDefault();
            var isFormvalid = true
            options.rules.forEach(function(rule)
            {
                var inputElement = formElement.querySelector(rule.seclecter)
                var isValid = validater(inputElement, rule)
                if(! isValid)
                {
                    isFormvalid = false
                }
            });
           if(isFormvalid)
           {
           if(typeof options.onSubmit === 'function')
           {
            var enableInputs = formElement.querySelectorAll('[name]')
            
            var formValue = Array.from(enableInputs).reduce(function(values , input){
                values[input.name] = input.value
               return values
            },{})
            options.onSubmit(formValue)
           }
           }
        }
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.seclecter)
         if(Array.isArray(inVadate[rule.seclecter]))
         {
            inVadate[rule.seclecter].push(rule.test)
         }
         else
         {
            inVadate[rule.seclecter] = [rule.test]
         }
        if(inputElement)
        {
          
         inputElement.onblur = function()
         {
           validater(inputElement,rule)
         }
         inputElement.oninput = function()
         {
            var erorElement = getParent(inputElement, options.inputBox).querySelector(options.message)
            erorElement.innerText = ' '
        getParent(inputElement, options.inputBox).classList.remove('invalid')
         }
        }
    })
    }
}


 Validater.isRequired = function(seclecter){
    return {
        seclecter: seclecter,
        test: function(value){
            return value.trim() ? undefined:'Trường này chưa nhập *'
        }
    }
 }
 Validater.isEmail = function(seclecter){
    return {
        seclecter: seclecter,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined :'Trường này phải là email *'
         }
    }
 }
Validater.isPassword  = function(seclecter, min){
    return{
        seclecter: seclecter,
        test: function(value){
            return value.length >= min ? undefined: 'Vui lòng nhập tối thiểu 8 ký tự *'
        }
    }
}
Validater.isEnterpassword = function(seclecter, getPassword){
    return{
        seclecter: seclecter,
        test: function(value){
            return value === getPassword()  ?  undefined: 'Vui lòng lại nhập mật khẩu *'
        }
    }
}

var checked = document.querySelector('#light-darks')
var checkedMobile = document.querySelector('#light-darks-mobile')
var blogtitle = document.querySelectorAll('.blog-box-title-h3')
var next = document.querySelectorAll('.carousel-control-next')
var prev = document.querySelectorAll('.carousel-control-prev')
checked.addEventListener('click',function(){
    document.body.classList.toggle('dark')
   blogtitle.forEach(function(item){
     item.classList.toggle('lights')
   })
   next.forEach(function(item){
     item.classList.toggle('darks')
   })
   prev.forEach(function(item){
     item.classList.toggle('darks')
   })
   document.querySelector('.footer').classList.toggle('darks-footer')
})
checkedMobile.addEventListener('click',function(){
    document.body.classList.toggle('dark')
   blogtitle.forEach(function(item){
     item.classList.toggle('lights')
   })
   next.forEach(function(item){
     item.classList.toggle('darks')
   })
   prev.forEach(function(item){
     item.classList.toggle('darks')
   })
   document.querySelector('.footer').classList.toggle('darks-footer')
})
var bar = document.querySelector('.navbar-bar')
var containersTablet = document.querySelector('.containers-tablet')
var close = document.querySelector('.icon-close')
var overPlay= document.querySelector('.overplay')

if(containersTablet)
{
 
    bar.addEventListener('click',function(){
     if(containersTablet)
     {
      containersTablet.classList.add('show')
     }
     if(overPlay)
     {
     overPlay.classList.add('show')
     }
  })
  overPlay.addEventListener('click',function()
  {
    containersTablet.classList.remove('show')
    if(overPlay)
     {
     overPlay.classList.remove('show')
     }
  })
  close.addEventListener('click', function()
  {
    containersTablet.classList.remove('show')
    if(overPlay)
    {
    overPlay.classList.remove('show')
    }
  })
}
var iconsearch = document.querySelector('.search-icon')
var navbarsearch = document.querySelector('.searchs-icon')
iconsearch.addEventListener('click',function(){
   navbarsearch.classList.toggle('show')
})
var creatDow = document.querySelector('.creatdow')
var navbarMobnile = document.querySelector('.navbars-icon-mobile')
creatDow.addEventListener('click', function(){
  navbarMobnile.classList.toggle('show')
});