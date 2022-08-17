exports.signUp = async(userName, eMail, passWord, setter)=>{
    try {
        const res = await fetch('http://localhost:5001/user',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'username':userName,
                'email':eMail,
                'password':passWord
            })
        });
        const data = await res.json();
        console.log(data.newUser.username);
        setter(data.newUser.username);
    } catch (error) {
        console.log(error);
    }
};

exports.login = async(userName, eMail, passWord, setter)=>{
    try {
        const res = await fetch('http://localhost:5001/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'username':userName,
                'email':eMail,
                'password':passWord,
                
            })
        });
        const data = await res.json();
        console.log(data.user);
        setter(data.user.username);
    } catch (error) {
        console.log(error);
    }
};


exports.findusers = async(setter)=>{
    try {
        const res = await fetch('http://localhost:5001/list',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            
        });
        const data = await res.json();
        console.log(data.allUsers);
        setter(data.allUsers);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteuser = async(userName, eMail, passWord, setter)=>{
    try {
        const res = await fetch('http://localhost:5001/delete',{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'username':userName,
                'email':eMail,
                'password':passWord
            })
        });
        const data = await res.json();
        console.log(data);
        setter(data);
    } catch (error) {
        console.log(error);
    }
};

exports.updateuser = async(userName,old_password, new_userName, email, password, setter)=>{
    try {
        const res = await fetch('http://localhost:5001/user',{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'username':userName,
                'password': old_password,
                'new_username':new_userName,
                'new_email': email,
                'new_password': password
            })
        });
        const data = await res.json();
        console.log(data.userUpdate);
        setter(data.userUpdate);
    } catch (error) {
        console.log(error);
    }
};

