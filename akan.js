function processFormData(){
    var birthDate = document.getElementById('birthDate').value;
    const male = document.getElementById('maleOption');
    const female = document.getElementById('femaleOption');
    var dayIndex = new Date(birthDate).getDay();

    if(male.selected){
        var gender = "Male"
        
    }else if(female.selected){
        var gender = "Female"
        const names = {Sunday:'Akosua',Monday:'Adwoa',Tuesday:'Abenaa',Wednesday:'Akua',Thursday:'Yaa',Friday:'Afua',Saturday:'Ama'}
    }

    const getDayName = (dayIndex) =>{
        const akanName = {Sunday:'Kwasi',Monday:'Kwadwo',Tuesday:'Kwabena',Wednesday:'Kwaku',Thursday:'Yaw',Friday:'Kofi',Saturday:'Kwame'}
	    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	    return days[dayIndex];
        
    }
    const dayName = getDayName(dayIndex)

    
    console.log(dayName)

    

    document.getElementById('displayName').innerHTML ='<div class="alert alert-primary" role="alert"> Your date of birth:'+birthDate+' and your gender is:'+gender+'</div>'
}

    
 