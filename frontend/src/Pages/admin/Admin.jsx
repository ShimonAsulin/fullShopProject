import { Button, Table, Form, Input } from "antd";
import "antd/dist/antd.css";
import styles from "./admin.module.css";
import { useMyContext } from "../../MyContext";
import { useState, useEffect } from "react";

const Admin = () => {
  const { products } = useMyContext();
  const { productsData, editProducts } = products;
  const [dataSource, setDataSource] = useState();
  const [editRow, setEditRow] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const p = dataSource?.filter((product) => product.id === editRow);
    // console.log(p);
    editProducts(p);
    // console.log(editRow);
  }, [dataSource]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",

      render: (text, record) => {
        if (editRow === record.id) {
          return (
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please enter your Title",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Id",
      dataIndex: "id",

      render: (text, record) => {
        if (editRow === record.id) {
          return (
            <Form.Item
              name="id"
              rules={[
                {
                  required: true,
                  message: "Please enter your Id",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (text, record) => {
        if (editRow === record.id) {
          return (
            <Form.Item
              name="image"
              rules={[
                {
                  required: true,
                  message: "Please enter your Image",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text, record) => {
        if (editRow === record.id) {
          return (
            <Form.Item
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please enter your Price",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text, record) => {
        if (editRow === record.id) {
          return (
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please enter your Description",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Category",
      dataIndex: "category",

      render: (text, record) => {
        if (editRow === record.id) {
          return (
            <Form.Item
              name="category"
              rules={[
                {
                  required: true,
                  message: "Please enter your Category",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },

    {
      title: "Actions",
      render: (_, record) => {
        return (
          <>
            <Button
              onClick={() => {
                setEditRow(record.id);
                form.setFieldsValue({
                  title: record.title,
                  id: record.id,
                  price: record.price,
                  description: record.description,
                  image: record.image,
                  category: record.category,
                });
              }}
            >
              Edit
            </Button>
            <Button htmlType="submit">Save</Button>
          </>
        );
      },
    },
  ];
  const onFinish = (values) => {
    const updatedDataSource = [...productsData];
    updatedDataSource.splice(editRow - 1, 1, { ...values, key: editRow });
    // console.log(updatedDataSource);
    setDataSource(updatedDataSource);
    // setEditRow(null)
    // console.log(values);
  };

  return (
    <div>
      <h1>Admin</h1>
      <Form form={form} onFinish={onFinish}>
        <Table
          className={styles.table}
          columns={columns}
          dataSource={productsData}
          rowKey="id"
        ></Table>
      </Form>
    </div>
  );
};

export default Admin;
