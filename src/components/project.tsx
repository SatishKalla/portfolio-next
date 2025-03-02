import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Project({
  project,
}: {
  project: {
    name: string;
    fullName: string;
    description: string;
    role: string;
    techStack: string[];
    responsibilities: string[];
    type: string;
    url?: string;
    images?: string[];
    icon?: React.ReactElement;
  };
}) {
  return (
    <Card className="h-70  md:w-85 bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-[0_2px_6px_#0ac5b2]">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-5 max-w-xs">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="sm" className="cursor-pointer">
              View More
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gray-100 dark:bg-gray-800 lg:max-w-lg md:max-w-md sm:max-w-sm shadow-lg dark:shadow-[0_2px_6px_#0ac5b2] gap-2 h-screen">
            <SheetHeader className="pl-3 pr-3">
              <SheetTitle>{project.fullName}</SheetTitle>
              <SheetDescription>
                {project.role} | {project.type}
              </SheetDescription>
              <Separator className="bg-gray-200 dark:bg-gray-600" />
            </SheetHeader>
            <div className="pl-3 pr-3 overflow-y-auto">
              <p className="text-blue-500 mb-2 dark:text-blue">
                {project.url && (
                  <Link href={project.url} target="_blank">
                    Visit Website
                  </Link>
                )}
              </p>
              <p className="text-gray-600 mb-2 dark:text-white">
                {project.description}
              </p>
              <div className="mb-2">
                <Label className="font-medium mb-1">Technology stack:</Label>
                <Separator className="bg-gray-200 dark:bg-gray-600" />
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-sm px-3 py-1 border-[#0ac5b2] text-gray-600 dark:text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label className="font-medium mb-1">Responsibilities:</Label>
                <Separator className="bg-gray-200 dark:bg-gray-600" />
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.responsibilities.map((responsibility, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[25px_1fr] items-start pb-1 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full primary-bg-color" />
                      <div className="space-y-1">
                        <p className="text-gray-600 dark:text-white leading-none">
                          {responsibility}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  );
}
