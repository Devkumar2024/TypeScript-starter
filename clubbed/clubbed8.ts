interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  password: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

type PublicUser = Omit<User, "password">;

function getPublicUsers (response: ApiResponse<User[]>): PublicUser[] {
  return response.data.map((user) => {
    const { password, ...publicUser } = user;

    return publicUser;
  });
}

const response: ApiResponse<User[]> = {
  success: true,
  data: [
    {
      id: 1,
      name: "Dev",
      email: "dev@gmail.com",
      role: "user",
      password: "abc123"
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      role: "admin",
      password: "xyz789"
    }
  ]
};

const result = getPublicUsers(response);

console.log(result);