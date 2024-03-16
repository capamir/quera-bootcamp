import ProductList from "../../components/ProductList/ProductList"

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  return (
    <ProductList />
  )
}

export default Home