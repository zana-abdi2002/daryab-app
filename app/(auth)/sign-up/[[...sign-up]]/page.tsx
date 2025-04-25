import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="flex w-full items-center justify-center pt-9 pb-9">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
