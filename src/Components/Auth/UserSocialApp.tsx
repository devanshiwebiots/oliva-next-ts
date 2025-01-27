import { FacebookIcon, LinkedInIcon, SignIn, TwitterIcon } from "@/Constant/constant";
import { signIn } from "next-auth/react";
import React from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import toast from "react-hot-toast";
import { Button } from "reactstrap";

export const UserSocialApp = () => {
  const handlesubmit = () =>{
    toast.error('This is only demo purpose, click on the Sign In button to login.')
  }
  return (
    <div className="social mt-4">
      <div className="btn-showcase">
        <Button tag="a" color="light" onClick={() => signIn('google',{callbackUrl:'/dashboard/default'})}><Linkedin className="txt-linkedin" /> {LinkedInIcon}</Button>
        <Button tag="a" color="light" onClick={handlesubmit}><Twitter className="txt-twitter" />{TwitterIcon}</Button>
        <Button tag="a" color="light" onClick={handlesubmit}><Facebook className="txt-fb" />{FacebookIcon}</Button>
      </div>
    </div>
  );
};
