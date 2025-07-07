import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Experience } from "./data";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { jobTitle, companyName, description, skills } = props.experience;

  return (
    <Card className="experience-card border-primary/30 shadow-lg hover:shadow-primary/30 transition-shadow duration-300 rounded-2xl bg-card/80 backdrop-blur-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg md:text-xl font-bold text-primary">
          {jobTitle}
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          {companyName}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between h-full">
        <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-foreground">
          {description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </CardContent>
      <div className="flex flex-wrap gap-2 mt-4 px-6 pb-4">
        {skills.map((skill, idx) => (
          <Badge
            key={idx}
            variant="secondary"
            className="border border-primary/40 bg-secondary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default ExperienceCard;
