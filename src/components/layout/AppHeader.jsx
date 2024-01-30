import { Layout, Select, Space, Button } from "antd";
import { useCrypto } from "../../context/crypto-context";
import { useState } from "react";

const headerStyle = {
  width: "100%",
  textAlign: "center",
  // color: "#fff",
  height: 60,
  // paddingInline: 48,
  // lineHeight: "64px",
  // backgroundColor: "#fff",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function AppHeader() {
  const [select, setSelect] = useState(false);
  const { crypto } = useCrypto();

  function handleSelect(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Layout.Header style={headerStyle}>
      <Select
        // mode="multiple"
        style={{
          width: 250,
        }}
        // placeholder="select one country"
        // defaultValue={["china"]}
        value="press / to open"
        // onChange={handleChange}
        onSelect={handleSelect}
        optionLabelProp="label"
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
      <Button type="primary">Add Asset</Button>
    </Layout.Header>
  );
}
