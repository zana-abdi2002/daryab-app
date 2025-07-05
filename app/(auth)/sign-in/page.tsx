"use client";

import React, { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn(email, password);
      if (result.success) {
        toast.success("Successfully signed in!");
        router.push("/");
      } else {
        toast.error(result.error || "Sign in failed");
      }
    } catch (error) {
      toast.error("An error occurred during sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex h-screen w-full items-center justify-center bg-[#161925]">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#1c1f2e] rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">ورود به داریاب</h1>
          <p className="text-gray-400">خوش آمدید. لطفا برای ادامه وارد شوید</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              ایمیل
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
              className="w-full bg-[#2f2a41] border-gray-600 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              رمز عبور
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور خود را وارد کنید"
              required
              className="w-full bg-[#2f2a41] border-gray-600 text-white placeholder-gray-400"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#0E78F9] hover:bg-[#0E78F9]/90 text-white"
          >
            {isLoading ? "در حال ورود..." : "ورود"}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-gray-400">
            حساب کاربری ندارید؟{" "}
            <Link href="/sign-up" className="text-[#0E78F9] hover:underline">
              ساخت حساب
            </Link>
          </p>
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">
          <p>برای تست: از رمز عبور خود استفاده کنید</p>
          <button
            onClick={() => {
              const { clearAllUsers, getAllUsers } = require('@/lib/auth');
              clearAllUsers();
              console.log('Current users:', getAllUsers());
            }}
            className="mt-2 px-2 py-1 bg-red-500 text-white rounded text-xs"
          >
            Clear All Users (Debug)
          </button>
        </div>
      </div>
    </main>
  );
};

export default SignInPage; 