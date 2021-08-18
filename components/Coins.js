import Image from "next/image";
import Link from "next/link";

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`} passHref>
      <a>
        <div className="flex justify-center overflow-x-auto">
          <div className="flex flex-row justify-start items-center h-20 border-solid border-gray-500 border w-[1000px] px-8 hover:bg-gray-700">
            <div className="flex items-center pr-6">
              <Image src={image} alt={name} width={30} height={30} />
              <h1 className="text-base w-[150px] ml-[10px]">{name}</h1>
              <p className="uppercase">{symbol}</p>
            </div>
            <div className="flex text-right justify-between w-full">
              <p className="w-[110px]">${price}</p>
              <p className="w-[155px]">${volume.toLocaleString()}</p>
              {priceChange < 0 ? (
                <p className="w-[100px] text-red-600">
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className="w-[100px] text-green-600">
                  {priceChange.toFixed(2)}%
                </p>
              )}

              <p className="w-[230px]">
                Mkt Cap: ${marketcap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default Coins;
