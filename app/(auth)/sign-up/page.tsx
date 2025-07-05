"use client";

import React, { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const result = await signUp({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
      });

      if (result.success) {
        toast.success("Account created successfully!");
        router.push("/");
      } else {
        toast.error(result.error || "Sign up failed");
      }
    } catch (error) {
      toast.error("An error occurred during sign up");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex h-screen w-full items-center justify-center bg-[#161925]">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#1c1f2e] rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">ساخت حساب کاربری</h1>
          <p className="text-gray-400">حساب کاربری جدید ایجاد کنید</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                نام
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="نام"
                className="w-full bg-[#2f2a41] border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                نام خانوادگی
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="نام خانوادگی"
                className="w-full bg-[#2f2a41] border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              نام کاربری
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="نام کاربری"
              className="w-full bg-[#2f2a41] border-gray-600 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              ایمیل
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="رمز عبور"
              required
              className="w-full bg-[#2f2a41] border-gray-600 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
              تایید رمز عبور
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="تایید رمز عبور"
              required
              className="w-full bg-[#2f2a41] border-gray-600 text-white placeholder-gray-400"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#0E78F9] hover:bg-[#0E78F9]/90 text-white"
          >
            {isLoading ? "در حال ایجاد..." : "ایجاد حساب"}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-gray-400">
            قبلاً حساب کاربری دارید؟{" "}
            <Link href="/sign-in" className="text-[#0E78F9] hover:underline">
              ورود
            </Link>
          </p>
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">
          <p>رمز عبور خود را به خاطر داشته باشید</p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage; 