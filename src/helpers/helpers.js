export const calculateAverageAge = (users) => {
  if (users.length === 0) {
    return 0;
  }

  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalAge / users.length;

  return averageAge;
};
