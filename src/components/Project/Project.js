import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Project({ name, image, git, live, description }) {
  return (
    <div className="flex-row mx-auto p-10">
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={image}
            alt="card"
            style={{ height: "250px", width: "500px" }}
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>{description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={() => window.location.assign(live)}>Preview</Button>
          <Button
            ripple={true}
            style={{ marginLeft: "10px" }}
            onClick={() => window.location.assign(git)}
          >
            View Source
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
