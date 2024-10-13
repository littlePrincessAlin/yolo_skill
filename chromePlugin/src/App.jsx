import { useState, useEffect } from "react";
// import Router from "../src/router/index";
import Home from "./pages/Home/index";
import { Button, Drawer } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import Styles from "./app.module.css";
import { getCVInfo, setCVStatus } from "./fetch/apis";

function App() {
  // 简历信息
  const [info, setInfo] = useState(null);
  // 简历编号
  const [jianCode, setJianCode] = useState("");
  // 当前用户名
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // 监听插件回调
    window.addEventListener("message", (res) => {
      // 获得简历编号、用户名、行为
      const { jianCode, name, action } = res?.data || {};
      console.log("lilin222", jianCode, name, action);
      setJianCode(jianCode);
      setName(name);
      // 进入猎聘详情页，获取存储的简历信息
      if (jianCode && !action) {
        getCVInfo({ cv_id: jianCode })
          .then(({ data }) => {
            setInfo(data);
          })
          .catch((err) => {
            console.log("Error:", err);
          });
      }
      // 点击联系按钮时，触发修改简历阅读状态
      if (action === "click") {
        setCVStatus({ cv_id: jianCode });
      }
    });
  }, []);

  return (
    <>
      <Button type="primary" onClick={showDrawer} className={Styles.home}>
        简历工具🔧
      </Button>
      <Drawer
        title="简历档案"
        onClose={onClose}
        open={open}
        mask={false}
        closeIcon={<DoubleRightOutlined />}
      >
        <Home info={info} jianCode={jianCode} name={name} />
      </Drawer>
    </>
  );
}

export default App;
