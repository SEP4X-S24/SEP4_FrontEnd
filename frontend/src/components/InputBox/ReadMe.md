example of use
it is mandatory to place it inside a form and
 have a button of type submit imside
------------------------------------

  let  email = "";
  let password = "";

  function handleEmail(data: string) {
    email = data;
  }
  
  function handlePassword(data: string) {
    password = data;
  }

    function sendData(){
    console.log(email +" "+ password);
    }

--------------------------------------------
  return(
        <form className="login_form" onSubmit={sendData}>

          <InputBox 
            label="Email" 
            type="email" 
            InputIcon={FaEnvelope} 
            handleClick={handleEmail}/>

          <InputBox 
          label="Password" 
          type="password" 
          InputIcon={FaEye} 
          handleClick={handlePassword}/>
          
          <button type="submit" className="login_button">Login</button>

        </form>  
  )