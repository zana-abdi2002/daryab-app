import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام",
};

const SignUpPage = () => {
  return (
    <main className="flex w-full items-center justify-center">
      <SignUp
        appearance={{
          elements: {
            userButtonPopoverActionButton: {
              color: "#fff",
              "&:hover": {
                color: "#FFFFFF75",
              },
            },
            // rootBox: {
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // },
            cardBox: {
              padding: "30px 0 30px",
              maxHeight: "100vh",
              height: "100vh",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: 0,
                background: "transparent",
              },
            },
          },
        }}
      />
    </main>
  );
};

export default SignUpPage;
