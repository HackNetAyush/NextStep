import { useState } from "react";
import { Check, X } from "lucide-react";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";

import { Button } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "For individuals starting their career journey",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Basic career pathways",
        "AI skill assessment",
        "Community access",
      ],
      cta: "Get Started",
      highlight: false,
      bgColor: "bg-white",
    },
    {
      name: "Pro",
      description: "For professionals seeking career growth",
      price: { monthly: 9.99, yearly: 99 },
      features: [
        "Personalized career paths",
        "Detailed skill analysis",
        "Curated resources",
        "Interactive dashboard",
      ],
      cta: "Upgrade to Pro",
      highlight: true,
      bgColor: "bg-primary/10",
    },
    {
      name: "Ultimate",
      description: "For ambitious individuals aiming for rapid advancement",
      price: { monthly: 19.99, yearly: 199 },
      features: [
        "All Pro features",
        "Exclusive AI-generated tracks",
        "1-on-1 sessions",
        "Custom resources",
        "Event access",
      ],
      cta: "Get Ultimate",
      highlight: false,
      bgColor: "bg-secondary/10",
    },
  ];

  const featureComparison = [
    { feature: "Career pathways", basic: true, pro: true, ultimate: true },
    { feature: "AI skill assessment", basic: true, pro: true, ultimate: true },
    { feature: "Community access", basic: true, pro: true, ultimate: true },
    {
      feature: "Personalized career paths",
      basic: false,
      pro: true,
      ultimate: true,
    },
    {
      feature: "Detailed skill analysis",
      basic: false,
      pro: true,
      ultimate: true,
    },
    { feature: "Curated resources", basic: false, pro: true, ultimate: true },
    {
      feature: "Interactive dashboard",
      basic: false,
      pro: true,
      ultimate: true,
    },
    {
      feature: "Exclusive AI-generated tracks",
      basic: false,
      pro: false,
      ultimate: true,
    },
    { feature: "1-on-1 sessions", basic: false, pro: false, ultimate: true },
    { feature: "Custom resources", basic: false, pro: false, ultimate: true },
    { feature: "Event access", basic: false, pro: false, ultimate: true },
  ];

  return (
    <div className="container mx-auto px-4 py-16 overflow-y-auto">
      <h1 className="text-4xl font-bold text-center mb-4">
        Choose Your NextStep Plan
      </h1>
      <div className="flex items-center justify-center mb-8">
        <span className="mr-2">Monthly</span>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} />
        <span className="ml-2">
          Yearly{" "}
          <span className="text-green-500 font-semibold">(Save up to 17%)</span>
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`${plan.bgColor} ${
              plan.highlight ? "border-primary shadow-lg" : ""
            }`}
          >
            <CardHeader>
              <div>{plan.name}</div>
              <div>{plan.description}</div>
            </CardHeader>
            <CardBody>
              <div className="text-4xl font-bold mb-4">
                ${isYearly ? plan.price.yearly : plan.price.monthly}
                <span className="text-sm font-normal">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.highlight ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </CardFooter>
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                Most Popular
              </div>
            )}
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">
        Feature Comparison
      </h2>
      <div className="overflow-x-auto mb-16">
        <table className="w-full">
          <thead>
            <tr className="bg-muted">
              <th className="p-2 text-left">Feature</th>
              <th className="p-2 text-center">Basic</th>
              <th className="p-2 text-center">Pro</th>
              <th className="p-2 text-center">Ultimate</th>
            </tr>
          </thead>
          <tbody>
            {featureComparison.map((row) => (
              <tr key={row.feature} className="border-b">
                <td className="p-2">{row.feature}</td>
                <td className="p-2 text-center">
                  {row.basic ? (
                    <Check className="inline h-4 w-4 text-green-500" />
                  ) : (
                    <X className="inline h-4 w-4 text-red-500" />
                  )}
                </td>
                <td className="p-2 text-center">
                  {row.pro ? (
                    <Check className="inline h-4 w-4 text-green-500" />
                  ) : (
                    <X className="inline h-4 w-4 text-red-500" />
                  )}
                </td>
                <td className="p-2 text-center">
                  {row.ultimate ? (
                    <Check className="inline h-4 w-4 text-green-500" />
                  ) : (
                    <X className="inline h-4 w-4 text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardBody className="pt-6">
            <p className="italic mb-4">
              "NextStep has been instrumental in my career growth. The
              personalized career paths and AI-driven insights have given me a
              clear direction for my professional development."
            </p>
            <p className="font-semibold">- Sarah J., Marketing Specialist</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="pt-6">
            <p className="italic mb-4">
              "The Ultimate plan's 1-on-1 sessions and exclusive resources have
              accelerated my learning and opened up new opportunities I never
              thought possible."
            </p>
            <p className="font-semibold">- Michael T., Software Engineer</p>
          </CardBody>
        </Card>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 mb-16">
        <Card>
          <CardHeader>
            <div>How does the AI skill assessment work?</div>
          </CardHeader>
          <CardBody>
            <p>
              Our AI-powered skill assessment analyzes your current skillset,
              work history, and career goals to provide a comprehensive
              evaluation of your strengths and areas for improvement.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <div>Can I upgrade or downgrade my plan at any time?</div>
          </CardHeader>
          <CardBody>
            <p>
              Yes, you can upgrade or downgrade your plan at any time. Changes
              will be reflected in your next billing cycle.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <div>
              What's included in the 1-on-1 sessions with the Ultimate plan?
            </div>
          </CardHeader>
          <CardBody>
            <p>
              1-on-1 sessions in the Ultimate plan include personalized career
              coaching, resume reviews, interview preparation, and tailored
              advice from industry experts to help you achieve your career
              goals.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
