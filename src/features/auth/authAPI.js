export function createUser(userData) {
  return new Promise(async(resolve) =>{
    const response = await fetch("http://localhost:8080/users",{
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {'content-type' : "application/json"}
    });
    const data = await response.json()
    //TODO: On server it will only return some relevent information of user in which password not include
    resolve({data})
 } 
 );
}

export function checkUser(loginInfo) {
  return new Promise(async(resolve,reject ) =>{
    const email = loginInfo.email;
    let password = loginInfo.password;
    const response = await fetch("http://localhost:8080/users?email=" + email);
    const data = await response.json();
    console.log({data});
    if(data.length){
      if(password === data[0].password){
         resolve({data:data[0]});
      }else{
        reject({message: "wrong credentials"})
      }
    }else{
      reject({message: "user not found"});
    }
    //TODO: On server it will only return some relevent information of user in which password not include
 } 
 );
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    // TODO: on server we will remove user session info
    resolve({ data: 'success' });
  });
}