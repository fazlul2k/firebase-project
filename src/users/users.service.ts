import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { db } from 'src/auth/firebase';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
   create(user: CreateUserDto) {
    const usersDb = db.collection('users'); 
    usersDb
    .add(user)
    .then((result) => user)
    .catch(err => console.log("error creating user",err))
    return user
  }

  async findAll() {
    let usr=[]
    const users = await db.collection('users').get()
    if (users.docs.length > 0) {
      for (const user of users.docs) {
        usr.push(user.data())
    }}
    
    return usr;
  }

  async findOne(id: string) {
   
    const usr = []
    const users = await db.collection("users").where("id","==",id).get()
    .then(snap => {
      if (snap.docs.length > 0) {
        for (const user of snap.docs) {
          console.log(user.data())
          usr.push(user.data())
        }}
      return usr;
      })
     return usr;
  }
    
  
  


  async update(id: string, updateUserDto: UpdateUserDto) {

    const updatedUser = await db.collection('users').doc(id).set(updateUserDto, { merge: true });
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {

    await db.collection('users').doc(id).delete(); 
    return `This action removes a #${id} user`;
  }
}
