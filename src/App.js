import { useEffect, useState } from "react";
import "./App.css";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);


  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  return (
    <div className="App">
      <main className="container">
       {
        products.map((data)=>
        <Card maxW="xs" className="card">
          <CardBody>
            <Image
            className="card-img"
              src={data.image}
              alt="product"
              borderRadius="lg"
              />
            <Stack mt="6" spacing="3">
              <Heading size="md">{data.title}</Heading>
              <Text >
                {data.description}
              </Text>
              <Text color="blue.600" fontSize="2xl">
                Rs {data.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        )
       }
        
      </main>
    </div>
  );
}

export default App;