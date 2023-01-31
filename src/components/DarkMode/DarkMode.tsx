import { Switch, Space } from "antd";

type DarkModeProps = {
  setDarkMode: (darkMode: string) => void;
};

export const DarkMode = ({ setDarkMode }: DarkModeProps) => {
  return (
    <Switch
      checkedChildren="on"
      unCheckedChildren="off"
      onChange={(checked) => {
        if (checked == true) {
          setDarkMode("true");
          localStorage.setItem("darkMode", "true");
        } else if (checked == false) {
          setDarkMode("false");
          localStorage.setItem("darkMode", "false");
        }
      }}
      defaultChecked={localStorage.getItem("darkMode") == "true" ? true : false}
    />
  );
};
