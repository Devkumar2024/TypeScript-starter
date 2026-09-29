// --- Interface ---
interface Profile {
  name: string;
  age: number;
  email: string;
  phone: string;
}

// --- Type: everything updatable except email ---
// Omit<Profile, "email">  → { name: string; age: number; phone: string }
// Partial<...>            → all of those become optional
type ProfileUpdate = Partial<Omit<Profile, "email">>;

// --- Function ---
function updateProfile(
  profile: Profile,
  updates: ProfileUpdate
): Profile {
  return { ...profile, ...updates };
}

// --- Tests ---
const profile: Profile = {
  name: "Dev",
  age: 22,
  email: "dev@example.com",
  phone: "9999999999",
};

// Update one field
console.log(updateProfile(profile, { age: 23 }));
// Update several
console.log(updateProfile(profile, { name: "Aman", phone: "8888888888" }));

// Update nothing
console.log(updateProfile(profile, {}));
// Original is unchanged (spread creates a new object)
console.log(profile.age); // 22