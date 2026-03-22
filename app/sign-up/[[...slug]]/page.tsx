import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#0F1115] flex items-center justify-center font-(family-name:--font-inter) p-4 sm:p-8">
      <div className="w-full max-w-[400px] transition-all duration-300 transform scale-100 hover:scale-[1.01] ease-out">
        <SignUp 
          appearance={{
            variables: { fontFamily: "var(--font-inter), sans-serif" }
          }}
        />
      </div>
    </div>
  );
}
