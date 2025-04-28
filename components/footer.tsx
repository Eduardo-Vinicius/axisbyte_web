'use client';

import { useEffect, useState } from 'react';
import { buttonVariants } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useTheme } from 'next-themes';

export function Footer(props: {
  builtBy: string;
  builtByLink: string;
  instagramLink: string;
  twitterLink: string;
  linkedinLink: string;
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className={`border-t ${theme === 'dark' ? 'text-gray-300' : 'bg-white'}`}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className={`text-center text-sm leading-loose ${theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'} md:text-left`}>
            <a
              href={props.builtByLink}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {props.builtBy}
            </a>
            . © 2025 — Todos os direitos reservados
          </p>
        </div>

        <div className="flex items-center space-x-1">
          {(
            [
              { href: props.twitterLink, icon: TwitterLogoIcon },
              { href: props.linkedinLink, icon: LinkedInLogoIcon },
              { href: props.instagramLink, icon: InstagramLogoIcon },
            ] as const
          ).map((link, index) => (
            <Link
              href={link.href}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              key={index}
            >
              <link.icon className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-card-foreground'}`} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
