document.addEventListener('DOMContentLoaded', function() {

    inputField = document.getElementById('email');
    message = document.getElementById('aviso-email')

    inputField2 = document.getElementById('usuario');
    message2 = document.getElementById('aviso-usuario');
    
    inputField3 = document.getElementById('senha');
    message3 = document.getElementById('aviso-senha');

     inputField.addEventListener('keyup', function() {
        if (inputField.value === '') {
          message.classList.remove('hidden');


        } else {
          message.classList.add('hidden');

        }
        });
      
        inputField2.addEventListener('keyup', function() {
            if (inputField2.value === '') {
              message2.classList.remove('hidden');

            } else {
              message2.classList.add('hidden');

            }
    
        });
    
        inputField3.addEventListener('keyup', function() {
            if (inputField3.value === '') {
              message3.classList.remove('hidden');

            } else {
              message3.classList.add('hidden');    

            }
        });
       
       
    });