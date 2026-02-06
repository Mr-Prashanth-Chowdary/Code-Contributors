import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Divider from "@/components/ui/Divider";
import  Github  from "../icons/github.svg";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

export default function Login() {
  return (
    <div className="mt-5 lg:px-[140px] md:px-[100px] sm:px-[50px] px-[20px]">
      <Nav/>
      <div className="min-h-[calc(100vh-350px)] flex items-center">
      <Card className="lg:w-1/2 py-10 w-full mx-auto text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up with GitHub</CardTitle>
          <CardDescription className="text-md font-inter">join the developer community finding there next impact.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="lg:w-[80%] py-7 font-mono font-bold text-lg">
            <img src={Github} alt="" className="w-5 h-5" />
            Continue with GitHub
          </Button>
          <CardDescription className="text-md my-15 lg:w-[70%] mx-auto font-inter">
            Connect with your github account and analyze your contribution history, skills, and interests we use this data to find prefect open source project for you.
          </CardDescription>
        </CardContent>
        <Divider className="w-[calc(100%-40px)] mx-auto"/>
        <CardFooter className="flex justify-center">
          <CardDescription className="font-mono text-sm">By signing up, you agree to our Terms of Service and Privacy Policy.</CardDescription>
        </CardFooter>
      </Card>
      </div>
      <Footer/>
    </div>
  )
}
