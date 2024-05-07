import Breadcrumb from '@zx/backstage-components/dist/Breadcrumb.min';
import '@zx/backstage-components/dist/Breadcrumb.min.css'

import Button from '@zx/backstage-components/dist/Button.min';
import '@zx/backstage-components/dist/Button.min.css'
import styles from "./home.module.scss";

import Layout from '@zx/backstage-components/dist/Layout.min';
import '@zx/backstage-components/dist/Layout.min.css'


export const metadata = {
  title: 'Breadcrumb',
  description: 'Breadcrumb Home',
}

function Home(props) {

  const { name, count } = props;
  return (
    <>
    <Layout title="测试" style={{height: 1000}}>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>Content</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
    <span>{name}</span>
    <span>{count}</span>
    <Button type="primary">基础使用</Button>
    <div className={styles.container}>
    <Breadcrumb />
      <Button type="primary">基础使用</Button>
      <button className={styles.btn}>module css</button>
    </div>
    </>
  )
}

export default Home;