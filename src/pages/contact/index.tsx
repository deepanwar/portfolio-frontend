import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Mail, Phone } from "lucide-react";
import ContactForm from "./components/contact-form";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="mt-20">
      <div className="container px-6 py-3.5 grid grid-cols-[.9fr_1.38fr] gap-7">
        <Card className="rounded-3xl px-14 py-12 border-none bg-foreground row-span-1 col-span-1">
          <CardHeader className="px-0 pt-0 pb-4">
            <CardTitle className="heading-1 !text-background ">
              Contact me
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <p className="text-sm text-background font-medium mb-5">
              Sagittis posuere quisque nulla tincidunt ac lectus at lectus
              scelerisque sodalem ipsum praesent fames at
            </p>
            <div className="flex flex-col space-y-3 font-semibold text-sm text-background">
              <div className="flex items-center gap-x-2">
                <Mail size={24} />
                <a href="mailto:deep.kmr.oct@gmail.com">
                  deep.kmr.oct@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-x-2">
                <Phone size={24} />
                <a href="tel:+91 9548646398">+91 9548646398</a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl px-14 py-12 border-none col-span-1 row-span-2">
          <ContactForm />
        </Card>
        <Card className="rounded-3xl px-6 py-4 border-none col-span-1 row-span-1">
          <CardHeader className="px-0 py-0 flex flex-row justify-between items-center">
            <span className="heading-3">FAQ's</span>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ArrowLeft size={15} />
              </Button>
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ArrowRight size={15} />
              </Button>
            </div>
          </CardHeader>
          <hr className="my-4 border-neutral-300" />
          <CardContent className="px-0 pb-0">
            <div>
              <h4 className="text-sm font-bold mb-2">
                Are you currently looking for full-time roles?
              </h4>
              <p className="heading-3">
                I’m only open for freelance projects 🤓
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
