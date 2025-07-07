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
    <Card className="experience-card">
      <CardHeader>
        <CardTitle>{jobTitle}</CardTitle>
        <CardDescription>{companyName}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between h-full">
        <ul className="list-disc pl-5">
          {description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </CardContent>
      <div className="flex flex-wrap gap-2 mt-2 px-6 ">
        {skills.map((skill, idx) => (
          <Badge key={idx} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default ExperienceCard;
