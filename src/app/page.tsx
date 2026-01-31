import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Card className="border-0 bg-transparent shadow-none">
        <CardHeader className="text-center space-y-4 pb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Bogdan Alexandrescu
          </h1>
          <p className="text-muted-foreground text-lg">
            Building things on the internet.
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link
                href="https://twitter.com/balx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://linkedin.com/in/alexandrescu"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
