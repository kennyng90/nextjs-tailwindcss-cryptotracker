import Layout from "../../components/Layout";
import Image from "next/image";

const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-[75vh]">
        <div className="flex flex-col justify-center items-center border-solid border-1 border-white p-16 w-97">
          <Image
            src={coin.image.large}
            alt={coin.name}
            className="mb-8"
            width={400}
            height={400}
          />
          <h1 className="mb-4 mt-8">{coin.name}</h1>
          <p className="mb-4">{coin.symbol}</p>
          <p className="mb-4 text-3xl">{coin.market_data.current_price.usd}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: { coin: data },
  };
}
