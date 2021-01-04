import React, { useState } from 'react';
import convertTextToJSX from '../../helper/convertTextToJSX';
import TabItem from './TabItem';
import styles from './Contents.module.scss';

const Contents = ({ items }) => {
  const [index, setIndex] = useState(0);

  return (  
    <section className={styles.wrap}>
      <nav className={styles.nav}>
        {items.map((item, index) => 
          <TabItem 
            key={item.id} 
            onClick={() => setIndex(index)}
          >
            {item.tabTitle}
          </TabItem>
        )}
      </nav>
      <div className={styles.item}>
        <div className={styles.imageWrap}>
          <img src={items[index].image} alt="item-image" className={styles.image}/>
        </div>
        <div className={styles.texts}>
          <h3 className={styles.title}>{items[index].title}</h3>
          <div className={styles.description}>
            {convertTextToJSX(items[index].description)}
          </div>
          <a className={styles.detailButton}>자세히 보기</a>
        </div>
      </div>
    </section>
  );
}
 
export default Contents;