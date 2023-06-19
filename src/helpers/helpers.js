export const calculateAverageAge = (users) => {
  if (users.length === 0) {
    return 0;
  }

  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalAge / users.length;

  return averageAge;
};

export const renderUserDetails = (user) => {
  return Object.entries(user).map(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      return (
        <div key={key} className="mb-2">
          <p className="text-gray-600">
            <strong>{key}: </strong>
          </p>
          {renderUserDetails(value)}
        </div>
      );
    }

    return (
      <p key={key} className="text-gray-600">
        <strong>{key}: </strong> {value}
      </p>
    );
  });
};

export const maskSensitiveFields = (user) => {
  const maskedUser = { ...user };

  maskedUser.id = "*";
  maskedUser.password = "********";
  maskedUser.phone = "*********";
  maskedUser.ip = "***.***.**.***";
  maskedUser.address = "**********";
  maskedUser.macAddress = "**********";
  maskedUser.bank = "***************";
  maskedUser.ein = "**-*******";
  maskedUser.ssn = "***-**-****";

  return maskedUser;
};
