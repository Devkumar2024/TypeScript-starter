interface Assignment {
  studentID: string;
  title: string;
  grade: number;
  verified?: boolean;
}
// Partial : sbb kuch update nhi karna hai
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>,
): Assignment => {
  // specify some of the props of assignment
  return { ...assign, ...propsToUpdate };
};

const mathsAssignment = {
  studentID: `FAU2345`,
  title: `Real numbers`,
  grade: 12,
  verified: true,
};

// console.log(
//   updateAssignment(mathsAssignment, { title: `Trigonometry`, grade: 50 }),
// );

const AssignedMATHGRAD: Assignment = updateAssignment(mathsAssignment, {
  title: `Trigonometry`,
  grade: 50,
});

// console.log(AssignedMATHGRAD);

// Required and readOnly

const RecordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to DB..
  return { ...assign };
};
console.log(RecordAssignment(mathsAssignment));

const assignVerified: Readonly<Assignment> = {
  ...mathsAssignment,
  verified: false,
};

// assignVerified.grade = 88; Wont Worker[Symbol]...

console.log(assignVerified);

const HEXCOLORCODES: Record<string, string> = {
  red: "ffh01",
  green: "fffd1",
  blue: "ff731",
};

type students = "Jhon" | "Sara" | "Lexi";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<students, LetterGrades> = {
  Jhon: "A",
  Lexi: "B",
  Sara: "U",
};

// pick and omit
// pick what you want to from types
type Assignmentresult = Pick<Assignment, "studentID" | "grade">;

const pickedStud: Assignmentresult = {
  studentID: `bfkewbf`,
  grade: 45,
};

type Assignmentpreview = Omit<Assignment, "studentID" | "grade">;
const previewStud: Assignmentpreview = {
  title: `Real numbers`
};
