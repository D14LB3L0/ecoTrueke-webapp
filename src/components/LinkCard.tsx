import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JSX } from "react";
import { Link } from "react-router-dom";

interface LinkCardProps {
  to: string;
  icon: JSX.Element;
  title: string;
  description: string;
  disabled?: boolean;
}

const LinkCard: React.FC<LinkCardProps> = ({
  to,
  icon,
  title,
  description,
  disabled,
}) => {
  return (
    <Link to={disabled ? "" : to} className="group block">
      <Card
        className={`max-h-[166px] min-h-[166px] flex flex-col items-center text-center gap-2 p-6 transition-transform duration-200 
    ${
      disabled
        ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
        : "hover:shadow-md hover:-translate-y-1 hover:bg-accent"
    }`}
      >
        <CardHeader className="flex items-center justify-center p-0">
          <div
            className={`text-muted-foreground ${
              disabled ? "" : "group-hover:text-black"
            }  transition-colors`}
          >
            {icon}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-1 p-0">
          <CardTitle
            className={`text-base font-semibold disabled ? "" : "group-hover:text-black" transition-colors`}
          >
            {title}
          </CardTitle>
          <CardDescription
            className={`text-sm text-muted-foreground disabled ? "" : "group-hover:text-black"`}
          >
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LinkCard;
