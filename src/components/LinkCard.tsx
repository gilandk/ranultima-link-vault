import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
  featured?: boolean;
}

export const LinkCard = ({ title, url, icon, featured = false }: LinkCardProps) => {
  return (
    <Card className={`
      glass-card glow-hover cursor-pointer
      ${featured ? 'col-span-full' : ''}
    `}>
      <Button
        variant="ghost"
        className="w-full h-auto p-6 justify-start hover:bg-transparent group"
        asChild
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center space-x-4 w-full">
            {icon && (
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-primary">
                {icon}
              </div>
            )}
            <span className="text-lg font-medium group-hover:text-primary transition-colors">
              {title}
            </span>
            <ExternalLink className="w-4 h-4 ml-auto opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all" />
          </div>
        </a>
      </Button>
    </Card>
  );
};