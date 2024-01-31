import { Divider, Flex, Tag, Typography } from "antd";

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <Flex align="center">
        <img src={coin.icon} alt={coin.name} style={{ width: 40 }} />
        <Typography.Title level={2} style={{ margin: 0, marginRight: 10 }}>
          ({coin.symbol}) {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
    </>
  );
}
