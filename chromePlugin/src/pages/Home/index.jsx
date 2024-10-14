import styles from "./index.module.css";
import { Button, Input, Form, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import { useSelector } from "react-redux";
import { addRemark } from "../../fetch/apis";
const { TextArea } = Input;

const Home = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  // const userInfo = useSelector((state) => state.userInfo);
  // const { name } = userInfo || {};
  const { cvId, info, name, token } = props || {};

  const onFinish = (values) => {
    console.log("Success:", { ...values, name, cv_id: cvId });
    // 备注、用户名、简历编号
    addRemark({ ...values, created_by: name, cv_id: cvId, token })
      .then((res) => {
        const { code, data } = res || {};
        code === 1 &&
          messageApi.open({
            type: "success",
            content: "提交成功",
          });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <div className={styles.home}>
      {contextHolder}
      <p className={info ? styles.hasInfo : styles.noInfo}>
        <UserOutlined />
        <span>
          该候选人
          {info.length ? "已" : "未"}联系
        </span>
      </p>
      {info.length && (
        <div>
          <p>
            <span>备注人：{ info[0] && info[0].created_by }</span>
          </p>
          <p>
            <span>备注内容：{ info[0] && info[0].content }</span>
          </p>
          <p>
            <span>备注时间：{ info[0] && info[0].created_at }</span>
          </p>
        </div>
      )}
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
          autoComplete="off"
        >
          <Form.Item label="备注" name="content">
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
    </div>
  );
};
export default Home;
