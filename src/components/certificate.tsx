import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import certificates from "@/data/certificates";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "./ui/separator";

export default function Certificate() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[70%] max-w-[50%] max-w-[60%] "
    >
      <CarouselContent className="min-h-[150px]">
        {certificates.map((cert, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Dialog>
                <DialogTrigger asChild>
                  <Image
                    src={cert.path}
                    alt={cert.name}
                    height={200}
                    width={200}
                    className="rounded-lg h-[150px] border cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent className="bg-gray-100 dark:bg-gray-800">
                  <DialogHeader>
                    <DialogTitle>{cert.name}</DialogTitle>
                    <Separator className="dark:bg-white" />
                  </DialogHeader>
                  <Image
                    src={cert.path}
                    alt={cert.name}
                    height={200}
                    width={200}
                    className="rounded-lg border w-[100%]"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
