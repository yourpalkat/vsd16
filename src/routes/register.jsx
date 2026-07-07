import { createFileRoute } from "@tanstack/react-router";
import RegisterForm from "../components/RegisterForm";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <>
      <section className="gridWrapper sectionOne">
        <h1 className="heading2">Join the Party!</h1>
        <p>Do you have a video store? Do you sell or rent physical media? Sign up to be a part of Video Store Day today!</p>
      </section>
      <section className="gridWrapper sectionTwo">
        <div>
          <h2 className="heading3">Sign-up Form</h2>
          <p>Want to join up? Just fill out your details below. An asterisk (*) indicates a required field, others are optional.</p>
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
