import users from "./users.js";
// task_1
const getUserName = (users) => {
  return users.map((user) => user.name);
};
console.log(getUserName(users));
// task_2
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, "blue"));
// task_3
const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};
console.log(getUsersWithGender(users, "male"));
// task_4
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive);
};
console.log(getInactiveUsers(users));
// task_5
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// task_6
const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
// task_7
const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};
console.log(calculateTotalBalance(users));
// task_8
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user["friends"].includes(friendName))
    .map((user) => user.name);
};
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
// task_9
const getNamesSortedByFriendsCount = (users) => {
  const sortByNumOfFriends = (userOne, userTwo) =>
    userOne["friends"].length - userTwo["friends"].length;
  return users.sort(sortByNumOfFriends);
};
console.log(getNamesSortedByFriendsCount(users));
// task_10
const getSortedUniqueSkills = (users) => {
  let skillsNotUnique = users
    .reduce((acc, {skills}) => [...acc, ...skills], []);
  skillsNotUnique = skillsNotUnique.sort();
  return [...new Set(skillsNotUnique)];
};
console.log(getSortedUniqueSkills(users));
