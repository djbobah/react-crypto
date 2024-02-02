import { useState } from "react";
import { Select, Space, Typography, Flex, Divider } from "antd";
import { useCrypto } from "../context/crypto-context";

export default function AddAssetForm() {
  const { crypto } = useCrypto();
  const [coin, setCoin] = useState(null);

  if (!coin) {
    return (
      <Select
        // mode="multiple"
        style={{
          width: "100%",
        }}
        // open={select}
        // onClick={() => setSelect((prev) => !prev)}
        // placeholder="select one country"
        // defaultValue={["china"]}
        placeholder="Select coin"
        // onChange={handleChange}
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
        // optionLabelProp="label"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />
            {option.data.label}
          </Space>
        )}
      />
    );
  }

  return (
    <form>
      <Flex align="center">
        <img src={coin.icon} alt={coin.name} style={{ width: 40 }} />
        <Typography.Title level={2} style={{ margin: 0, marginRight: 10 }}>
          {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
      {/* <Typography.Title level={2} style={{ margin: 0 }}></Typography.Title>
      {coin.name} */}
    </form>
  );
}
