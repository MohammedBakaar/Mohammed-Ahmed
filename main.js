const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
app.use(express.json());
const date = new Date;
const deleteUserHandler = (req, res) => {
    let id ;
    if( req.params.id ){
         id = req.params.id ;
    }    
        else 
         id = req.body.id

  if (!id) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  let users = reading(filePath);

  const userID = users.findIndex((user) => user.id === id);

  if (userID === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(userID, 1);
  writing(users, filePath);

  return res.json({ message: 'User deleted successfully' });
};

const filePath = path.join(__dirname, 'users.json');

const reading =(filePath)=>{
   return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const writing=(data,filePath)=>{
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

let users =reading(filePath);


app.post('/POST/user',(req , res)=>{
   let users =reading(filePath);
    let NewUser =req.body
    NewUser.id = date.getMilliseconds().toString()
   
    const IS_USER = users.find((user) => user.email === NewUser.email )
    
   if (IS_USER) {
    return res.status(400).json({ message: 'Email already exists' });
  }
    users.push(NewUser)
    writing(users,filePath);
   return res.status(201).json({
        message : "user added successfully"
    })
})
app.patch('/PATCH/user/:id', (req, res) => {
const { id } = req.params;
const { name, age, email } = req.body;
let users =reading(filePath);
const userID = users.findIndex((user) => user.id === id);
if (userID === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
if (email) {
    const emailExists = users.find((user) => user.email === email);
    if (emailExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }
    users[userID].email = email;
}
if (name) users[userID].name = name;
if (age) users[userID].age = age;
writing(users,filePath)
res.json({ message: 'User updated successfully'});
})
app.delete('/DELETE/user/:id', deleteUserHandler);
app.delete('/DELETE/user', deleteUserHandler);

app.get('/GET/user/getByName', (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ message: 'Name query parameter is required' });
  }

  let users = reading(filePath);

  const user = users.find((user) => user.name === name);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.json({ message: 'User retrieved successfully' ,users});
});
app.get('/GET/user', (req, res) => {
  let users = reading(filePath);

  return res.json({
    message: 'Users retrieved successfully',
    users
  });
});
app.get('/GET/user/filter', (req, res) => {
  const { minAge } = req.query;

  if (!minAge) {
    return res.status(400).json({ message: 'minAge query parameter is required' });
  }

  let users = reading(filePath);

  const filteredUsers = users.filter((user) => user.age) >= minAge;

  return res.json({
    message: 'Users filtered successfully',users});
});
app.get('/GET/user/:id', (req, res) => {
  const { id } = req.params;

  let users = reading(filePath);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.json({
    message: 'User retrieved successfully',
    user
  });
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})