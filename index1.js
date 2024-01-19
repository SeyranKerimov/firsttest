const studentProfile={
    name : 'Namiq',
    age: 22,                             
    course:'Eacamp',
    hobbies:'coding',
}
// delete studentProfile.course          PART 1           
// // console.log(studentProfile)

// const{name: studentName,age,...rest }=studentProfile;      PART 2
// console.log(rest)


// const grades=[30, 31 , 32 ,39, 78, 95];       PART 3
// console.log(grades[0], grades[5])


const additionalInfo={
    adress: 'sulh 1a',
    phoneNumber:'012345678'
}
const compliteProfile={
    ...studentProfile, ...additionalInfo
}
console.log(compliteProfile)