import {
  BrainIcon,
  MonitorSmartphoneIcon,
  MoonIcon,
  PaletteIcon,
  ZapIcon,
  RocketIcon,
  GlobeIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Everything you need. Nothing you don't.",
  items = [
    {
      title: "AI-Integrated Solutions",
      description:
        "We build intelligent systems that adapt, learn, and automate to elevate your business workflows.",
      icon: <BrainIcon className="size-5 stroke-1" />,
    },
    {
      title: "Responsive Web Design",
      description:
        "Optimized for all devices, ensuring seamless experience whether on mobile, tablet, or desktop.",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Dark & Light Mode Support",
      description:
        "Custom themes to support both dark and light UI, improving accessibility and user comfort.",
      icon: <MoonIcon className="size-5 stroke-1" />,
    },
    {
      title: "Brand-Ready Customization",
      description:
        "Tailored UI and flexible architecture that aligns perfectly with your brand identity.",
      icon: <PaletteIcon className="size-5 stroke-1" />,
    },
    {
      title: "High-Speed Performance",
      description:
        "Built with best practices for performance-first experiences and fast loading speeds.",
      icon: <ZapIcon className="size-5 stroke-1" />,
    },
    {
      title: "Enterprise-Grade Readiness",
      description:
        "Production-ready deployments with robust testing, CI/CD, and security standards.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "Multilingual Support",
      description:
        "Easily localize your platform for global reach with built-in i18n compatibility.",
      icon: <GlobeIcon className="size-5 stroke-1" />,
    },
    {
      title: "CMS & API Friendly",
      description:
        "Seamless integration with headless CMS platforms and custom APIs to power your content.",
      icon: <LayoutDashboardIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
