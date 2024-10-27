import { useState } from "react";
// import { Button } from "@/components/ui/button"
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

export default function Onboarding() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    location: "",
    bio: "",
    proud: "",
  });

  const sections = [
    {
      title: "User Information",
      fields: [
        { name: "age", label: "Age", type: "number", inputType: "input" },
        { name: "gender", label: "Gender", type: "text", inputType: "input" },
        {
          name: "location",
          label: "Location",
          type: "text",
          inputType: "input",
        },
      ],
    },

    {
      title: "Additional Information",
      fields: [
        {
          name: "bio",
          label: "Tell us about yourself",
          type: "text",
          inputType: "textarea",
        },
      ],
    },

    {
      title: "Additional Information",
      fields: [
        {
          name: "proud",
          label: "Tell something that you are proud of!",
          type: "text",
          inputType: "textarea",
        },
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 w-full">
      <Card className="w-full max-w-[95%] sm:max-w-[450px] p-2">
        <CardHeader className="flex flex-col">
          <div className="title w-full text-2xl font-bold">
            {sections[currentSection].title}
          </div>
          <div className="desc w-full text-[16px] text-gray-500">
            Please fill out the information below
          </div>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {sections[currentSection].fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  {field.inputType === "input" && (
                    <Input
                      key={field.name}
                      name={field.name} // Added name prop
                      type={field.type}
                      label={field.label}
                      labelPlacement="inside"
                      placeholder={`Enter your ${field.name}`}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      isRequired
                    />
                  )}

                  {field.inputType === "textarea" && (
                    <Textarea
                      key={field.name}
                      name={field.name} // Added name prop
                      label={field.label}
                      labelPlacement="outside"
                      placeholder={`Enter your ${field.name}`}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      isRequired
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={handleBack}
                  disabled={currentSection === 0}
                  variant="outline"
                >
                  Back
                </Button>
                {currentSection === sections.length - 1 ? (
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                ) : (
                  <Button type="button" onClick={handleNext}>
                    Next
                  </Button>
                )}
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

// Gender, Location, age, bio --> textarea, What is omsthing that you hvae done that you are proud of
