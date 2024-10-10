import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Button, Drawer, Input, Form } from "antd";
import { UserOutlined, DoubleRightOutlined } from "@ant-design/icons";
// import { getInfo } from '../../fetch/apis';
const { TextArea } = Input;

const Home = () => {
  const [open, setOpen] = useState(false);
  // 简历状态
  const [info, setInfo] = useState(null);
  // 简历code
  const [jianCode, setJianCode] = useState('');


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    // getInfo().then
    // setInfo({});
    window.addEventListener('message', (res) => {
      console.log('res', res);
      setJianCode(res?.data?.jianCode)
    })
  }, [])

  return (
    <div className={styles.home}>
      <Button type="primary" onClick={showDrawer}>
        简历工具🔧
      </Button>
      <Drawer title="简历档案" onClose={onClose} open={open} mask={false} closeIcon={<DoubleRightOutlined />}>
        <p>
          <UserOutlined />该候选人{jianCode}{info ? "已" : "未"}联系
        </p>
        {!info && (
          <div>
            <Form
              name="basic"
              layout="vertical"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >

              <Form.Item label="备注" name="describe">
                <TextArea rows={4} />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 1,
                }}
              >
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
        {info && (
          <div>
            <p>
              <span>联系人：13569127156</span>
            </p>
            <p>
              <span>备注：</span>
            </p>
          </div>
        )}
      </Drawer>
    </div>
  );
};
export default Home;
