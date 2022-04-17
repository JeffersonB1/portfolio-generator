// const animalArray = ['dog', 'cat', 'pig'];
// animalArray.push('cow');

// const personObj = {
//     name: 'Lenantino',
//     age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

// console.log(animalArray);
// console.log(personObj);
// var profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i+=1) {
        console.log(profileDataArr[i]);

    }
    console.log('==============');
};

// Is the same as this....
profileDataArr.forEach((profileItem) => console.log(profileItem));

printProfileData(profileDataArgs);

