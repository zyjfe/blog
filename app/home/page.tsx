import Breadcrumb from '@zx/backstage-components/dist/Breadcrumb.min';
import '@zx/backstage-components/dist/Breadcrumb.min.css'

import Button from '@zx/backstage-components/dist/Button.min';
import '@zx/backstage-components/dist/Button.min.css'
import styles from "./home.module.scss";

export const metadata = {
  title: 'Breadcrumb',
  description: 'Breadcrumb Home',
}

function Home(props) {

  const { name, count } = props;
  return (
    <>
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