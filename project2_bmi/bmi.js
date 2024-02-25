const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const result = document.querySelector('#results');
    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML =`Please give a vaild height ${height}`;
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
         result.innerHTML = `Please give a vaild weight ${weight}`;
    }
    else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML = `<span>Your BMI is ${bmi}, You are under Weight</span>`;
        }else if(bmi>=18.6 && bmi <24.6){
            result.innerHTML = `<span>Your BMI is ${bmi}, Your BMI is good </span>`;
        }else{
            result.innerHTML = `<span>Your BMI is ${bmi}, You are overweight</span>`;
        }
    }
})