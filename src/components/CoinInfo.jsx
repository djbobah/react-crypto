import { Flex, Typography } from "antd";

export default function CoinInfo({ coin }) {
  return (
    <Flex align="center">
      <img src={coin.icon} alt={coin.name} style={{ width: 40 }} />
      <Typography.Title level={2} style={{ margin: 0, marginRight: 10 }}>
        {coin.name}
      </Typography.Title>
    </Flex>
  );
}
