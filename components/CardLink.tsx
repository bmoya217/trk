import Link from "next/link";
import { ExternalLink } from "lucide-react";

type Props = {
  title?: string;
  header: string;
  description: string;
  href: string;
};

export const CardLink = ({ title, header, description, href }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="card block hover:-translate-y-1 transition-transform"
    >
      <div className="flex flex-row justify-between">
        {title ? (
          <p className="section-title">{title}</p>
        ) : (
          <h2 className="card-header">{header}</h2>
        )}
        <ExternalLink />
      </div>
      {title && <h2 className="card-header">{header}</h2>}
      <p className="card-description">{description}</p>
    </Link>
  );
};
