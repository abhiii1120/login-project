import React from "react";

const Login = ({toggle}) => {
  return (
    <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl border border-slate-200/50 p-8 sm:p-10">
      <div className="text-center mb-8">
        <div className="text-3xl font-bold text-slate-900 mb-2">
          Welcome back
        </div>
        <div className="text-sm text-slate-600">Sign in your account</div>
      </div>
      <form action="" className="space-y-5">
        <div className="input-container">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
          <input required type="email" name="email" placeholder="you@example.com" className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"/>
        </div>
        <div className="input-container">
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">Password</label>
          <input required type="password" name="password" placeholder="****" className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"/>
        </div>
        <button type="submit" className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md">Sign in</button>
      </form>
      <div className="mt-6 text-center text-sm text-slate-600">
        Don't have an accouunt? <button onClick={() => toggle(prev => !prev)} className="font-semibold text-slate-900 hover:text-slate-700 transition-colors duration-200">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
